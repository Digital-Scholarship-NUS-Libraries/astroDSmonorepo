#version 300 es
precision lowp float;
uniform float uTime;
in vec2 vUv;
out vec4 FragColor;
void main(){
  // FragColor=vec4(.3,.2,.5,1);
  FragColor=vec4(0.9,0.9,.6,1);
  // FragColor.rgb+=0.0+.2*cos(vUv.yxx+uTime/2.);
  FragColor.r+=0.0+.2*cos(vUv.y+uTime/2.);
  FragColor.g+=0.0+.3*cos(vUv.x+uTime/1.2);
  FragColor.b+=0.0+.2*cos(vUv.y+uTime/3.);
}
