"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

const TERMS = {
  "前端工具 🧰": [
    { term: "NPM", emoji: "🛒", explain: "像买菜的超市，你去那里拿需要的食材（代码包）。" },
    { term: "Yarn", emoji: "🧶", explain: "另一家效率更高的超市，也能买到同样的食材。" },
    { term: "Webpack", emoji: "👨‍🍳", explain: "大厨把各种原材料（代码、样式）炒成一道大菜（网页）。" },
    { term: "Parcel", emoji: "🤖", explain: "机器人厨师，自动识别要做什么菜，不用你告诉太多步骤。" },
    { term: "CDN", emoji: "🏪", explain: "家门口的便利店，提前准备好的调料快速取用。" },
    { term: "Babel", emoji: "📝", explain: "菜谱翻译器，把新派菜单翻译成老厨师也看得懂的版本。" },
    { term: "ESLint", emoji: "🔍", explain: "厨房检查员，提醒你碗没洗干净、菜板没擦。" },
    { term: "Prettier", emoji: "✨", explain: "摆盘助手，让菜看起来整整齐齐。" },
  ],
  "基础编程概念 💡": [
    { term: "变量", emoji: "🏷️", explain: "食材的名字，比如'鸡蛋 = 两颗'，后面可以一直用。" },
    { term: "函数", emoji: "📋", explain: "一套做菜步骤，可以重复用，还能加参数（几颗蛋）。" },
    { term: "数组", emoji: "🧺", explain: "一篮子水果，按顺序放着。" },
    { term: "对象", emoji: "🔖", explain: "带标签的食材，比如品名、数量、有机。" },
    { term: "类（Class）", emoji: "📒", explain: "自定义的一种菜系（模板），以后可以照着不断做。" },
    { term: "类型（Type）", emoji: "⚖️", explain: "明确食材是什么，比如'鸡蛋'不是'牛奶'，错了厨房报警。" },
  ],
  "运行逻辑 ⚙️": [
    { term: "条件判断", emoji: "🔀", explain: "如果客人不要辣，就不放辣椒。" },
    { term: "循环", emoji: "🔄", explain: "每10秒翻一次锅，直到炒黄。" },
    { term: "异步/同步", emoji: "⏱️", explain: "同步是一道一道做，异步是汤和菜一起做。" },
    { term: "回调函数", emoji: "📞", explain: "告诉机器人：'炒完菜就叫我'，它做完后再通知你。" },
    { term: "Promise", emoji: "🤝", explain: "一个承诺：菜一定会炒好，等一会就行。" },
    { term: "try/catch", emoji: "🧯", explain: "尝试做菜，有错就立刻抓住处理，防止厨房爆炸。" },
  ],
  "开发与工具 🔧": [
    { term: "IDE", emoji: "🏗️", explain: "全套厨房设备，帮你一条龙做菜。" },
    { term: "Git", emoji: "📜", explain: "菜谱版本记录，改错了随时能回退。" },
    { term: "Terminal", emoji: "🎤", explain: "厨房的语音指挥系统，告诉炉子做啥。" },
    { term: "CI/CD", emoji: "🔄", explain: "自动流水线，菜谱一变，系统立刻炒新菜上桌。" },
    { term: "Lint", emoji: "🧹", explain: "检查你炒菜过程有没有明显失误（代码规范检查器）。" },
    { term: "脚本（Script）", emoji: "📃", explain: "厨房指令书：一条命令炒整套菜。" },
  ],
  "设计与架构 🏛️": [
    { term: "框架", emoji: "🧰", explain: "配好的一套大厨工具箱，跟着说明书做就行。" },
    { term: "库", emoji: "🧂", explain: "小型调料盒，炒啥菜都能用上。" },
    { term: "API", emoji: "📢", explain: "前台和后厨点菜用的语言规则。" },
    { term: "MVC", emoji: "🏢", explain: "把厨房分为菜单设计、炒菜操作和成品出菜三大部分。" },
    { term: "组件化", emoji: "🧩", explain: "每道小菜做成模块，随时拼成大餐。" },
    { term: "状态管理", emoji: "📝", explain: "记录厨房现在在煮啥、剩下啥、锅在哪，谁来接锅。" },
  ],
  "安全与性能 🔒": [
    { term: "加密", emoji: "🔐", explain: "把菜单锁在密码箱里。" },
    { term: "Token", emoji: "🎫", explain: "饭卡，登录后走哪厨房都认得你。" },
    { term: "缓存", emoji: "🍲", explain: "提前煮好的一锅汤，来人立马能吃。" },
    { term: "跨域（CORS）", emoji: "🚧", explain: "有些菜只能特定服务员传，不然保安会拦你。" },
    { term: "防火墙", emoji: "💂", explain: "厨房门口的保安，不是所有人都能进来加菜。" },
  ],
  "测试与质量 🧪": [
    { term: "测试", emoji: "👅", explain: "试吃员，确保菜没问题。" },
    { term: "Bug", emoji: "🐛", explain: "做菜时放错材料了。" },
    { term: "Debug", emoji: "🔎", explain: "找出哪步做错，修正它。" },
    { term: "单元测试", emoji: "🥄", explain: "测试每道小菜是不是能独立做出来。" },
    { term: "集成测试", emoji: "🍽️", explain: "试试一整桌菜搭配起来会不会翻车。" },
    { term: "回归测试", emoji: "🔁", explain: "改了菜单要重新试吃一遍，看看有没有出新错。" },
  ],
}

export default function KitchenCodingTerms() {
  const [category, setCategory] = useState(Object.keys(TERMS)[0])

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">编程术语 · 做菜版解释 🍳</h1>
      <Tabs value={category} onValueChange={setCategory} className="mb-4">
        <TabsList className="flex overflow-x-auto">
          {Object.keys(TERMS).map((key) => (
            <TabsTrigger key={key} value={key} className="whitespace-nowrap">
              {key}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(TERMS).map(([key, items]) => (
          <TabsContent key={key} value={key}>
            <Accordion type="single" collapsible className="space-y-2">
              {items.map(({ term, emoji, explain }) => (
                <AccordionItem value={term} key={term}>
                  <AccordionTrigger>
                    <span className="flex items-center gap-2">
                      <span className="text-xl">{emoji}</span> {term}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Card>
                      <CardContent className="p-4 text-sm text-muted-foreground">{explain}</CardContent>
                    </Card>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
