///<reference path="../../_definitions.ts"/>

module away.materials
{
	/**
	 * ShaderRegisterData contains the "named" registers, generated by the compiler and to be passed on to the methods.
	 */
	export class ShaderRegisterData
	{
		public normalVarying:away.materials.ShaderRegisterElement;
		public tangentVarying:away.materials.ShaderRegisterElement;
		public bitangentVarying:away.materials.ShaderRegisterElement;
		public uvVarying:away.materials.ShaderRegisterElement;
		public secondaryUVVarying:away.materials.ShaderRegisterElement;
		public viewDirVarying:away.materials.ShaderRegisterElement;
		public shadedTarget:away.materials.ShaderRegisterElement;
		public globalPositionVertex:away.materials.ShaderRegisterElement;
		public globalPositionVarying:away.materials.ShaderRegisterElement;
		public localPosition:away.materials.ShaderRegisterElement;
		public normalInput:away.materials.ShaderRegisterElement;
		public tangentInput:away.materials.ShaderRegisterElement;
		public animatedNormal:away.materials.ShaderRegisterElement;
		public animatedTangent:away.materials.ShaderRegisterElement;
		public commons:away.materials.ShaderRegisterElement;
		public projectionFragment:away.materials.ShaderRegisterElement;
		public normalFragment:away.materials.ShaderRegisterElement;
		public viewDirFragment:away.materials.ShaderRegisterElement;
		public bitangent:away.materials.ShaderRegisterElement;
		
		constructor()
		{
		
		}
	}
}
