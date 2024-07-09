export const UseModal = (e: React.FormEvent<HTMLFormElement>) => {
    //    const { cart } = useCart();
    
        e.preventDefault();
        const form = e.currentTarget;
        const nombre = (form.elements.namedItem('nombre') as HTMLInputElement).value;
        const ciudad = (form.elements.namedItem('ciudad') as HTMLInputElement).value;
        const barrio = (form.elements.namedItem('barrio') as HTMLInputElement).value;
        const mutual = (form.elements.namedItem('mutual') as HTMLSelectElement).value;
    
    
        const detalleCart = '' //cart.map(product => `${product.quantity} ${product.title}`).join(', ');
        const mensaje = `Hola! Mi nombre es ${nombre}. Me contacto desde su página web para preguntar por la compra de:
    
        *${detalleCart}*
    
        *Ciudad:* ${ciudad}
        *Barrio:* ${barrio}
        *Mutual:* ${mutual}`;
    
        const numeroTel = '5493516126331';
    
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); // -> test compara los dispositivos con (navigator.userAgent) 
    
        let whatsappLink;
    
        if (isMobile) {
            whatsappLink = `https://wa.me/${numeroTel}?text=${encodeURIComponent(mensaje)}`; // encodeURIComponent --> espacios se convierten en %20, "ñ" en %C3%B1, etc.
        } else {
            whatsappLink = `https://web.whatsapp.com/send?text=${encodeURIComponent(mensaje)}&phone=${numeroTel}`;
        }
        // window.open(whatsappLink, '_blank');
    
        return { whatsappLink }
    }