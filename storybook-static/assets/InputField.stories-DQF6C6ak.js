import{j as e}from"./jsx-runtime-dsZ8nYAA.js";import{r as we,R as k}from"./index-GiUgBvb1.js";import{c as F,a as t,L as Se}from"./loader-circle-CmD7jrba.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=F("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=F("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=F("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),a=we.forwardRef(({value:r,onChange:s,label:N,placeholder:ie,helperText:I,errorMessage:d,disabled:l=!1,invalid:v=!1,variant:V="outlined",size:L="md",loading:n=!1,clearable:x=!1,onClear:y,type:z="text",className:ue,...ce},pe)=>{const[w,me]=k.useState(!1),[S,E]=k.useState(r||""),j=z==="password",he=j&&w?"text":z;k.useEffect(()=>{E(r||"")},[r]);const fe=T=>{E(T.target.value),s==null||s(T)},ge=()=>{E(""),y==null||y(),s&&s({target:{value:""},currentTarget:{value:""}})},be={sm:"px-2 py-1 text-sm",md:"px-3 py-2",lg:"px-4 py-3 text-lg"},ve={sm:"text-xs",md:"text-sm",lg:"text-base"},xe={outlined:t("border border-border bg-background","focus:ring-2 focus:ring-ring focus:border-ring",v&&"border-destructive focus:border-destructive focus:ring-destructive",l&&"bg-muted cursor-not-allowed opacity-50"),filled:t("border-0 bg-muted","focus:ring-2 focus:ring-ring",v&&"bg-destructive/10 focus:ring-destructive",l&&"cursor-not-allowed opacity-50"),ghost:t("border-0 border-b-2 border-border rounded-none bg-transparent","focus:border-ring focus:outline-none",v&&"border-destructive focus:border-destructive",l&&"cursor-not-allowed opacity-50")},ye={outlined:"rounded-md",filled:"rounded-md",ghost:"rounded-none"};return e.jsxs("div",{className:"space-y-2",children:[N&&e.jsx("label",{className:t("block font-medium text-foreground",ve[L],l&&"text-muted-foreground"),children:N}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{ref:pe,type:he,value:S,onChange:fe,placeholder:ie,disabled:l||n,className:t("w-full transition-colors duration-200","text-foreground placeholder:text-muted-foreground","focus:outline-none",be[L],xe[V],ye[V],x&&S||n||j?"pr-10":"",ue),"data-testid":"input-field",...ce}),e.jsxs("div",{className:"absolute inset-y-0 right-0 flex items-center pr-3",children:[n&&e.jsx(Se,{className:"h-4 w-4 animate-spin text-muted-foreground","data-testid":"input-loading"}),!n&&x&&S&&!l&&e.jsx("button",{type:"button",onClick:ge,className:"text-muted-foreground hover:text-foreground transition-colors","data-testid":"input-clear",children:e.jsx(Te,{className:"h-4 w-4"})}),!n&&!x&&j&&e.jsx("button",{type:"button",onClick:()=>me(!w),className:"text-muted-foreground hover:text-foreground transition-colors","data-testid":"input-password-toggle",children:w?e.jsx(Ee,{className:"h-4 w-4"}):e.jsx(je,{className:"h-4 w-4"})})]})]}),(I||d)&&e.jsx("p",{className:t("text-sm",d?"text-destructive":"text-muted-foreground"),"data-testid":d?"input-error":"input-helper",children:d||I})]})});a.displayName="InputField";try{a.displayName="InputField",a.__docgenInfo={description:"",displayName:"InputField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void) | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string | undefined"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string | undefined"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},invalid:{defaultValue:{value:"false"},description:"",name:"invalid",required:!1,type:{name:"boolean | undefined"}},variant:{defaultValue:{value:"outlined"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"filled"'},{value:'"outlined"'},{value:'"ghost"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},clearable:{defaultValue:{value:"false"},description:"",name:"clearable",required:!1,type:{name:"boolean | undefined"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void) | undefined"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string | undefined"}}}}}catch{}const Ie={title:"Components/InputField",component:a,parameters:{layout:"centered",docs:{description:{component:"A flexible and reusable input field component with multiple variants, sizes, and states for building consistent form interfaces."}}},argTypes:{variant:{control:"select",options:["outlined","filled","ghost"],description:"Visual style variant of the input field"},size:{control:"select",options:["sm","md","lg"],description:"Size of the input field"},disabled:{control:"boolean",description:"Disable input interaction"},invalid:{control:"boolean",description:"Show error state"},loading:{control:"boolean",description:"Show loading state with spinner"},clearable:{control:"boolean",description:"Show clear button when input has value"},type:{control:"select",options:["text","email","password","number","tel","url"],description:"HTML input type"}},tags:["autodocs"]},o={args:{label:"Email Address",placeholder:"Enter your email",helperText:"We'll never share your email with anyone else."}},i={render:()=>e.jsxs("div",{className:"space-y-6 w-80",children:[e.jsx(a,{variant:"outlined",label:"Outlined",placeholder:"Outlined input"}),e.jsx(a,{variant:"filled",label:"Filled",placeholder:"Filled input"}),e.jsx(a,{variant:"ghost",label:"Ghost",placeholder:"Ghost input"})]})},u={render:()=>e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsx(a,{size:"sm",label:"Small",placeholder:"Small input"}),e.jsx(a,{size:"md",label:"Medium",placeholder:"Medium input"}),e.jsx(a,{size:"lg",label:"Large",placeholder:"Large input"})]})},c={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl",children:[e.jsx(a,{label:"Error State",placeholder:"Enter your email",invalid:!0,errorMessage:"Please enter a valid email address"}),e.jsx(a,{label:"Disabled State",placeholder:"Disabled input",disabled:!0,helperText:"This field is disabled"}),e.jsx(a,{label:"Loading State",placeholder:"Loading...",loading:!0}),e.jsx(a,{label:"Success State",value:"john@example.com",helperText:"Email is valid"})]})},p={args:{label:"Search",placeholder:"Type to search...",clearable:!0,value:"sample text"}},m={args:{label:"Password",type:"password",placeholder:"Enter your password",helperText:"Password must be at least 8 characters"}},h={args:{label:"Email",placeholder:"Enter your email",invalid:!0,errorMessage:"Please enter a valid email address",value:"invalid-email"}},f={args:{label:"Disabled Field",placeholder:"Cannot edit this",disabled:!0,helperText:"This field is read-only"}},g={args:{label:"Loading Field",placeholder:"Please wait...",loading:!0}},b={args:{label:"Dark Theme Example",placeholder:"Enter text...",helperText:"This shows how the component looks in dark mode"},parameters:{backgrounds:{default:"dark"}},decorators:[r=>e.jsx("div",{className:"dark",children:e.jsx(r,{})})]};var D,P,q;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    helperText: "We'll never share your email with anyone else."
  }
}`,...(q=(P=o.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var M,C,_;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-80">\r
      <InputField variant="outlined" label="Outlined" placeholder="Outlined input" />\r
      <InputField variant="filled" label="Filled" placeholder="Filled input" />\r
      <InputField variant="ghost" label="Ghost" placeholder="Ghost input" />\r
    </div>
}`,...(_=(C=i.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var O,G,R;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-80">\r
      <InputField size="sm" label="Small" placeholder="Small input" />\r
      <InputField size="md" label="Medium" placeholder="Medium input" />\r
      <InputField size="lg" label="Large" placeholder="Large input" />\r
    </div>
}`,...(R=(G=u.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var W,A,B;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">\r
      <InputField label="Error State" placeholder="Enter your email" invalid errorMessage="Please enter a valid email address" />\r
      <InputField label="Disabled State" placeholder="Disabled input" disabled helperText="This field is disabled" />\r
      <InputField label="Loading State" placeholder="Loading..." loading />\r
      <InputField label="Success State" value="john@example.com" helperText="Email is valid" />\r
    </div>
}`,...(B=(A=c.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var H,X,J;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    clearable: true,
    value: 'sample text'
  }
}`,...(J=(X=p.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var K,Q,U;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    helperText: 'Password must be at least 8 characters'
  }
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,$;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    invalid: true,
    errorMessage: 'Please enter a valid email address',
    value: 'invalid-email'
  }
}`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,re;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Field',
    placeholder: 'Cannot edit this',
    disabled: true,
    helperText: 'This field is read-only'
  }
}`,...(re=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var le,te,se;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    label: 'Loading Field',
    placeholder: 'Please wait...',
    loading: true
  }
}`,...(se=(te=g.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ne,de,oe;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    label: 'Dark Theme Example',
    placeholder: 'Enter text...',
    helperText: 'This shows how the component looks in dark mode'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [Story => <div className="dark">\r
        <Story />\r
      </div>]
}`,...(oe=(de=b.parameters)==null?void 0:de.docs)==null?void 0:oe.source}}};const Ve=["Default","Variants","Sizes","States","WithClearButton","PasswordField","ErrorState","Disabled","Loading","DarkTheme"];export{b as DarkTheme,o as Default,f as Disabled,h as ErrorState,g as Loading,m as PasswordField,u as Sizes,c as States,i as Variants,p as WithClearButton,Ve as __namedExportsOrder,Ie as default};
