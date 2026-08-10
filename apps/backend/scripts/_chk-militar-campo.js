const path=require('path');require('dotenv').config({path:path.join(__dirname,'..','.env')});
const {PrismaClient}=require('@prisma/client');const p=new PrismaClient();
(async()=>{
  // Usa el campo tipado `militar` → prueba que el cliente regenerado lo conoce
  const n=await p.reactivo.count({where:{banco:'v3',militar:true}});
  const m=await p.reactivo.findFirst({where:{banco:'v3',tema:'patriotismo',militar:true},select:{enunciado:true,militar:true}});
  console.log('v3 militar=true (via campo tipado):',n);
  console.log('muestra:',JSON.stringify(m));
})().catch(e=>{console.error('ERR',e.message);process.exitCode=1}).finally(()=>p.$disconnect());
