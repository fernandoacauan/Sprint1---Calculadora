//-----------------------------------------------------------------------------
// File: script.js
//
// Desc: Código fonte javascript da calculadora iPhone.
//
// Copyright (c) Fernando Acauan. All rights reserved.
//-----------------------------------------------------------------------------


let g_inputAtual = '';




//-----------------------------------------------------------------------------
// Name: Append()
// Desc: Junta dois números.
//-----------------------------------------------------------------------------
function Append(iNumber)
{
    let num = iNumber & 0xF;

    if(document.getElementById("input").innerHTML === '0')
    {
        document.getElementById('input').innerHTML = num;
        return;
    }
    
    
    if(g_inputAtual.length >= 12)
    {
        return;
    }


    document.getElementById('input').innerHTML += num;
}




//-----------------------------------------------------------------------------
// Name: AppendOperation()
// Desc: Acrescenta um sinal de operação.
//-----------------------------------------------------------------------------
function AppendOperation(strOperator)
{
    if(strOperator === '.')
    {
        document.getElementById("input").innerHTML += strOperator;
        return;    
    }   
    document.getElementById("input").innerHTML += ' ' + strOperator + ' ';    
}




//-----------------------------------------------------------------------------
// Name: Clear()
// Desc: Limpa o display.
//-----------------------------------------------------------------------------
function Clear()
{
    g_inputAtual = '';
    document.getElementById('input').innerHTML='0';
}



function Igual()
{
    g_inputAtual = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = eval(g_inputAtual);
}



