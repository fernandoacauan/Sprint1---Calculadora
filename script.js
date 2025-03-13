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
    let iNum = iNumber;

    if(document.getElementById("input").innerHTML === '0')
    {
        document.getElementById('input').innerHTML = iNum;
        return;
    }
    
    
    if(g_inputAtual.length >= 12)
    {
        return;
    }


    document.getElementById('input').innerHTML += iNum;
}



//-----------------------------------------------------------------------------
// Name: AppendOperation()
// Desc: Acrescenta um sinal de operação.
//-----------------------------------------------------------------------------
function AppendOperation(strOperator)
{
    let input = document.getElementById('input').innerHTML;

    if("+-*/.".includes(input.slice(-1))) return;


    document.getElementById("input").innerHTML += strOperator;    
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




//-----------------------------------------------------------------------------
// Name: Igual()
// Desc: Resultado da operação.
//-----------------------------------------------------------------------------
function Igual()
{
    g_inputAtual = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = eval(g_inputAtual);
}




//-----------------------------------------------------------------------------
// Name: Inverter()
// Desc: Inverte o sinal.
//-----------------------------------------------------------------------------
function Inverter()
{
    document.getElementById('input').innerHTML *= -1;
}



