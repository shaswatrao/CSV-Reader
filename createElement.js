var colMax = 250;
var rowMax = 250;
				
for(var c=0; c< colMax; c++){
	for(var r = 0; r < rowMax; r++){
		var element = document.createElement( 'div' ); element.className = 'element';
		var details = document.createElement( 'div' ); details.className = 'details';
		element.style.backgroundColor = 'rgba(0,127,127,1)';
		details.style.fontSize = '0px';
		element.style.width = 350 + 'px';
		element.style.height = 100 + 'px';
		element.appendChild( details );
					
		var object = new THREE.CSS3DObject( element );
		object.position.x = Math.random() * 4000 - 2000;
		object.position.y = Math.random() * 4000 - 2000;
		object.position.z = Math.random() * 4000 - 2000;
						
		scene.add( object );
		objects.push( object );
						
		var xPos = c + 1;
		var yPos = r + 1;
						
		var object = new THREE.Object3D();
		object.position.x = ( ( xPos )  * 360 ) - 1330;
		object.position.y = - ( ( yPos ) * 110 ) + 990;
		targets.table.push( object );	
	}
}