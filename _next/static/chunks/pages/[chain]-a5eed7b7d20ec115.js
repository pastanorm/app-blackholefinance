(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[615],{655:function(e,l,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[chain]",function(){return o(48862)}])},48862:function(e,l,o){"use strict";o.r(l),o.d(l,{__N_SSP:function(){return g},default:function(){return A}});var i=o(81018),n=o(53769),t=o(29851),s=o(81139),a=o(42985),r=o(86467),u=o(10447),d=o(82369),c=o(56759),p=o(25557),v=o(7948),m=o(95087),f=o(87668),h=o(29020),x=o(28540),w=o(49902),y=o(37746),b=o(18016);let k=(e,l)=>{var o,i,n,a;let r=(0,c.Dv)(t.Vc),[u,d]=(0,m.useState)([]),[v,f]=(0,m.useState)([]),[h,k]=(0,b.aM)({query:w.ni,variables:{account:null!==(i=null==e?void 0:e.toLowerCase())&&void 0!==i?i:""}}),{data:N,fetching:g,error:A}=h,D=(0,m.useMemo)(()=>{var e;return null!==(e=null==N?void 0:N.dopexVaults.filter(e=>l.map(e=>e.VAULT_ADDRESS.toLowerCase()).includes(e.id.toLowerCase())))&&void 0!==e?e:[]},[null==N?void 0:N.dopexVaults,l]),[E]=(0,b.aM)({query:w.Zm,variables:{poolIds:(0,p.chain)(null!=D?D:[]).map(e=>e.pool).uniq().value()},pause:(0,p.isEmpty)(D),context:(0,m.useMemo)(()=>({url:"https://subgraph.satsuma-prod.com/1563a78cd0f9/pao-tech/orange-finance/api"}),[])}),{data:S,fetching:_,error:L}=E,[B]=(0,b.aM)({query:w.U$,variables:{vaultIds:null!==(n=D.map(e=>e.id))&&void 0!==n?n:[]},pause:(0,p.isEmpty)(D),context:(0,m.useMemo)(()=>({url:"https://api.0xgraph.xyz/subgraphs/name/dopex-v2-clamm-public"}),[])}),{data:j,fetching:C,error:M}=B,V=null!==(a=null==j?void 0:j.lppositions.map(e=>e.strike.id))&&void 0!==a?a:[],[P]=(0,b.aM)({query:w.op,variables:{tokenIds:V,tokenIdsCount:V.length},pause:(0,p.isEmpty)(V),context:(0,m.useMemo)(()=>({url:"https://api.0xgraph.xyz/subgraphs/name/dopex-v2-clamm-public"}),[])}),{data:T,fetching:U,error:R}=P,q=(0,m.useMemo)(()=>{var e;let l=null!==(e=null==j?void 0:j.lppositions)&&void 0!==e?e:[];return(0,p.chain)(l).map(e=>{let l=null==T?void 0:T.dailyDonations.find(l=>l.strike.id===e.strike.id),o=null==T?void 0:T.dailyFeeCompounds.find(e=>e.id===(null==l?void 0:l.id));return{sqrtPriceX96:null==l?void 0:l.sqrtPriceX96,donation:null==l?void 0:l.donation,compound:null==o?void 0:o.compound,strike:null==e?void 0:e.strike,pool:e.pool,shares:e.shares,user:e.user,handler:e.handler}}).groupBy("user").value()},[j,T]),F=(0,m.useMemo)(()=>{if(!D||!(null==S?void 0:S.pools)||!(null==S?void 0:S.bundle))return[];let e=new x.BN(S.bundle.ethPriceUSD);return(0,p.chain)(D).map(l=>{let o=q[l.id],i=null==S?void 0:S.pools.find(e=>e.id===(null==l?void 0:l.pool));if(l&&i)return(0,s.jA)(o,l,i,e)}).compact().value()},[D,null==S?void 0:S.pools,null==S?void 0:S.bundle,q]),z=(0,m.useMemo)(()=>{var e,l;return null!==(l=null==N?void 0:null===(e=N.user)||void 0===e?void 0:e.positions.map(e=>e.vault))&&void 0!==l?l:[]},[null==N?void 0:null===(o=N.user)||void 0===o?void 0:o.positions]),I=(0,m.useMemo)(()=>F.reduce((e,l)=>e=e.plus(new x.BN(l.tvl)),new x.BN(0)),[F]);return(0,m.useEffect)(()=>{var e,o;let i=new x.BN(null!==(o=null==S?void 0:null===(e=S.bundle)||void 0===e?void 0:e.ethPriceUSD)&&void 0!==o?o:0),n=(0,p.chain)(D).map(e=>{var o,n,t,a,u;let d=l.find(l=>l.VAULT_ADDRESS.toLowerCase()===e.id.toLowerCase()),c=null==S?void 0:S.pools.find(l=>l.id===(null==e?void 0:e.pool));if(!d||!e||!c)return null;let p=F.find(l=>l.vaultId===e.id),v=null==N?void 0:null===(o=N.user)||void 0===o?void 0:o.positions.find(e=>e.vault===(null==d?void 0:d.VAULT_ADDRESS.toLowerCase())),m=e.isTokenPairReversed?c.token1:c.token0,f=null!==(t=null!==(n=(0,s.kY)(m.id,r))&&void 0!==n?n:m.symbol)&&void 0!==t?t:"",h=new x.BN(null!==(a=null==p?void 0:p.dopexApr)&&void 0!==a?a:0).multipliedBy(100),w=new x.BN(null!==(u=null==v?void 0:v.share)&&void 0!==u?u:0),[y,b]=[new x.BN(e.totalAssets),new x.BN(e.totalSupply)],k=b.isZero()?new x.BN(0):w.times(y).div(b).pow10ofMinus(Number(m.decimals)),g=k.times(new x.BN(m.derivedETH)).times(new x.BN(null!=i?i:0)),A=Number(e.decimals),D={vaultAddress:d.VAULT_ADDRESS,poolAddress:c.id.toLowerCase(),category:d.info.category,title:d.info.productName,caption:d.info.caption,description:d.info.description,tags:d.info.tags,totalDeposit:new x.BN(e.totalAssets).pow10ofMinus(A),maxCapacity:null,apr:null,feeApr:h,myPosition:k,myPositionUSD:g,symbol:f,baseToken:f,imageUrls:d.info.imageUrls,theme:d.info.theme};return D}).compact().sortBy(e=>e.category===y.W3.Deprecated).value();if(d(n),D&&(null==S?void 0:S.pools)){let t=l.map(e=>e.VAULT_ADDRESS.toLowerCase()),a=(0,p.chain)(D).map(e=>{if(!t.includes(e.id))return;let l=S.pools.find(l=>l.id===e.pool);if(!l)return;let[o,i]=e.isTokenPairReversed?[l.token1,l.token0]:[l.token0,l.token1];return{...e,pool:l,baseToken:o,quoteToken:i}}).compact().value();(0,p.isEqual)(v,a)||f(a)}},[F,r,l,D,null==S?void 0:S.pools,null==S?void 0:S.bundle]),{productCardList:u,myVaults:z,allTvl:I,vaultDataList:v,fetching:g||_||C||U}},N=()=>{var e;let l=(0,v.useRouter)(),{address:o}=(0,f.mA)(),{chain:u}=l.query,[x,w]=(0,m.useState)([]),y=(0,c.b9)(t.Vc),{supportedChains:b,defaultChainId:N}=(0,c.Dv)(t.iz),[g,A]=(0,c.KO)(t.iT),D=null!==(e=null==g?void 0:g.id)&&void 0!==e?e:N,{allTvl:E,productCardList:S,myVaults:_,vaultDataList:L,fetching:B}=k(o,x);(0,m.useEffect)(()=>{w((0,h.yF)(D))},[D]),(0,m.useEffect)(()=>{y(h.VF[D])},[D,y]),(0,m.useEffect)(()=>{b.find(e=>{e.network===u&&A(e)})},[u]);let{merklRewardsApr:j}=(0,n.kH)(D,o,L,h.RA);return(0,m.useEffect)(()=>{!1===b.map(e=>e.network).includes(u)&&l.replace("/404")},[u,b]),(0,i.jsxs)("div",{className:"flex flex-col container px-4 py-8 md:px-8 md:py-16 ",children:[(0,i.jsx)("div",{className:"flex flex-row justify-center items-center bg-orange-500 rounded-xl p-2 mb-16 mx-12",children:(0,i.jsxs)("span",{className:"text-style-body1-rg ",children:["Please migrate funds from\xa0",(0,i.jsx)("a",{href:"https://app-blackholefinance.vercel.app/ethereum/0x65Fb7fa8731710b435999cB7d036D689097548e8",className:"underline",children:"here"})]})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"text-style-heading2",children:"LPDFi Vault"}),(0,i.jsx)("div",{className:"flex flex-row mt-5",children:(0,i.jsx)(a.jk,{label:"Total Value Locked",value:"$".concat((0,s.nS)(E)),className:"w-80"})})]}),(0,i.jsx)("div",{className:"mt-9 md:mt-10",children:(0,i.jsx)(d.b5,{prodcutCardList:S,myVaults:_,merklRewardsApr:j,children:(0,i.jsx)("div",{className:"flex flex-row mt-5 md:mt-6",children:b.map((e,o)=>(0,i.jsx)(r.U3,{label:(0,p.capitalize)(e.network),logoUrl:a.Vm[e.network],isActive:e===g,onClick:()=>{l.push("/".concat(e.network.toLowerCase()==="arbitrum"?"ethereum":"arbitrum"))}},o))})})})]})};N.getLayout=u.G;var g=!0,A=N}},function(e){e.O(0,[642,902,447,369,774,888,179],function(){return e(e.s=655)}),_N_E=e.O()}]);