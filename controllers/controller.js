
import Time from '../models/time.js';
import Jogador from '../models/jogador.js';


export async function home(req,res){
    
    res.render('admin/index')
}



/*   JOGADOR    */




export async function abreaddjogador(req, res) {
    const resultado = await Time.find({}).catch(function(err){console.log(err)});
    res.render('admin/jogador/add',{Times: resultado});
}


export async function addjogador(req, res) {
        var jtime = null;
//se vier time, busca
    if(req.body.time!=null)
    {
        jtime = await Time.findById(req.body.time)
    }
    await Jogador.create({
        nome:req.body.nome,
        altura:req.body.altura,
        time:jtime
       
    })
    res.redirect('/admin/jogador/add')
}


export async function listarjogador(req, res) {
    const resultado = await Jogador.find({}).populate('time').catch(function(err){console.log(err)});
   
    res.render('admin/jogador/lst',{Jogadores: resultado});
}




export async function deletajogador(req, res) {
    await Jogador.findByIdAndDelete(req.params.id)
    res.redirect('/admin/jogador/lst')
}


export async function abreedtjogador(req, res){
    const resultado = await Jogador.findById(req.params.id)
    const jtimes = await Time.find({}).catch(function(err){console.log(err)});
    res.render('admin/jogador/edt',{Jogador: resultado,Times:jtimes})
}


export async function edtjogador(req, res){
    await Jogador.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/admin/jogador/lst')
}


export async function filtrarjogador(req, res) {
    const resposta = await Jogador.find({nome: new RegExp(req.body.pesquisar,"i")})
    res.render('admin/jogador/lst',{Jogadores: resposta});
}

//TIME

export async function abreaddtime(req, res) {
    res.render('admin/time/add')
}
export async function addtime(req, res) {
   await Time.create({
    nome:req.body.nome,
    estadio:req.body.estadio
}) 
    res.redirect('/admin/time/add')
}
export async function listartime(req, res) {
    const resultado = 
    await Time.find({}).catch(function(err){console.log(err)})
    res.render('admin/time/lst',{Times:resultado});
}

export async function filtrartime(req, res) {
    res.render('admin/time/lst','');
}

export async function deletatime(req, res) {
    await Time.findByIdAndDelete(req.params.id)
   res.redirect('/admin/time/lst')
}
export async function abreedttime(req, res){
        const resultado = await Time.findById(req.params.id)
        res.render('admin/time/edt',{Time:resultado})
}
export async function edttime(req, res){
    await Time.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/admin/time/lst')
}
