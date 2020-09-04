import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
const db = admin.firestore();

const SENDGRID_API_KEY = functions.config().sendgrid.key;
import * as sgMail from '@sendgrid/mail';
sgMail.setApiKey(SENDGRID_API_KEY);

export const nuevoRequerimiento = functions.firestore.document('requerimientos/{requerimientoId}').onCreate( async (change, context) => {
  const postSnap = await db.collection('requerimientos').doc(context.params.requerimientoId).get();
  // tslint:disable-next-line:no-non-null-assertion
  const requerimiento = postSnap.data()!;
  const msg = {
      from: 'hola@khapac.pe',
      to: 'khapacperu@gmail.com',
      // bcc: 'martinalcandre@gmail.com',
      templateId: 'd-7a05650511424fefb9f7869eb926ee5e',
      dynamic_template_data: {
        descripcion: requerimiento.descripcion,
        nombre: requerimiento.nombre,
        email: requerimiento.email,
        celular: requerimiento.celular,
      },
  };

  return sgMail.send(msg)
  .then(() => console.log('email enviado!'))
  .catch(err => console.log(err));

});

