import {ImageResponse} from 'next/og';
export const alt='Zulsyahmi Zulkefli — Software for the everyday.';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{background:'white',color:'#191b22',width:'100%',height:'100%',display:'flex',flexDirection:'column',padding:'64px',justifyContent:'space-between'}}><div style={{fontSize:24}}>Zulsyahmi Zulkefli</div><div style={{fontSize:100,letterSpacing:-5,lineHeight:1,fontFamily:'serif'}}>Software for the everyday.</div><div style={{borderTop:'1px solid #d4d5d8',paddingTop:24,fontSize:20}}>SplitFlow · Receipt-to-Form · Inventory Request System</div></div>,size)}
