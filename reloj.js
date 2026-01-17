
(function(){
    var actualizarHora = function(){
        var fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth();

        var pHoras = document.getElementById('horas'),
            pAMPM = document.getElementById('ampm'),
            pMinutos = document.getElementById( 'minutos') ,
            pDiaSemana = document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pMes = document. getElementById('mes');

        var semana = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];
        pDiaSemana.textContent = semana[diaSemana];
        pDia.textContent = dia;
        
        pMes.textContent = mes+1;


        /*if (horas >= 12){
            horas = horas - 12;
            ampm = 'PM';
        } else {
            ampm = 'AM';
        }
        if (horas == 0){
            horas = 12;
        };
        */

        pHoras.textContent = horas;
        pAMPM.textContent = ampm;

        if (minutos<10){
            minutos = "0" + minutos
        };
        pMinutos.textContent = minutos;

    };
    actualizarHora();
    var intervalo = setInterval(actualizarHora,1000)
}())