class chain
{
    constructor( bodyA , pointB , length , stiffness )
    {
        var options=
        {
            'bodyA':bodyA ,
            'pointB':pointB ,
            'length':length , 
            'stiffness':stiffness
        }
        this.chain = Matter.Constraint.create( options );

        World.add( world , this.chain );
    }

    display()
    {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB.position;
        strokeWeight( 4 );
        stroke(0);
        line( pointA.x , pointA.y , pointB.x , pointB.y );
    }
}