$( document ).ready( function () {
	var operation = 0;
	var input = "";
	//bind key
	$( document ).keypress( function ( e ) {
		if ( e.which == 48 ) {
			$( "#sifir" ).click();
		}
		if ( e.which == 49 ) {
			$( "#bir" ).click();
		}
		if ( e.which == 50 ) {
			$( "#iki" ).click();
		}
		if ( e.which == 51 ) {
			$( "#üç" ).click();
		}
		if ( e.which == 52 ) {
			$( "#dört" ).click();
		}
		if ( e.which == 53 ) {
			$( "#beş" ).click();
		}
		if ( e.which == 54 ) {
			$( "#altı" ).click();
		}
		if ( e.which == 55 ) {
			$( "#yedi" ).click();
		}
		if ( e.which == 56 ) {
			$( "#sekiz" ).click();
		}
		if ( e.which == 57 ) {
			$( "#dokuz" ).click();
		}
		if ( e.which == 43 ) {
			$( "#artı" ).click();
		}
		if ( e.which == 45 ) {
			$( "#eksi" ).click();
		}
		if ( e.which == 46 ) {
			$( "#nokta" ).click();
		}
		if ( e.which == 47 ) {
			$( "#bölü" ).click();
		}
		if ( e.which == 61 || e.which == 13 ) {
			$( "#eşittir" ).click();
		}
		if ( e.which == 42 ) {
			$( "#çarpı" ).click();
		}
	} );
	$( ".num, .op" ).click( function () {
		if ( input === "0" ) {
			input = "";
		}

		var name = $( this ).attr( "name" );
		if ( input.length < 13 ) {
			input += name;
			$( ".enter" ).html( input );
		} else {
			$( ".enter" ).html( "---Long than 12---" );
		}
	} );
	$( ".eq" ).click( function () {
		var name = $( this ).attr( "name" );
		operation = eval( input ).toString();
		if ( operation.indexOf( "." ) > -1 ) {
			operation = operation.slice( 0, operation.indexOf( "." ) + 3 );
		}
		if ( input.length + name.length + operation.length < 13 ) {
			$( ".enter2" ).html( input + name + operation );
		} else {
			$( ".enter2" ).html( operation );
		}
		if ( operation.length < 13 ) {
			$( ".enter" ).html( operation );
		}
		input = operation;
	} );
	$( ".C" ).click( function () {
		if ( input.length > 1 ) {
			input = input.slice( 0, input.length - 1 );
		} else {
			input = "0";
		}
		$( ".enter" ).html( input );
	} );
	$( ".CA" ).click( function () {
		input = "0";
		$( ".enter" ).html( input );

		$( ".enter2" ).html( "-" );
	} );
} );
