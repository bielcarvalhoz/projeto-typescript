import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarMoeda, formatarData } from "../utils/formatters.js";
const elementoRegistroTransacoesExtrato = document.querySelector(".extrato .registro-transacoes");
renderizarExtrato();
function renderizarExtrato() {
    const gruposTransacoes = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacoes = "";
    for (let gruposTransacao of gruposTransacoes) {
        let htmlTransacaoItem = "";
        for (let transacao of gruposTransacao.transacoes) {
            htmlTransacaoItem += `
                <div class="transacao-item">
                    <div class="transacao-info">
                        <span class="tipo">${transacao.tipoTransacao}</span>
                        <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
                    </div>
                    <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
                </div>
            `;
        }
        htmlRegistroTransacoes += `
            <div class="transacoes-group">
                <strong class="mes-group">${gruposTransacao.label}</strong>
                ${htmlTransacaoItem}
            </div>
        `;
    }
    if (htmlRegistroTransacoes == "") {
        htmlRegistroTransacoes = "<div>Não há alterações feitas.</div>";
    }
    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}
const ExtratoComponent = {
    atualizar() {
        renderizarExtrato();
    },
};
export default ExtratoComponent;
