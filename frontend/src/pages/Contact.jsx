import React from 'react';
import Title from '../components/Title';

const Contact = () => {
  return (
    <section className='dark:bg-gray-100 dark:text-gray-800'>
      <div className='container max-w-6xl flex flex-col justify-center px-4 py-8 mx-auto md:p-8'>
        <Title text1={'POLÍTICA'} text2={'COMERCIAL'} />
        <h2 className='mt-8 text-2xl font-semibold sm:text-3xl'>
          Pedidos, Trocas, Devoluções e Garantia
        </h2>
        <p className='mt-4 mb-8 dark:text-gray-600'>
          Os termos escritos abaixo servem para estabelecer GARANTIA com total
          transparência aos nossos clientes.
        </p>
        <div className='space-y-4'>
          <details className='w-full border rounded-lg open:bg-gray-200'>
            <summary className='px-4 py-6 cursor-pointer focus:outline-none focus-visible:ring-violet-600'>
              Pedido Mínimo e Prazo de pagamento
            </summary>
            <p className='px-4 py-6 pt-0 ml-4  dark:text-gray-600'>
              <li>
                Pedido mínimo de R$4.000,00 em produtos, sem considerar o frete.
              </li>
              <li>
                Prazo de pagamento terá como pré-requisito valor mínimo de
                parcela R$1.500,00 sem considerar o frete.
              </li>
            </p>
            <table className='border border-gray-300 w-full text-left text-sm'>
              <thead className='bg-gray-200'>
                <tr>
                  <th className='border px-4 py-2'>Cod.</th>
                  <th className='border px-4 py-2'>Prazo</th>
                  <th className='border px-4 py-2'>Parcela Mínima</th>
                  <th className='border px-4 py-2'>Valor Mínimo de Pedido</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    cod: 29,
                    prazo: 28,
                    parcela: 'R$1.500,00',
                    pedido: 'R$1.500,00',
                  },
                  {
                    cod: 73,
                    prazo: 42,
                    parcela: 'R$1.500,00',
                    pedido: 'R$3.000,00',
                  },
                  {
                    cod: 157,
                    prazo: 56,
                    parcela: 'R$1.500,00',
                    pedido: 'R$4.500,00',
                  },
                  {
                    cod: 264,
                    prazo: 70,
                    parcela: 'R$1.500,00',
                    pedido: 'R$6.000,00',
                  },
                  {
                    cod: 204,
                    prazo: 84,
                    parcela: 'R$1.500,00',
                    pedido: 'R$7.500,00',
                  },
                  {
                    cod: 166,
                    prazo: 98,
                    parcela: 'R$1.500,00',
                    pedido: 'R$9.000,00',
                  },
                ].map((item, index) => (
                  <tr key={index} className='border'>
                    <td className='border px-4 py-2'>{item.cod}</td>
                    <td className='border px-4 py-2'>{`${item.prazo} dias`}</td>
                    <td className='border px-4 py-2'>{item.parcela}</td>
                    <td className='border px-4 py-2'>{item.pedido}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </details>
          <details className='w-full border rounded-lg open:bg-gray-200'>
            <summary className='px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600'>
              Desistência de compra
            </summary>
            <p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600'>
              Caso se arrependa da compra, você pode cancelar o pedido e ter o
              dinheiro pago inteiramente estornado. O cancelamento poderá ser
              realizado antes mesmo do produto sair do nosso centro de
              distribuição, e a devolução do valor pago será integral, incluindo
              o valor do frete, caso tenha sido pago pelo cliente. Caso você já
              tenha recebido os produtos, ou o objeto esteja a caminho da sua
              residência, você terá até 7 dias corridos após o recebimento, para
              fazer a solicitação de devolução. Para isso o produto deve estar
              em sua embalagem original, sem indícios de uso, com todos os itens
              recebidos e a Nota Fiscal (A Nota fiscal pode ser encaminhada por
              e-mail caso o cliente possua apenas a cópia digital que é enviada
              a todos os compradores). Neste caso, o cliente receberá todo valor
              pago no pedido de volta, incluindo eventuais gastos com frete.
            </p>
          </details>
          <details className='w-full border rounded-lg open:bg-gray-200'>
            <summary className='px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600'>
              Trocas por erro de compra.
            </summary>
            <p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600'>
              Nessa caso, as trocas serão feitas somente para produtos sem uso e
              com a embalagem original. Todos nossos produtos ofertados ao
              consumidor têm em sua descrição, os tamanhos, cores, encaixes e
              compatibilidade dos produtos. Fotos ilustrativas dos mesmos também
              estão a disposição do consumidor, facilitando a escolha do
              produto. Mas caso o cliente tenha comprado um produto por engano,
              ou tenha escolhido o tamanho errado, daremos total liberdade de
              troca, a vontade do consumidor. Os produtos a serem enviados na
              troca sempre serão despachados após o recebimento do produto
              devolvido, e passarão por uma avaliação, onde serão analisadas
              possíveis marcas de uso, avarias no produto e/ou na embalagem.
            </p>
          </details>
          <details className='w-full border rounded-lg open:bg-gray-200'>
            <summary className='px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600'>
              Produto avariado e embalagem violada
            </summary>
            <p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600'>
              Nossos produtos não sofrem qualquer alteração em nosso Centro de
              Distribuição. Eles são enviados ao cliente após sua fabricação e
              passagem pelo processo de controle de qualidade. É importante que
              você confira sempre sua mercadoria no ATO da entrega realizada
              pelo transportador. Caso receba o produto com alguam avaria, deve
              ser recusado o recebimento do mesmo e avisado a nossa central de
              suporte ao cliente.
            </p>
          </details>
          <details className='w-full border rounded-lg open:bg-gray-200'>
            <summary className='px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600'>
              Produto em desacordo com o pedido
            </summary>
            <p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600'>
              Caso o produto que você recebeu não é o que você comprou, você
              terá até 7 dias para comunicar nossa central de atendimento para
              fazer a solicitação de troca, ou devolução. Faremos tudo que tiver
              ao nosso alcance para reenviar os produtos corretos imediatamente,
              da forma mais rápida, e agilziar assim a entrega do pedido.
            </p>
          </details>
          <details className='w-full border rounded-lg open:bg-gray-200'>
            <summary className='px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600'>
              Defeito de fabricação constatado antes uso do produto
            </summary>
            <p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600'>
              Se o produto que você recebeu apresentou algum defeito ou
              anomalia, você terá até 7 dias para fazer a solicitação de
              troca/devolução. Para isso o produto deve estar em sua embalagem
              original, sem indícios de uso e com todos os itens recebidos. O
              produto será substituído por um novo idêntico, sem qualquer custo
              adicional ao cliente consumidor. Caso o produto não tenha mais
              disponível em estoque, será feita uma tentativa de troca por outro
              produto semelhante com o cliente. Não havendo interesse por parte
              do consumidor, o valor pago será devolvido integralmente ao mesmo.
            </p>
          </details>
          <details className='w-full border rounded-lg open:bg-gray-200'>
            <summary className='px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600'>
              Defeito de fabricação constatado após o uso do produto
            </summary>
            <p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600'>
              Se você percebeu o defeito ou ele se manifestou apenas depois de
              você já ter usado o produto, todos os produtos por lei, tem no
              mínimo 3 meses de garantia a partir da data da compra, mas a ELITE
              SURFING oferece garatias de até 12 meses, dependendo do produto.
              Cada caso será analisado conforme seu prazo de garantia. Faremos
              uma avaliação detalhada do produto, e uma vez confirmado o defeito
              de fabricação, faremos a troca do produto, sem custo adicional
              nenhum ao cliente. Caso o mesmo for identificado com problemas de
              mau uso do produto, o cliente será avisado e o produto será
              devolvido ao mesmo (neste caso os custos de frete, serão por conta
              do cliente).
            </p>
          </details>
          <details className='w-full border rounded-lg open:bg-gray-200'>
            <summary className='px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600'>
              Política de Reembolso
            </summary>
            <p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600'>
              <strong>II. Estorno em cartão de crédito:</strong> O prazo do
              estorno seguirá as regras da administradora do cartão e dependerá
              da data de vencimento de sua fatura.
              <br />
              <br />
              <strong>III. Reembolso em conta corrente:</strong> Para pedidos
              pagos via boleto ou depósito bancário, o valor da compra poderá
              ser reembolsado em uma conta corrente ou poupança informada pelo
              cliente.
              <br />
              <br />
              Todos os tipos de ressarcimento mencionados acima serão
              processados em até <strong>3 dias úteis</strong> após o
              recebimento do produto em nosso centro de distribuição, onde será
              realizada uma análise técnica detalhada de cada item e seu
              defeito.
              <br />
              <br />
              <strong>Importante:</strong> Caso seja detectado mau uso ou má-fé
              por parte do cliente, a liberação do ressarcimento poderá ser
              negada.
            </p>
          </details>
          <p className='px-4 py-6 pt-4  dark:text-gray-600'>
            As ocorrências que envolvam troca, devolução ou solicitação de
            garantia, devem ser comunicadas à Central de Atendimento ao Cliente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
