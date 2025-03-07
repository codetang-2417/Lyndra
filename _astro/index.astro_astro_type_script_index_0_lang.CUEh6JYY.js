import{d as i}from"./dayjs.min.CYiS1e1k.js";import{c as e}from"./consts.ahtm_UGh.js";import{r as g}from"./zh-cn.CuJU4Us-.js";import"./_commonjsHelpers.Cpj98o6Y.js";i.extend(g);i.locale(e.lang);let m=document.getElementById("more-btn");m.addEventListener("click",function(){d()});let o="",c="",r="";await p();await d();async function p(){let a=await(await fetch(`${e.memosUrl}/api/v1/users:search?filter=username=='${e.memosUsername}'`)).json();o=a.users[0].avatarUrl?a.users[0].avatarUrl:"https://memos.cirry.cn/full-logo.webp",c=a.users[0].name}async function d(){let a=await(await fetch(`${e.memosUrl}/api/v1/memos?filter=creator=='${c}'&&visibilities==['PUBLIC']&pageSize=${e.memosPageSize}&pageToken=${r}`)).json(),l="";a.memos.forEach(t=>{let n="";t.resources.length>0&&t.resources.filter(s=>["image/jpeg","image/png","image/jpg","image/webp"].includes(s.type)).forEach(s=>{n+=`<img src="${e.memosUrl+"/file/"+s.name+"/"+s.filename}" alt="${s.filename}" />`}),l+=`
          <div class="flex flex-col  shadow flex flex-col bg-skin-card p-4 mb-4 rounded-lg">
            <div class="flex w-full memos-center">
              <img src="${o}" class="github-avatar mr-4" alt="avatar" />
              <div>@${e.memosUsername}</div>
            </div>
            <p class="memo-content-wrapper my-4"> ${t.snippet}</p>
            <div>${n}</div>

            <p>${i(t.updateTime).fromNow()} • ${i(t.updateTime).format("YYYY-MM-DD HH:mm")}</p>
          </div>
          `}),document.getElementById("memos").innerHTML+=l.toString(),r=a.nextPageToken,r===""?m.classList.add("hidden"):m.classList.remove("hidden")}
