
var _distribucionPorArea = new DistribucionPorArea();
var _distribuirPorEmpleado = new DistribuirPorEmpleado();

function VisualizarGraficoRCMes(){

    this.funciones = function (){

        $('#btn-mostrar').click(function(){
        	
        	if($("#frm-1").valid()){

        	var txtAnio = $('#txtAnio').val();
        	var foo = Number(4);


        	$.ajax({
				method: "GET",
				url: endPoint + "/getMontosPorTiendaHistorico?tiendaId=" + foo + "&anio=" + txtAnio,
			})
			.done(function( msg ) {

				var costoPlanilla = msg.costoPlanilla;
				var montoServicio = msg.distribucionRC;
				var ventas = msg.ventas;

				//var sinControl_titulo = msg[1].name;
				//var sinControl_data = msg[1].data;
				//var sinControl_color = msg[1].color;

				Highcharts.chart('container', {
				    //chart: {
				        //type: 'areaspline'
				    //},
				    title: {
				        text: 'Montos por Mes/A\u00f1o'
				    },
				    legend: {
				        layout: 'vertical',
				        align: 'right',
				        verticalAlign: 'middle',
				        //x: 150,
				        //y: 100,
				        floating: false,
				        borderWidth: 1,
				        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
				    },
				    xAxis: {
				        categories: [
				            'Enero',
				            'Febrero',
				            'Marzo',
				            'Abril',
				            'Mayo',
				            'Junio',
				            'Julio',
				            'Agosto',
				            'Septiembre',
				            'Octubre',
				            'Noviembre',
				            'Diciembre'
				        ],
				        //plotBands: [{ // visualize the weekend
				        //    from: 4.5,
				        //    to: 6.5,
				        //    color: 'rgba(68, 170, 213, .2)'
				        //}]
				    },
				    yAxis: {
				        title: {
				            text: 'Soles'
				        }
				    },
				    tooltip: {
				        shared: true,
				        valueSuffix: ' soles'
				    },
				    credits: {
				        enabled: false
				    },
				    plotOptions: {
				        series: {
				            label: {
				            	connectorAllowed: false
				            }				            
				        }
				    },
				    series: [{
				        name: 'Costo de Planilla',
				        data: costoPlanilla
				    }, {
				        name: 'Distribucion de RC',
				        data: montoServicio
				    }, {
				    	name: 'Ventas',
				    	data: ventas,
				        
				    }]
				   
				});				

			});
        	
        	} else {
                // do stuff if form is not valid
            }//Fin de validacion

			
 		});//Fin de boton        
        
    }

};

function VisualizarGraficoRCArea(){

    this.funciones = function (){    	

        $('#btn-mostrar').click(function(){
        	
        	if($("#frm-1").valid()){
        	
        	var txtAnio = $('#txtAnio').val();
        	var cboMes = $('#cboMes').val();


        	$.ajax({
				method: "GET",
				url: endPoint + "/getRCPorAreaHistorico?anio=" + txtAnio + "&mes="+ cboMes,
			})
			.done(function( msg ) {

				var listaAreas = msg.listaAreas;
				var listaRC = msg.listaRC;				

				Highcharts.chart('container', {
				    chart: {
				        type: 'column'
				    },
				    title: {
				        text: 'Recargo al Consumo por Area'
				    },   
				    xAxis: {
				        categories: listaAreas,
				        crosshair: true
				    },
				    yAxis: {
				        min: 0,
				        title: {
				            text: 'Soles'
				        }
				    },
				    tooltip: {
				        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				            '<td style="padding:0"><b>{point.y:.1f} soles</b></td></tr>',
				        footerFormat: '</table>',
				        shared: true,
				        useHTML: true
				    },
				    plotOptions: {
				        column: {
				            pointPadding: 0.2,
				            borderWidth: 0
				        }
				    },
				    series: [{
				        name: 'RC',
				        data: listaRC

				    }]
				});			

			});
        	
        }else{
           	
        }//fin de validacion

			
 		});//fin de boton
        
    }

};

