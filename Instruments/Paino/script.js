let a_c = document.getElementById("a_c")
let w_cc = document.getElementById("w_cc")
let s_d = document.getElementById("s_d")
let e_dd = document.getElementById("e_dd")
let d_e = document.getElementById("d_e")
let f_f = document.getElementById("f_f")
let t_ff = document.getElementById("t_ff")
let g_g = document.getElementById("g_g")
let y_gg = document.getElementById("y_gg")
let h_a = document.getElementById("h_a")
let u_aa = document.getElementById("u_aa")
let j_b = document.getElementById("j_b")
let k_c = document.getElementById("k_c")
let o_cc = document.getElementById("o_cc")
let l_d = document.getElementById("l_d")
let p_dd = document.getElementById("p_dd")
let _e = document.getElementById("_e")

let a = document.getElementById("a")
let w = document.getElementById("w")
let s = document.getElementById("s")
let e = document.getElementById("e")
let d = document.getElementById("d")
let f = document.getElementById("f")
let t = document.getElementById("t")
let g = document.getElementById("g")
let y = document.getElementById("y")
let h = document.getElementById("h")
let u = document.getElementById("u")
let j = document.getElementById("j")
let k = document.getElementById("k")
let o = document.getElementById("o")
let l = document.getElementById("l")
let p = document.getElementById("p")
let _ = document.getElementById("_")
function aplay(){
        a.load()
        a.play()
        a_c.classList.add("animate_white")
        setTimeout(() => {
            a_c.classList.remove("animate_white")
        }, 101);
}
function wplay() {
    w.load()
    w.play()
    w_cc.classList.add("animate_black")
    setTimeout(() => {
        w_cc.classList.remove("animate_black")
    }, 101);
}
function splay(){
    s.load()
    s.play()
    s_d.classList.add("animate_white")
    setTimeout(() => {
        s_d.classList.remove("animate_white")
    }, 101);
}
function eplay() {
    e.load()
    e.play()
    e_dd.classList.add("animate_black")
    setTimeout(() => {
        e_dd.classList.remove("animate_black")
    }, 101);
}
function dplay(){
    d.load()
    d.play()
    d_e.classList.add("animate_white")
    setTimeout(() => {
        d_e.classList.remove("animate_white")
    }, 101);
}
function fplay(){
    f.load()
    f.play()
    f_f.classList.add("animate_white")
    setTimeout(() => {
        f_f.classList.remove("animate_white")
    }, 101);
}
function tplay(){
    t.load()
    t.play()
    t_ff.classList.add("animate_black")
    setTimeout(() => {
        t_ff.classList.remove("animate_black")
    }, 101);
}
function gplay(){
    g.load()
    g.play()
    g_g.classList.add("animate_white")
    setTimeout(() => {
        g_g.classList.remove("animate_white")
    }, 101);
}
function yplay(){
    y.load()
    y.play()
    y_gg.classList.add("animate_black")
    setTimeout(() => {
        y_gg.classList.remove("animate_black")
    }, 101);
}
function hplay(){
    h.load()
    h.play()
    h_a.classList.add("animate_white")
    setTimeout(() => {
        h_a.classList.remove("animate_white")
    }, 101);
}
function uplay(){
    u.load()
    u.play()
    u_aa.classList.add("animate_black")
    setTimeout(() => {
        u_aa.classList.remove("animate_black")
    }, 101);
}
function jplay(){
    j.load()
    j.play()
    j_b.classList.add("animate_white")
    setTimeout(() => {
        j_b.classList.remove("animate_white")
    }, 101);
}
function kplay(){
    k.load()
    k.play()
    k_c.classList.add("animate_white")
    setTimeout(() => {
        k_c.classList.remove("animate_white")
    }, 101);
}
function oplay(){
    o.load()
    o.play()
    o_cc.classList.add("animate_black")
    setTimeout(() => {
        o_cc.classList.remove("animate_black")
    }, 101);
}
function lplay(){
    l.load()
    l.play()
    l_d.classList.add("animate_white")
    setTimeout(() => {
        l_d.classList.remove("animate_white")
    }, 101);
}
function pplay(){
    p.load()
    p.play()
    p_dd.classList.add("animate_black")
    setTimeout(() => {
        p_dd.classList.remove("animate_black")
    }, 101);
}
function semiplay(){
    _.load()
    _.play()
    _e.classList.add("animate_white")
    setTimeout(() => {
        _e.classList.remove("animate_white")
    }, 101);
}
document.getElementById("toggleVisibilityButton").addEventListener("click", function(button) {    
    if (document.getElementById("displaytable").style.display === "none")             document.getElementById("displaytable").style.display = "block";
    else document.getElementById("displaytable").style.display = "none";
 });
document.onkeydown = function(here){
    let key = here.keyCode
// 65  This is For [A]
    if(key === 65){
        aplay();
    }
    
//  87 This is For [W]
    else if(key === 87){
       wplay();
    }
//  83 This is For [S]
    else if(key === 83){
        splay();
    }
//  69 This is For [E]
    else if(key === 69){
        eplay();
    }
 //  69 This is For [E]
    else if(key === 68){
        dplay();
    }
 //  70 This is For [F]
 else if(key === 70){
    fplay();
}

//  84 This is For [T]
else if(key === 84){
    tplay();
}

//  71 This is For [G]
else if(key === 71){
    gplay();
}

//  89 This is For [Y]
else if(key === 89){
    yplay();
}

//  72 This is For [H]
else if(key === 72){
    hplay();
}

//  85 This is For [U]
else if(key === 85){
    uplay();
}

//  74 This is For [J]
else if(key === 74){
    jplay();
}

//  75 This is For [k]
else if(key === 75){
    kplay();
}

//  79 This is For [o]
else if(key === 79){
    oplay();
}

//  76 This is For [l]
else if(key === 76){
    lplay();
}

//  80 This is For [p]
else if(key === 80){
    pplay();
}

//  186 This is For [;]
else if(key === 186){
    semiplay();
}

}
a_c.addEventListener('click', aplay);
w_cc.addEventListener('click', wplay);
s_d.addEventListener('click', splay);
e_dd.addEventListener('click', eplay);
d_e.addEventListener('click', dplay);
f_f.addEventListener('click', fplay);
t_ff.addEventListener('click', tplay);
g_g.addEventListener('click', gplay);
y_gg.addEventListener('click', yplay);
h_a.addEventListener('click', hplay);
u_aa.addEventListener('click', uplay);
j_b.addEventListener('click', jplay);
k_c.addEventListener('click', kplay);
o_cc.addEventListener('click', oplay);
l_d.addEventListener('click', lplay);
p_dd.addEventListener('click', pplay);
_e.addEventListener('click', semiplay);
