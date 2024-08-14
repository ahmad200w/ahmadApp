
const formatNumberWithSpaces = value => {
    // استخدام replace لوضع مسافة كل 3 أرقام
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

   // التحقق من أن النص يحتوي على أرقام فقط


   // التحقق من أن النص لا يتجاوز 10 أرقام
   

   export  const handleTextChange =(text)=>{
    const numericValue = text.replace(/[^0-9]/g, '');

    const truncatedValue = numericValue.slice(0, 12);
    const formattedValue = formatNumberWithSpaces(truncatedValue);

    return formattedValue;


   }

   //  Ccv util...

  export const handleCcvChange = text => {
    // يتحقق من أن القيمة تحتوي على 3 أرقام وتكون أرقامًا فقط
    const ccvRegex = /^\d{0,3}$/;

    if (ccvRegex.test(text)) {
     return text;
    }
  };