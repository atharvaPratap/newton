class bob
{
    constructor( x , y , radius )
    {
        var options=
        {
            'isStatic':false
        }
        this.body = Bodies.circle( x , y , radius , options );
        this.radius = radius;

        World.add( world , this.body );
    }
    
    display( color )
    {
        var pos = this.body.position;
        push();
        translate( pos.x , pos.y );
        fill( color );
        ellipse( 0 , 0 , this.radius );
        pop();
    }
}