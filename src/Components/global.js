const styles = {
    

    textField: {
        margin: '10px auto', width: '350px'
    },

    subscript: { 
        color: '#0008C1',
        fontSize: '10px' ,
        margin: '10px auto',
        width: '350px',
        lineHeight: '0px'
    },

    basicButton: {
        fontWeight: '600',
        width: '350px', 
        margin: '10px auto',
        backgroundColor: '#4F62B0',
        fontFamily:'Poppins',
    },


    btntext:{
        
    },
    
    btn: {
        width: '150px',
        height: '40px',
        background: '#3457D5',
        borderRadius: '5px',
        margin: 'auto 0px auto 10px'
    },

    footerText:{
        fontFamily:'Poppins',
        fontStyle:'normal',
        fontWeight:400,
        fontSize:'14px',
        lineHeight:'21px',
        textAlign:'center',
    },

    title: {
        color: '#002D62',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '60px',
        fontSize: '30px',
        textShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
        margin: '36px auto', 
        width: '85%',
    },

    title2: {
        color: '#002D62',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '300',
        lineHeight: '60px',
        fontSize: '30px',
        textShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
        margin: '10px', 
        // width: '85%',
    },

    title3: {
        color: '#002D62',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '300',
        lineHeight: '60px',
        fontSize: '20px',
        textShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
        margin: '10px', 
        // width: '85%',
    },

    subTitle: {
        color: '#002D62',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '60px',
        fontSize: '20px',
        textShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
        margin: 'auto auto',  
    }
}


const navbarStyle = {
    title: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '32px',
        lineHeight: '48px',
        textAlign: 'center',
        color: '#002D62'
    },

    border: {
        background: '#FEFEFE',
        border: '2px solid #002D62',
        borderRadius: '10px'
    },

    text: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '20px',
        lineHeight: '30px',
        textAlign: 'center',
        color: '#002D62'
    },

    underlineText: {
        textDecorationLine: 'underline'
    }
}

const landingPage = {
    title: {
        color: '#002D62',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '60px',
        textShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
        width: '85%',
    },

    text: {
        width: '84%',
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '27px',
        color: '#000000',
        margin: '-25px auto 0px auto'
    }
}

const dashboard = {
    blocks: {
        display: 'flex',
        background: '#F0F8FF',
        margin: '15px'
    },

    cardTextTitle: {
        fontSize: "16px", 
        color: "#002D62", 
        fontWeight: "600",
        fontFamily: "Poppins",
        margin: "20px 0px 0px 20px"
    },

    iconTitle:{
        margin: "0px 14px",
        fontSize: "16px",
    },

    img: {
        height: "20px", 
        width: "20px", 
    },
}

export default styles;
export {navbarStyle, landingPage, dashboard};