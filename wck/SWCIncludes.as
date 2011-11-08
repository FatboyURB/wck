package wck
{
	import flash.display.MovieClip;
	import gravity.Gravity; 		Gravity;
	import gravity.GravityCapsule;	GravityCapsule;
	import gravity.GravityLinear; 	GravityLinear;
	import gravity.GravityRadial; 	GravityRadial;
	import gravity.GravitySine; 	GravitySine;
	import shapes.Arc180; 			Arc180;
	import shapes.Arc270; 			Arc270;
	import shapes.Arc360; 			Arc360;
	import shapes.Arc90; 			Arc90;
	import shapes.Box; 				Box;
	import shapes.Circle; 			Circle;
	import shapes.Line; 			Line;
	import shapes.LineArc180; 		LineArc180;
	import shapes.LineArc270; 		LineArc270;
	import shapes.LineArc360; 		LineArc360;
	import shapes.LineArc90; 		LineArc90;
	import shapes.Oval; 			Oval;
	import shapes.Poly3; 			Poly3;
	import shapes.Poly4; 			Poly4;
	import shapes.Poly5; 			Poly5;
	import shapes.Poly6; 			Poly6;
	import shapes.Poly7; 			Poly7;
	import shapes.Poly8; 			Poly8;
	import shapes.ShapeBase; 		ShapeBase;
	import shapes.Triangle; 		Triangle;
	import wck.BodyShape; 			BodyShape;
	import wck.Buoyancy; 			Buoyancy;
	import wck.ContactEventFilter; 	ContactEventFilter;
	import wck.ContactList; 		ContactList;
	import wck.Joint; 				Joint;
	import wck.WCK; 				WCK;
	import wck.World; 				World;
	
	/**
	 * Class used to create a SWC for the WCK library.
	 * @author Brian Lachniet
	 */
	public class SWCIncludes extends MovieClip
	{		
		public function SWCIncludes() 
		{
			throw new Error("Do not attempt to create an instance of the wck.SWCIncludes class.");
		}		
	}
}