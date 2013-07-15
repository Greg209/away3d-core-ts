/**
 * ...
 * @author Gary Paluk - http://www.plugin.io
 */

///<reference path="EntityNode.ts" />
///<reference path="../traverse/PartitionTraverser.ts" />


module away.partition
{
	export class CameraNode extends away.partition.EntityNode
	{
		constructor( camera:away.cameras.Camera3D )
		{
			super( camera );
		}
		
		//@override
		public acceptTraverser( traverser:away.traverse.PartitionTraverser)
		{
			// todo: dead end for now, if it has a debug mesh, then sure accept that
		}
	}
}