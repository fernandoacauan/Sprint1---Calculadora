//-----------------------------------------------------------------------------
// File: script.js
//
// Desc: Código fonte javascript da calculadora iPhone.
//
// Copyright (c) Fernando Acauan. All rights reserved.
//-----------------------------------------------------------------------------


let g_inputAtual = '';
let g_operacaoAtual = '';
let g_operacaoAnterior = '';


//-----------------------------------------------------------------------------
// Name: Append()
// Desc: Junta dois números.
//-----------------------------------------------------------------------------
function Append(iNumber)
{
    g_inputAtual += iNumber;
    document.getElementById('input').innerHTML = `${g_operacaoAnterior} ${g_operacaoAtual} ${g_inputAtual}`;
}




//-----------------------------------------------------------------------------
// Name: Somar()
// Desc: Adiciona o botão de soma.
//-----------------------------------------------------------------------------
function Somar()
{
    
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




