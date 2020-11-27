import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import jsPDF from 'jspdf'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent {
  title = 'FORMULARIO DE INSCRIPCIÓN PARA REPICA'
  form = new FormGroup({})
  options: FormlyFormOptions = {};
  model: any = {
  }

  fields: FormlyFieldConfig[] = [
    {
      className: 'datos-denominacion',
      template: '<div class="coltit"><h2 style="color:#53aae0;">Denominación:</h2></div>',
    },


    // Denominación

    {
      key: 'Denominación',
      type: 'no repeat',
      templateOptions: {
        addText: 'Ingresar Denominación',
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'Nombre de la institución',
            type: 'input',
            templateOptions: {
              label: 'Nombre de la institución',
              required: true,
              placeholder: 'Ingrese el nombre completo de la institución'
            }
          },
          {
            key: 'Nombre de fantasía',
            type: 'input',
            templateOptions: {
              label: 'Nombre de fantasía',
              placeholder: 'Ingrese el nombre de fantasía',
            },
          },
          {
            key: 'CUIT',
            type: 'input',
            templateOptions: {
              required: true,
              label: 'CUIT',
              placeholder: 'Ingrese un CUIT',
              pattern: '\\d{11}'
            }
          }
        ]
      }
    },
    //--------------------------------------------------------------------------------------------------------

    {
      className: 'datos-domicilio',
      template: '<div><h2>Domicilio Legal</h2></div>',
    },

    {
      key: 'Domicilio Legal',
      type: 'no repeat',
      templateOptions: {
        addText: 'Ingresar datos del domicilio',
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'Calle',
            type: 'input',
            templateOptions:{
              label: 'Calle',
              placeholder: 'Ingrese una calle'
            }
          },
          {
            key: 'Número',
            type: 'input',
            templateOptions: {
              label: 'Número',
              placeholder: 'Ingrese el número de la calle',
              pattern: '\\d{1,5}',
            }
          },
          {
            key: 'CP',
            type: 'input',
            templateOptions: {
              label: 'C.P.',
              placeholder: 'Ingrese el Código Postal',
              pattern: '\\d{1,5}',
            }
          },
          {
            key: 'Barrio',
            type: 'input',
            templateOptions:{
              label: 'Barrio',
              placeholder: 'Ingrese un barrio'
            }
          },
          {
            key: 'Localidad',
            type: 'input',
            templateOptions:{
              label: 'Localidad',
              placeholder: 'Ingrese una localidad'
            }
          },
          {
            key: 'Departamento',
            type: 'input',
            templateOptions:{
              label: 'Departamento',
              placeholder: 'Ingrese un Departamento'
            }
          },
          {
            key: 'Teléfono o Fax',
            type: 'input',
            templateOptions:{
              label: 'Teléfono o Fax',
              placeholder: 'Ingrese un telefono o fax',
              pattern: '\\d{1,25}'
            }
          },
          {
            key: 'E-mail',
            type: 'input',
            templateOptions:{
              type: 'email',
              label: 'E-mail',
              placeholder: 'Ingrese un E-mail'
            }
          },
        ]
      }
    },

    //--------------------------------------------------------------------------------------------------------

    {
      className: 'datos-representantes-legales',
      template: '<div><h2>Representantes legales</h2></div>',
    },
    {
      key: 'Representantes legales',
      type: 'repeat',
      templateOptions: {
        addText: 'Agregar representante legal',
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'Apellido',
            type: 'input',
            templateOptions:{
              label: 'Apellido',
              placeholder: 'Ingrese un apellido'
            }
          },
          {
            key: 'Nombre',
            type: 'input',
            templateOptions:{
              label: 'Nombre',
              placeholder: 'Ingrese un nombre'
            }
          },
          {
            key: 'Tipo de documento',
            type: 'select',
            templateOptions:{
              label: 'Tipo de documento',
              options:[
                {value:  'DNI', label: 'DNI'},
                {value:  'LE', label: 'LE'},
                {value:  'LC', label: 'LC'},
                {value:  'Pasaporte', label: 'Pasaporte'},
              ]
            }
          },
          {
            key: 'Número',
            type: 'input',
            templateOptions:{
              label: 'Número',
              placeholder: 'Ingrese un número de documento',
            }
          }
        ]
      }
    },
    

    //-------------------------------------------------------------------------------------------------------

    {
      className: 'datos-sedes',
      template: '<div><h2>Sedes donde se desarrollarán los cursos</h2></div>',
    },
    {
      key: 'Sedes donde se desarrollarán los cursos',
      type: 'repeat',
      templateOptions: {
        addText: 'Agregar Sede',
      },
      fieldArray: {
        fieldGroup: [
          {
            template: '<h3>Domicilio<h3>'
          },
          {
            key: 'Calle',
            type: 'input',
            templateOptions:{
              label: 'Calle',
              placeholder: 'Ingrese una calle'
            }
          },
          {
            key: 'Número',
            type: 'input',
            templateOptions: {
              label: 'Número',
              placeholder: 'Ingrese el número de la calle',
              pattern: '\\d{1,5}',
            }
          },
          {
            key: 'CP',
            type: 'input',
            templateOptions: {
              label: 'C.P.',
              placeholder: 'Ingrese el Código Postal',
              pattern: '\\d{1,5}',
            }
          },
          {
            key: 'Barrio',
            type: 'input',
            templateOptions:{
              label: 'Barrio',
              placeholder: 'Ingrese un barrio'
            }
          },
          {
            key: 'Localidad',
            type: 'input',
            templateOptions:{
              label: 'Localidad',
              placeholder: 'Ingrese una localidad'
            }
          },
          {
            key: 'Departamento',
            type: 'input',
            templateOptions:{
              label: 'Departamento',
              placeholder: 'Ingrese un Departamento'
            }
          },
          {
            template: '<h3>Responsable<h3>'
          },
          {
            key: 'Apellido y Nombre',
            type: 'input',
            templateOptions:{
              label: 'Apellido y Nombre',
              placeholder: 'Ingrese un Apellido y un Nombre'
            }
          },
          {
            key: 'Tipo de documento',
            type: 'select',
            templateOptions:{
              label: 'Tipo de documento',
              options:[
                {value:  'DNI', label: 'DNI'},
                {value:  'LE', label: 'LE'},
                {value:  'LC', label: 'LC'},
                {value:  'Pasaporte', label: 'Pasaporte'},
              ]
            }
          },
          {
            key: 'Número de documento',
            type: 'input',
            templateOptions:{
              label: 'Número de documento',
              placeholder: 'Ingrese un número de documento',
            }
          },
          {
            key: 'Cargo',
            type: 'input',
            templateOptions: {
              label: 'Cargo',
              placeholder: 'Ingrese un cargo',
            }
          },
          {
            template: 'Tipo de Actividad a Desarrollar (una o más opciónes)'
          },
          {
            key: 'Aula',
            type: 'checkbox',
            templateOptions: {
              label: 'Aula'
            }
          },
          {
            key: 'Salón de usos múltiples',
            type: 'checkbox',
            templateOptions: {
              label: 'Salón de usos múliples'
            }
          },
          {
            key: 'Taller para Prácticas',
            type: 'checkbox',
            templateOptions: {
              label: 'Taller para Prácticas'
            }
          },
          {
            key: 'Total superficie de la institución',
            type: 'checkbox',
            templateOptions: {
              label: 'Total superficie de la institución'
            }
          },
          {
            key: 'Superficie de las Institución destinada a la Capacitación',
            type: 'checkbox',
            templateOptions: {
              label: 'Superficie de las Institución destinada a la Capacitación'
            }
          },
        ]
      }
    },
    //--------------------------------------------------------------------------------------------------------
    {
      className: 'datos-cursos',
      template: '<div><h2>Cursos que la institución ofrecerá a partir de su habilitación en la REPICA</h2></div>',
    },
    {
      key: 'Cursos',
      type: 'repeat',
      templateOptions: {
        addText: 'Agregar curso',
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'Nombre del curso',
            type: 'input',
            templateOptions: {
              label: 'Nombre',
              placeholder: 'Ingrese el nombre del curso'
            }
          },
          {
            template: '<h3>Recursos con los que cuenta para su dictado',
          },
          {
            key: 'Equipamiento',
            type: 'select',
            templateOptions:{
              label: 'Equipamiento',
              options:[
                {value: 'Si', label: 'Si'},
                {value: 'No', label: 'No'},
              ]
            }
          },
          {
            key: 'Docente asignado',
            type: 'select',
            templateOptions:{
              label: 'Docente asignado',
              options:[
                {value: 'Si', label: 'Si'},
                {value: 'No', label: 'No'},
              ]
            }
          },
          {
            key: 'Espacio físico',
            type: 'select',
            templateOptions:{
              label: 'Espacio físico',
              options:[
                {value: 'Si', label: 'Si'},
                {value: 'No', label: 'No'},
              ]
            }
          },
        ]
      }
    },
    //--------------------------------------------------------------------------------------------------------

  ]



  createPdf() {

    if (this.form.valid) {
      let modelo = Object.entries(this.model);
      //
      var doc = new jsPDF('p', 'mm', 'a4');


      doc.setFont('helvetica')

      let m = 5;
      let y = 0;
      let x = 15;
      let i = 0; //
      //var arr:JSON[];

      for (let seccion of modelo) {

        let arr: any = seccion[1];

        y = y + 6;
        doc.setFontSize(16);
        doc.setTextColor(45);
        doc.text(seccion[0], x, m + y); //nombre seccion
        doc.line(x, m + y + 1, x + 180, m + y + 1);



        for (var j = 0; j < arr.length; j++) {

          //console.log(reg);
          var res = [];
          var z = 0;
          for (var clave in arr[j]) {
            if (y > 240 && x === 110) {
              doc.addPage();
              m = 5;
              y = 0;
              x = 15;
            }
            i++;
            if (i % 2 != 0) { x = 15; y = y + 12; }
            else { x = 110; }
            doc.setFontSize(10);
            doc.setDrawColor(100);

            res.push([clave, arr[j][clave]]);
            var registro: String[] = [clave, 'algo quee no se paso a string'];
            try {
              registro = res[z]; //paso los valores a string
            } catch (e) {
              console.log(e)
            }
            z++;
            var texto: string = String(registro[1])
            if(texto == 'true'){
              texto = 'Si'
            }
            if(texto == 'false'){
              texto = 'No'
            }
            
            doc.text(texto, x, m + y); //valor
            doc.line(x, m + y + 1, x + 90, m + y + 1); // linea horizontal
            doc.setFontSize(8);
            doc.setDrawColor(60);
            doc.text(clave, x, m + y + 5); //key
          }
        }
        i = 0;
        x = 15;
        y = y + 12;
      }
      let nombreArchivo = '00000000000';
      nombreArchivo = this.model['Denominación'][0]['CUIT'];
      doc.output('dataurlnewwindow');
      doc.save('InscripcionCapacitador' + nombreArchivo + '.pdf');


    } else (error) => {
      console.error('error:', error);
    }
    if (this.form.invalid) {
      alert("falta completar datos")
    }
  }
}