function VisualizarGraficoMontosTienda(){

    this.funciones = function (){

        $('#btn-mostrar').click(function(){
        	
        	if($("#frm-1").valid()){

        	var cboTienda = $('#cboTienda').val();
        	var txtAnio = $('#txtAnio').val();


        	$.ajax({
				method: "GET",
				url: endPoint + "/getMontosPorTiendaHistorico?tiendaId=" + cboTienda + "&anio="+ txtAnio,
			})
			.done(function( msg ) {

				var costoPlanilla = msg.costoPlanilla;
				var montoServicio = msg.distribucionRC;
				var ventas = msg.ventas;

				//var sinControl_titulo = msg[1].name;
				//var sinControl_data = msg[1].data;
				//var sinControl_color = msg[1].color;

				Highcharts.chart('container', {
				    //chart: {
				        //type: 'areaspline'
				    //},
				    title: {
				        text: 'Montos por Tienda'
				    },
				    legend: {
				        layout: 'vertical',
				        align: 'right',
				        verticalAlign: 'middle',
				        //x: 150,
				        //y: 100,
				        floating: false,
				        borderWidth: 1,
				        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
				    },
				    xAxis: {
				        categories: [
				            'Enero',
				            'Febrero',
				            'Marzo',
				            'Abril',
				            'Mayo',
				            'Junio',
				            'Julio',
				            'Agosto',
				            'Septiembre',
				            'Octubre',
				            'Noviembre',
				            'Diciembre'
				        ],
				        //plotBands: [{ // visualize the weekend
				        //    from: 4.5,
				        //    to: 6.5,
				        //    color: 'rgba(68, 170, 213, .2)'
				        //}]
				    },
				    yAxis: {
				        title: {
				            text: 'Soles'
				        }
				    },
				    tooltip: {
				        shared: true,
				        valueSuffix: ' soles'
				    },
				    credits: {
				        enabled: false
				    },
				    plotOptions: {
				        series: {
				            label: {
				            	connectorAllowed: false
				            }				            
				        }
				    },
				    series: [{
				        name: 'Costo de Planilla',
				        data: costoPlanilla
				    }, {
				        name: 'Distribucion de RC',
				        data: montoServicio
				    }, {
				    	name: 'Ventas',
				    	data: ventas,
				        
				    }]
				   
				});				

			});
        	
        	} else {
                // do stuff if form is not valid
            }//Fin de validacion

			
 		});//Fin de boton        
        
    }

};

