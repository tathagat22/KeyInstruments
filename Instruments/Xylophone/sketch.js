let note_c = document.getElementsByClassName("note-c")
let note_d = document.getElementsByClassName("note-d")
let note_e = document.getElementsByClassName("note-e")
let note_f = document.getElementsByClassName("note-f")
let note_g = document.getElementsByClassName("note-g")
let note_a = document.getElementsByClassName("note-a")
let note_b = document.getElementsByClassName("note-b")
let note_c2 = document.getElementsByClassName("note-c2")

let a = document.getElementById("a")
let s = document.getElementById("s")
let d = document.getElementById("d")
let f = document.getElementById("f")
let g = document.getElementById("g")
let h = document.getElementById("h")
let j = document.getElementById("j")
let k = document.getElementById("k")

let red = document.getElementById("red")
let green = document.getElementById("green")
let purple = document.getElementById("purple")
let yellow = document.getElementById("yellow")
let orange = document.getElementById("orange")
let l_blue = document.getElementById("l-blue")
let cyan = document.getElementById("cyan")
let pink = document.getElementById("pink")

function aplay()
{
    a.load()
    a.play()
    note_c.classList.add("box-shadow")
    setTimeout(() => {
        note_c.classList.remove("playing")
    }, 101);
}
function splay()
{
    s.load()
    s.play()
    note_d.classList.add("box-shadow")
    setTimeout(() => {
        note_d.classList.remove("playing")
    }, 101);
}
function dplay()
{
    d.load()
    d.play()
    note_e.classList.add("box-shadow")
    setTimeout(() => {
        note_e.classList.remove("playing")
    }, 101);
}
function fplay()
{
    f.load()
    f.play()
    note_f.classList.add("box-shadow")
    setTimeout(() => {
        note_f.classList.remove("playing")
    }, 101);
}
function gplay()
{
    g.load()
    g.play()
    note_g.classList.add("box-shadow")
    setTimeout(() => {
        note_g.classList.remove("playing")
    }, 101);
}
function hplay()
{
    h.load()
    h.play()
    note_a.classList.add("box-shadow")
    setTimeout(() => {
        note_a.classList.remove("playing")
    }, 101);
}
function jplay()
{
    j.load()
    j.play()
    note_b.classList.add("box-shadow")
    setTimeout(() => {
        note_b.classList.remove("playing")
    }, 101);
}
function kplay()
{
    k.load()
    k.play()
    note_c2.classList.add("box-shadow")
    setTimeout(() => {
        note_c2.classList.remove("playing")
    }, 101);
}


document.onkeydown = function(here)
{
    let key = here.keyCode
    if(key == 65)
    {
        aplay();
    }

    else if(key == 83)
    {
        splay();
    }
    else if(key == 68)
    {
        dplay();
    }
    else if(key == 70)
    {
        fplay();
    }
    else if(key == 71)
    {
        gplay();
    }
    else if(key == 72)
    {
        hplay();
    }
    else if(key == 74)
    {
        jplay();
    }
    else if(key == 75)
    {
        kplay();
    }
}

red.addEventListener('click', aplay);
green.addEventListener('click', splay);
purple.addEventListener('click', dplay);
yellow.addEventListener('click', fplay);
orange.addEventListener('click', gplay);
l_blue.addEventListener('click', hplay);
cyan.addEventListener('click', jplay);
pink.addEventListener('click', kplay);
