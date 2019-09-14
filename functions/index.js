const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

const SENDGRID_API_KEY = functions.config().sendgrid.key

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);

exports.nuevoRequerimiento = functions.firestore
    .document('requerimientos/{requerimientoId}')
    .onCreate((snap, context) => {
        const requerimientoId = context.params.requerimientoId;
        const db = admin.firestore()
        return db.collection('requerimientos').doc(requerimientoId)
            .get()
            .then(doc => {
                const requerimiento = doc.data();
                const msg = {
                    from: 'hola@khapac.com',
                    to: 'pzevallos@khapac.com',
                    // cc: 'pastor.zevallos@punkumagic.com',
                    // bcc: 'pzevallos@khapac.com',
                    // subject: 'Nuevo evento creado en PachaTiempo',
                    // text: `Hey ${toName}. You have a new follower!!! `,
                    // html: `<strong>Hey ${toName}. You have a new follower!!!</strong>`,

                    // custom templates
                    templateId: 'd-7a05650511424fefb9f7869eb926ee5e',
                    substitutionWrappers: ['{{', '}}'],
                    dynamic_template_data: {
                        descripcion: requerimiento.descripcion,
                        area: requerimiento.area,
                        nombre: requerimiento.nombre,
                        email: requerimiento.email,
                        celular: requerimiento.celular,
                    }
                };
                return sgMail.send(msg)
            })
            .then(() => console.log('email enviado!'))
            .catch(err => console.log(err))
    });