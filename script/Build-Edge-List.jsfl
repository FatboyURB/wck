/**
 * Build-Edge-List version 1.0
 * Copyright (c) 2011 Brian Lachniet http://blachniet.com
 * 
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 **/
 
/**
 * This script is meant to be used with the WCK library. It generates the ActionScript 3
 * code required to build an edge list from a shape on stage.
 * 
 * Instructions:
 * 	-Place this JSFL file in your Flash Pro configuration directory.
 * 	-Select a shape on stage that does not have any curved edges.
 * 	-Select Commands > Build-Edge-List
 * 	-Copy the output into the definition of your BodyShape (either on frame code or in the class file).
 */

/**
 * Traces a message to the Flash output panel.
 */
function trace(msg)
{
	fl.trace(msg);
}

/**
 * Traces an error message for this script.
 */
function traceError(msg)
{
	trace("Build-Edge-List >> " + msg);
}

/**
 * Traces the code to create a new V2 edge.
 */
function traceHEdge(HEdge)
{
	var vertex = HEdge.getVertex();
	trace('vec.push( new V2( ' + vertex.x + ',' + vertex.y + ' ) );');
}

fl.outputPanel.clear();
var selectedItems = fl.getDocumentDOM().selection;
if (selectedItems.length == 1)
{
	var shape = selectedItems[0];
	if (shape.elementType == "shape")
	{
		trace('import Box2DAS.Common.V2;');
		trace('var vec:Vector.<V2> = new Vector.<V2>();');
		
		var origHEdge = shape.edges[0].getHalfEdge(0);
		traceHEdge(origHEdge);
		
		var curHEdge = origHEdge.getNext();
		while (curHEdge.id != origHEdge.id)
		{
			traceHEdge(curHEdge);
			curHEdge = curHEdge.getNext();
		}
		
		traceHEdge(origHEdge); // Connect to the original edge.		
		trace('shape( edges, vec );');
	}
	else
	{
		traceError("The selected element must be a shape.");
	}
}
else
{
	traceError("Exactly one shape must be selected");
}