function DistribuirPorEmpleado(){

	table = $('#tabla-datos').DataTable(
    	{
			"drawCallback": function() {
				_distribuirPorEmpleado.updateDistribuirPorEmpleado();

			}
    	}
    );

    this.funciones = function (){

    	$('#btn-clear').click(function(){
				$('.form-control').val('');
    	});

    	$('#btn-calcular').click(function(){
				var subtotal = $("#txtSubtotal").val();				
				var montoAdicional = $('#txtMontoAdicional').val();
				var montoFinal = parseFloat(subtotal)+parseFloat(montoAdicional);

				$('#txtMontoAbonar').val(montoFinal);

    	});

        $('#btn-guardar').click(function(){
        	
        	if($("#frm-2").valid()){

        	var _empleadoId = $('#txtEmpleadoId').val();
        	var _fecha =  $('#txtFecha').val();
        	var _montoServicio =  $('#txtMontoServicio').val();
        	var _montoAdicional =  $('#txtMontoAdicional').val();
        	var _montoAbonar =  $('#txtMontoAbonar').val();   

        	//var _data = { 	"areaEmpresa.areaId": _areaId,
        	var _data = { 	"empleado": 
        						{
        						"empId": _empleadoId
        						},        					
							"fecha": _fecha, 
							"montoServicio": _montoServicio,
							"montoAdicional": _montoAdicional,
							"montoAbonar": _montoAbonar,
						};

        	if ($('#txtEmpleadoId').val().trim() != '' && $('#txtEmpleadoId').val().trim() != null){

        		$.ajax({
					method: "POST",
					type: "POST",
					url: endPoint + "/actualizarDistribucionRCPorEmpleado", // + JSON.stringify(_data),
					data: JSON.stringify(_data),
					contentType: "application/json",
	            	dataType: "json",
				})
				.done(function(msg) {

					if (msg.codigoRespuesta == '0') {

						alertify.alert("Pentium","Se registró correctamente", function(){
						});

						$('#btn-cargar').click();

						$('html, body').animate({ scrollTop: 0 }, 'fast');

						//actualizar.loadAlerta();
					}
				});

			}
        	
        	} else {
            	//	alertify.alert("Pentium","Ingresar fecha valida", function(){        			
        		//	});
        		//	return;
           	}

 		});    	

    	$('#btn-cargar').click(function(){

    		var cboAnio = $('#cboAnio').val();
    		var cboMes = $('#cboMes').val();
    		var cboArea = $('#cboArea').val();


    		//if (cboAnio != '' && cboMes != '0'){
    		if($("#frm-1").valid()){   // test for validity

    		var _edit   = '<a href1="param1" href2="param2" href3="param3" href4="param4" href5="param5" class="btnActionRow btnEditRow" title="edit"><i class="fa fa-pencil"></i></a>';

    		$.ajax({
				method: "GET",
				url: endPoint + "/realizarDistribucionRC?anio=" + cboAnio + "&mes="+ cboMes+ "&areaId="+ cboArea,
			})
			.done(function( msg ) {			

			//console.log(msg)

			$("#presupuesto").text(msg.presupuesto);


			table.clear().draw();

			for(var item in msg.listaEmpleadosTabla) {

				var buttonEdit 	 = _edit.replace("param1", msg.listaEmpleadosTabla[item].empId)
										.replace("param2", cboAnio+ "-" + cboMes + "-" +"01")
										.replace("param3", msg.listaEmpleadosTabla[item].montoServicio)
										.replace("param4", parseFloat(msg.listaEmpleadosTabla[item].montoServicio)
											+parseFloat(msg.listaEmpleadosTabla[item].bonoLogro)
											+parseFloat(msg.listaEmpleadosTabla[item].servicioBasico))
										.replace("param5", msg.listaEmpleadosTabla[item].montoAdicional);

				table.row.add([	msg.listaEmpleadosTabla[item].puntosCargo,
								msg.listaEmpleadosTabla[item].nombreCargo, 
								msg.listaEmpleadosTabla[item].empId, 
								msg.listaEmpleadosTabla[item].nombresEmpleado,
								msg.listaEmpleadosTabla[item].factorAntiguedad,
								msg.listaEmpleadosTabla[item].nota,
								msg.listaEmpleadosTabla[item].promedioLocal,
								msg.listaEmpleadosTabla[item].diasTrabajados,
								msg.listaEmpleadosTabla[item].montoServicio,
								msg.listaEmpleadosTabla[item].bonoLogro,
								msg.listaEmpleadosTabla[item].servicioBasico,
								msg.listaEmpleadosTabla[item].montoAdicional,
								msg.listaEmpleadosTabla[item].montoAbonar,
								'<p class="text-center">' + buttonEdit +'</p>'
								
				]);
			};

			table.draw();

		});

		} else {
    	//	alertify.alert("Pentium","Ingresar fecha valida", function(){        			
		//	});
		//	return;
    	}       	

		});
	}

 	this.updateDistribuirPorEmpleado = function (){

 	 	$('.btnEditRow').click(function(e){
 	 		//

 	 		e.preventDefault();
 	 		var _this = $(this);

 	 		$('#txtEmpleadoId').val(_this.attr('href1'));
 	 		$('#txtFecha').val(_this.attr('href2'));
 	 		$('#txtMontoServicio').val(_this.attr('href3'));
 	 		$('#txtSubtotal').val(_this.attr('href4')); 	 		
 	 		$('#txtMontoAdicional').val(_this.attr('href5'));

 	 	});

 	}	

}

