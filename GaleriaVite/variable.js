const imagenes = [
    {title:"Suiza",  url:"https://images.unsplash.com/photo-1657311388684-d47793e572b9?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {title:"Japón", url:"https://plus.unsplash.com/premium_photo-1690749740484-89660d6003f9?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFpc2FqZSUyMGphcG9ufGVufDB8fDB8fHww"},
    {title:"Perú", url:"https://plus.unsplash.com/premium_photo-1694475501155-2f344cea9eb3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFpc2FqZSUyMHBlcnV8ZW58MHx8MHx8fDA%3D"},
    {title:"Argentina", url:"https://images.unsplash.com/photo-1459949293702-2ec939154ddb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpc2FqZSUyMGFyZ2VudGluYXxlbnwwfHwwfHx8MA%3D%3D"},
    {title:"China", url:"https://images.unsplash.com/photo-1505763941729-634dfa346b1b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBhaXNhamUlMjBjaGluYXxlbnwwfHwwfHx8MA%3D%3D"},
    {title:"Honduras",  url:"https://images.unsplash.com/photo-1656988086378-118f9cfe3a4c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXNsYXMlMjBkZSUyMGxhJTIwYmFoaWElMjBob25kdXJhc3xlbnwwfHwwfHx8MA%3D%3D"},
    {title:"Canadá", url:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwcGFpc2FqZXN8ZW58MHx8MHx8fDA%3D"},
    {title:"Italia", url:"https://images.unsplash.com/photo-1652636373350-7bc597045c34?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGl0YWxpYSUyMHBhaXNhamVzfGVufDB8fDB8fHww"},
    {title:"Madagascar", url:"https://images.unsplash.com/photo-1622647154493-bcbd02b00b48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFkYWdhc2NhciUyMHBhaXNhamVzfGVufDB8fDB8fHww"},
    {title:"México", url:"https://plus.unsplash.com/premium_photo-1694475614507-c494d0de282c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWV4aWNvJTIwY2hpY2hlbiUyMGl0emF8ZW58MHx8MHx8fDA%3D"},
    {title:"Marruecos",  url:"https://plus.unsplash.com/premium_photo-1673415819355-a1022fd53c5c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hcnJ1ZWNvcyUyMHBhaXNhamVzfGVufDB8fDB8fHww"},
    {title:"Corea del Sur", url:"https://plus.unsplash.com/premium_photo-1661962699053-3f216d2f4c48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29yZWElMjBkZWwlMjBzdXIlMjBwYWlzYWplc3xlbnwwfHwwfHx8MA%3D%3D"},
    {title:"Brasil", url:"https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3Jpc3RvJTIwcmVkZW50b3IlMjBicmFzaWx8ZW58MHx8MHx8fDA%3D"},
    {title:"Noruega", url:"https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bm9ydWVnYSUyMHBhaXNhamVzfGVufDB8fDB8fHww"},
    {title:"Tailandia", url:"https://images.unsplash.com/photo-1490077476659-095159692ab5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRhaWxhbmRpYXxlbnwwfHwwfHx8MA%3D%3D"}
];

const pageContext = (page)=>{
    const context= {imagenes}
    return context;
}
export default pageContext;