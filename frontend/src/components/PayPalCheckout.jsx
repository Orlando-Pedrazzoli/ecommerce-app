import { PayPalButtons } from '@paypal/react-paypal-js';

const PayPalCheckout = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amount.toString(), // Valor total do pedido
                currency_code: 'BRL', // Moeda brasileira
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        try {
          const details = await actions.order.capture();
          onSuccess(details); // Chama a função de sucesso
        } catch (error) {
          onError(error); // Chama a função de erro
        }
      }}
      onError={error => {
        onError(error); // Chama a função de erro
      }}
    />
  );
};

export default PayPalCheckout;
