import{j as e}from"./jsx-runtime-dsZ8nYAA.js";import{r as b}from"./index-GiUgBvb1.js";import{c as U,a as E,L as pe}from"./loader-circle-CmD7jrba.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=U("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=U("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=U("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);function T({data:r,columns:n,loading:k=!1,selectable:_=!1,onRowSelect:o,emptyMessage:ce="No data available",className:D}){const[g,A]=b.useState(new Set),[m,V]=b.useState(null),[d,h]=b.useState(null),i=b.useMemo(()=>!m||!d?r:[...r].sort((a,t)=>{const s=a[m],l=t[m];if(s===l)return 0;let p=0;return typeof s=="string"&&typeof l=="string"?p=s.localeCompare(l):typeof s=="number"&&typeof l=="number"?p=s-l:p=String(s).localeCompare(String(l)),d==="asc"?p:-p}),[r,m,d]),de=a=>{m===a?d==="asc"?h("desc"):d==="desc"?(h(null),V(null)):h("asc"):(V(a),h("asc"))},ie=a=>{const t=new Set(g);t.has(a)?t.delete(a):t.add(a),A(t);const s=Array.from(t).map(l=>i[l]);o==null||o(s)},me=()=>{if(g.size===i.length)A(new Set),o==null||o([]);else{const a=new Set(Array.from({length:i.length},(t,s)=>s));A(a),o==null||o(i)}},ue=a=>m!==a?e.jsx(M,{className:"w-4 h-4"}):d==="asc"?e.jsx(he,{className:"w-4 h-4"}):d==="desc"?e.jsx(ge,{className:"w-4 h-4"}):e.jsx(M,{className:"w-4 h-4"});return k?e.jsx("div",{className:E("w-full",D),children:e.jsx("div",{className:"bg-card border border-border rounded-lg",children:e.jsxs("div",{className:"p-8 text-center",children:[e.jsx(pe,{className:"w-8 h-8 animate-spin mx-auto text-muted-foreground"}),e.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:"Loading data..."})]})})}):r.length?e.jsx("div",{className:E("w-full",D),children:e.jsx("div",{className:"bg-card border border-border rounded-lg overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full","data-testid":"data-table",children:[e.jsx("thead",{className:"bg-muted/50",children:e.jsxs("tr",{children:[_&&e.jsx("th",{className:"px-4 py-3 text-left",children:e.jsx("input",{type:"checkbox",checked:g.size===i.length&&i.length>0,onChange:me,className:"rounded border-border text-primary focus:ring-ring","data-testid":"select-all-checkbox"})}),n.map(a=>e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider",children:a.sortable?e.jsxs("button",{onClick:()=>de(a.accessor),className:"flex items-center space-x-1 hover:text-foreground transition-colors","data-testid":`sort-${String(a.accessor)}`,children:[e.jsx("span",{children:a.header}),ue(a.accessor)]}):a.header},String(a.accessor)))]})}),e.jsx("tbody",{className:"bg-card divide-y divide-border",children:i.map((a,t)=>e.jsxs("tr",{className:"hover:bg-muted/25 transition-colors","data-testid":`table-row-${t}`,children:[_&&e.jsx("td",{className:"px-4 py-4 whitespace-nowrap",children:e.jsx("input",{type:"checkbox",checked:g.has(t),onChange:()=>ie(t),className:"rounded border-border text-primary focus:ring-ring","data-testid":`select-row-${t}`})}),n.map(s=>e.jsx("td",{className:"px-4 py-4 whitespace-nowrap text-sm text-foreground","data-testid":`cell-${String(s.accessor)}-${t}`,children:s.render?s.render(a[s.accessor],a):String(a[s.accessor])},String(s.accessor)))]},t))})]})})})}):e.jsx("div",{className:E("w-full",D),children:e.jsx("div",{className:"bg-card border border-border rounded-lg",children:e.jsx("div",{className:"p-8 text-center",children:e.jsx("p",{className:"text-muted-foreground",children:ce})})})})}try{T.displayName="DataTable",T.__docgenInfo={description:"",displayName:"DataTable",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"Column<T>[]"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},selectable:{defaultValue:{value:"false"},description:"",name:"selectable",required:!1,type:{name:"boolean | undefined"}},onRowSelect:{defaultValue:null,description:"",name:"onRowSelect",required:!1,type:{name:"((selectedRows: T[]) => void) | undefined"}},emptyMessage:{defaultValue:{value:"No data available"},description:"",name:"emptyMessage",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}const u=[{id:1,name:"John Doe",email:"john@example.com",role:"Developer",status:"Active"},{id:2,name:"Alice Smith",email:"alice@example.com",role:"Designer",status:"Pending"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"Manager",status:"Inactive"},{id:4,name:"Carol Williams",email:"carol@example.com",role:"Developer",status:"Active"},{id:5,name:"David Brown",email:"david@example.com",role:"QA Engineer",status:"Active"}],c=[{header:"Name",accessor:"name",sortable:!0,render:(r,n)=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-primary font-medium text-sm",children:n.name.split(" ").map(k=>k[0]).join("")})}),e.jsx("span",{className:"font-medium",children:r})]})},{header:"Email",accessor:"email",sortable:!0},{header:"Role",accessor:"role",sortable:!0},{header:"Status",accessor:"status",sortable:!0,render:r=>{const n={Active:"bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",Pending:"bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",Inactive:"bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"};return e.jsx("span",{className:`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${n[r]}`,children:r})}}],ye={title:"Components/DataTable",component:T,parameters:{layout:"padded",docs:{description:{component:"A flexible and feature-rich data table component with sorting, selection, loading states, and responsive design."}}},argTypes:{loading:{control:"boolean",description:"Show loading state with spinner"},selectable:{control:"boolean",description:"Enable row selection with checkboxes"},emptyMessage:{control:"text",description:"Message to display when no data is available"}},tags:["autodocs"]},x={args:{data:u,columns:c}},f={args:{data:u,columns:c,selectable:!0,onRowSelect:r=>{console.log("Selected rows:",r)}}},y={args:{data:[],columns:c,loading:!0}},v={args:{data:[],columns:c,emptyMessage:"No users found. Try adjusting your search criteria."}},w={args:{data:u,columns:c},parameters:{docs:{description:{story:"Click on sortable column headers to sort the data. You can sort in ascending, descending, or return to original order."}}}},j={args:{data:u,columns:[{header:"Name",accessor:"name",sortable:!0},{header:"Email",accessor:"email",sortable:!0},{header:"Role",accessor:"role",sortable:!0}]}},N={args:{data:u,columns:c,selectable:!0},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"The table is responsive and will scroll horizontally on smaller screens while maintaining usability."}}}},S={args:{data:u,columns:c,selectable:!0},parameters:{backgrounds:{default:"dark"}},decorators:[r=>e.jsx("div",{className:"dark",children:e.jsx(r,{})})]},C={args:{data:Array.from({length:50},(r,n)=>({id:n+1,name:`User ${n+1}`,email:`user${n+1}@example.com`,role:["Developer","Designer","Manager","QA Engineer"][n%4],status:["Active","Inactive","Pending"][n%3]})),columns:c,selectable:!0},parameters:{docs:{description:{story:"Example with a larger dataset to demonstrate performance and scrolling behavior."}}}};var $,q,L;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: userColumns
  }
}`,...(L=(q=x.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var I,z,P;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: userColumns,
    selectable: true,
    onRowSelect: (selectedRows: any[]) => {
      console.log('Selected rows:', selectedRows);
    }
  }
}`,...(P=(z=f.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var R,Q,W;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: userColumns,
    loading: true
  }
}`,...(W=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var B,J,Y;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: userColumns,
    emptyMessage: 'No users found. Try adjusting your search criteria.'
  }
}`,...(Y=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var O,F,G;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: userColumns
  },
  parameters: {
    docs: {
      description: {
        story: 'Click on sortable column headers to sort the data. You can sort in ascending, descending, or return to original order.'
      }
    }
  }
}`,...(G=(F=w.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,K,X;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: [{
      header: 'Name',
      accessor: 'name',
      sortable: true
    }, {
      header: 'Email',
      accessor: 'email',
      sortable: true
    }, {
      header: 'Role',
      accessor: 'role',
      sortable: true
    }]
  }
}`,...(X=(K=j.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Z,ee,ae;N.parameters={...N.parameters,docs:{...(Z=N.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: userColumns,
    selectable: true
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'The table is responsive and will scroll horizontally on smaller screens while maintaining usability.'
      }
    }
  }
}`,...(ae=(ee=N.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var se,re,te;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: userColumns,
    selectable: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [Story => <div className="dark">\r
        <Story />\r
      </div>]
}`,...(te=(re=S.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ne,oe,le;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    data: Array.from({
      length: 50
    }, (_, i) => ({
      id: i + 1,
      name: \`User \${i + 1}\`,
      email: \`user\${i + 1}@example.com\`,
      role: ['Developer', 'Designer', 'Manager', 'QA Engineer'][i % 4],
      status: (['Active', 'Inactive', 'Pending'] as const)[i % 3]
    })),
    columns: userColumns,
    selectable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with a larger dataset to demonstrate performance and scrolling behavior.'
      }
    }
  }
}`,...(le=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};const ve=["Default","WithSelection","Loading","EmptyState","Sorted","SimpleColumns","ResponsiveExample","DarkTheme","LargeDataset"];export{S as DarkTheme,x as Default,v as EmptyState,C as LargeDataset,y as Loading,N as ResponsiveExample,j as SimpleColumns,w as Sorted,f as WithSelection,ve as __namedExportsOrder,ye as default};
