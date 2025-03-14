export async function POST(req) {
    try {
        const body = await req.json();
        const { telefono, confirmed, acompanantesConfirmados } = body;

        // Validar que se proporcionó un número de teléfono
        if (!telefono) {
            return new Response(
                JSON.stringify({ success: false, message: '❌ Debes proporcionar un número de teléfono válido.' }),
                { status: 400 }
            );
        }

        // Normalizar el número de teléfono
        const numeroLimpio = limpiarNumero(telefono);
        if (!numeroLimpio) {
            return new Response(
                JSON.stringify({ success: false, message: '❌ El número de teléfono proporcionado no es válido.' }),
                { status: 400 }
            );
        }

        console.log(`📌 Buscando número normalizado: ${numeroLimpio}`);

        // Cargar la lista de invitados
        const invitados = cargarInvitados();

        // Verificar si el número está en la lista de invitados
        if (!invitados[numeroLimpio] || !invitados[numeroLimpio].principal) {
            return new Response(
                JSON.stringify({ success: false, message: '❌ Número no registrado. Verifica tu invitación.' }),
                { status: 400 }
            );
        }

        const { principal, acompanantes } = invitados[numeroLimpio];

        // Guardar el registro de confirmación
        guardarRegistro(numeroLimpio, principal.nombre, confirmed, acompanantesConfirmados);

        // Mensaje de confirmación
        const message = `🚀 Confirmación de asistencia:\n👤 Invitado: ${principal.nombre}\n📞 Teléfono: ${telefono}\n🎟 Lugares asignados: ${principal.lugares}\n${acompanantes.length > 0 ? `👥 Acompañantes: ${acompanantes.map(a => a.nombre).join(', ')}\n` : ''}${confirmed ? '✅ ¡Nos vemos en la boda!' : '❌ Lamentamos que no puedas asistir.'}`;

        return new Response(
            JSON.stringify({
                success: true,
                message: message,
                lugares: principal.lugares,
                acompanantes: acompanantes.map(a => ({ nombre: a.nombre, codigo: a.codigo })),
            }),
            { status: 200 }
        );

    } catch (error) {
        console.error('❌ Error en el servidor:', error);
        return new Response(
            JSON.stringify({ success: false, message: '❌ Error en el servidor. Intenta nuevamente.' }),
            { status: 500 }
        );
    }
}