function DistribucionPorArea(){

	table = $('#tabla-datos').DataTable(
    	{
			"drawCallback": function() {
//				actualizar.updateAlerta();
				_distribucionPorArea.updateDistribucionPorArea();

			}
    	}
    );

    this.funciones = function (){

    	$('#btn-clear').click(function(){
				$('.form-control').val('');
    	});

    	$('#btn-calcular').click(function(){
				var ventas = $("#ventas").text();				
				var porcentaje = $('#txtPorcentaje').val();
				var monto = parseFloat(ventas)*parseFloat(porcentaje);

				//console.log(ventas);
				//console.log(porcentaje);
				//console.log(monto);

				$('#txtMonto').val(monto);

    	});

        $('#btn-guardar').click(function(){
        	
        	if($("#frm-2").valid()){   // test for validity
                // do stuff if form is valid
        		//console.log("valido");
            

        	var _areaId = $('#txtAreaId').val();
        	var _fecha =  $('#txtFecha').val();
        	var _porcentaje =  $('#txtPorcentaje').val();
        	var _monto =  $('#txtMonto').val();

        	//var _data = { 	"areaEmpresa.areaId": _areaId,
        	var _data = { 	"areaEmpresa": 
        						{
        						"id": _areaId
        						},        					
							"mes": _fecha, 
							"porcentaje": _porcentaje,
							"presupuesto": _monto
						};

        	if ($('#txtAreaId').val().trim() != '' && $('#txtAreaId').val().trim() != null){

        		$.ajax({
					method: "POST",
					type: "POST",
					url: endPoint + "/actualizarDistribucionRCPorArea", // + JSON.stringify(_data),
					data: JSON.stringify(_data),
					contentType: "application/json",
	            	dataType: "json",
				})
				.done(function(msg) {

					if (msg.codigoRespuesta == '0') {

						alertify.alert("Pentium","Se registró correctamente", function(){
						});

						$('#btn-cargar').click();

						$('html, body').animate({ scrollTop: 0 }, 'fast');

						//actualizar.loadAlerta();
					}
				});

			}// fin del if de Areas 
        	

        	} else {
                // do stuff if form is not valid
            }       	
        	

 		});    	

    	$('#btn-cargar').click(function(){

    		var cboAnio = $('#cboAnio').val();
    		var cboMes = $('#cboMes').val();    		
    		
    		if (cboAnio != '0' && cboMes != '0'){



    		var _edit   = '<a href1="param1" href2="param2" href3="param3" href4="param4" class="btnActionRow btnEditRow" title="edit"><i class="fa fa-pencil"></i></a>';

    		$.ajax({
				method: "GET",
				url: endPoint + "/obtenerDistribucionRCPorArea?anio=" + cboAnio + "&mes="+ cboMes,
			})
			.done(function( msg ) {

			//console.log(msg)
			console.log(msg.ventas)

			if (msg.ventas == '0'){

				alertify.alert("Pentium","No hay ventas disponibles", function(){        			
				});
				return;
			} else {



			$("#ventas").text(msg.ventas);


			table.clear().draw();

			for(var item in msg.listaPresupuestos) {

				var buttonEdit 	 = _edit.replace("param1", msg.listaPresupuestos[item].areaEmpresa.id)
										.replace("param2", cboAnio+ "-" + cboMes + "-" +"01")
										.replace("param3", msg.listaPresupuestos[item].porcentaje)
										.replace("param4", msg.listaPresupuestos[item].presupuesto);

				table.row.add([	msg.listaPresupuestos[item].areaEmpresa.id, 
								msg.listaPresupuestos[item].areaEmpresa.nombre, 
								msg.listaPresupuestos[item].porcentaje, 
								msg.listaPresupuestos[item].presupuesto,
								'<p class="text-center">' + buttonEdit +'</p>'
								
				]);
			};

			table.draw();

			}

		});
    		
    	} else {
    		alertify.alert("Pentium","Ingresar fecha valida", function(){        			
			});
			return;
    	}       

		});
	}

 	this.updateDistribucionPorArea = function (){

 	 	$('.btnEditRow').click(function(e){
 	 		//

 	 		e.preventDefault();
 	 		var _this = $(this);

 	 		$('#txtAreaId').val(_this.attr('href1'));
 	 		$('#txtFecha').val(_this.attr('href2'));
 	 		$('#txtPorcentaje').val(_this.attr('href3'));
 	 		$('#txtMonto').val(_this.attr('href4')); 	 		
	 			 		

 	 	});

 	}	

}


