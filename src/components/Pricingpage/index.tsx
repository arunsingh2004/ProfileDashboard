// import React from 'react';

// interface PricingPageProps {
//   pricingTableId: string;
// }

// const PricingPage: React.FC<PricingPageProps> = ({ pricingTableId }) => {
//   return (
//     <stripe-pricing-table
//       pricing-table-id={pricingTableId}
//       publishable-key="pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
//     >
//     </stripe-pricing-table>
//   );
// }


// export default PricingPage;

import Script from "next/script";
import { FC } from "react";

export const NextStripePricingTable:FC<{
    pricingTableId?: string;
    publishableKey?: string;
    clientReferenceId?: string;
}> = ({pricingTableId,publishableKey,clientReferenceId}) => {
    if (!pricingTableId || !publishableKey) return null;
    return (
        <>
            <Script
                async
                strategy='lazyOnload'
                src='https://js.stripe.com/v3/pricing-table.js'

            />
            <stripe-pricing-table
                pricing-table-id={pricingTableId}
                publishable-key={publishableKey}
                client-reference-id={clientReferenceId}
            />
        </>
    )
}
