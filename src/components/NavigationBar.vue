<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import { ref, toRefs, type Ref } from 'vue';

  interface Tree {
    id?:string,
    label: string,
    routerTo?: string,
    children?: Tree[]
  }
  
  const data: Tree[] = [
    /* 根节点1 */
    {
      label: 'Web',
      children: [
        {
          label: '基础',
          children: [
            {
              label: 'HTML5',
              routerTo: 'html-study'
            },
            {
              label: 'CSS3',
              routerTo: 'css-study'
            },
            {
              label: 'JavaScript',
              routerTo: 'javascript-study'
            },
          ]
        },
        {
          label: '进阶',
          children: [
            {
              label: 'HTML5新标签',
              routerTo: 'html-tag-study'
            },
            {
              label: 'CSS预处理器',
              children: [
                {
                  label: '移动端CSS',
                  routerTo: 'mcss-study'
                },
                {
                  label: 'less',
                  routerTo: 'less-study'
                },
                {
                  label: 'sass',
                  routerTo: 'sass-study'
                },
                {
                  label: 'stylus',
                  routerTo: 'stylus-study'
                }
              ]
            },
            {
              label: 'ES6与JS前端工具',
              children: [
                {
                  label: 'ES6',
                  routerTo: 'es6-study'
                },
                {
                  label: 'NodeJS',
                  routerTo: 'nodejs-study'
                },
                {
                  label: 'webpack',
                  routerTo: 'webpack-study'
                },
                {
                  label: 'vite',
                  routerTo: 'vite-study'
                }
              ]
            },
          ]
        },
        {
          label: '前端再出发',
          children: [
            {
              label: 'React',
              routerTo: 'react-study'
            },
            {
              label: 'Angular',
              routerTo:'angular-study'
            },
            {
              label: 'Vue',
              children: [
                {
                  label: 'vue2',
                  routerTo:'vue2-study'
                },
                {
                  label: 'vue-router3',
                  routerTo: 'vue-router3-study'
                },
                {
                  label: 'vue3',
                  routerTo: 'vue3-study'
                },
                {
                  label: 'vue-router4',
                  routerTo: 'vue-router4-study'
                }
              ]
            },
            {
              label: '微信小程序',
              routerTo: 'miniprogram-study'
            },
            {
              label: '组件库',
              children:[
                {
                  label: 'Bootstrap',
                  routerTo: 'bootstrap-study'
                },
                {
                  label: 'Layui',
                  routerTo: 'layui-study'
                },
                {
                  label:'ElementUI',
                  routerTo: 'element-ui-study'
                },
                {
                  label:'Mint UI',
                  routerTo: 'mint-ui-study'
                },
                {
                  label:'uni-app',
                  routerTo: 'uni-app-study'
                }
              ]
            }
            
          ]
        }
      ]
    },
    /* 根节点2 */
    {
      label: 'JavaSE',
      children: [
        {
          label: '基础语法',
          children: [
            {
              label: '四类八种数据类型',
              routerTo: 'java-basic-type-study'
            },
            {
              label: '引用类型',
              children: [
                {
                  label:'类与对象',
                  routerTo: 'class-and-object-study'
                },
                {
                  label:'接口',
                  routerTo:'interface-study'
                },
                {
                  label:'对象构造',
                  routerTo: 'create-object-study'
                },
                {
                  label:'String',
                  routerTo: 'string-study'
                },
                {
                  label:'封装',
                  routerTo:'encapsulation-study'
                },
                {
                  label:'继承',
                  routerTo:'extend-study'
                },
                {
                  label:'多态',
                  routerTo:'mixins-study'
                },
                {
                  label:'不可变类',
                  routerTo:'final-class-study'
                },
                {
                  label:'单例类',
                  routerTo:'singleton-class-study'
                },
                {
                  label:'JDK8后的接口',
                  routerTo: 'newInterface-study'
                },
                {
                  label: 'JDK集合框架',
                  routerTo: 'collection-study'
                },
                {
                  label: 'Java中的Lambda',
                  routerTo: 'java-lambda-study'
                }
              ]
            },
            {
              label:'文件与IO',
              children:[
                {
                  label: 'File对象',
                  routerTo:'file-study'
                },
                {
                  label: 'IO流',
                  children: [
                    {
                      label: '字节流',
                      routerTo: 'byte-steam-study'
                    },
                    {
                      label: '字符流',
                      routerTo: 'character-steam-study'
                    },
                  ]
                },
                {
                  label:'NIO',
                  routerTo:'nio-study'
                },
                {
                  label:'stream操作',
                  routerTo: 'stream-study'
                }
              ]
            },
            {
              label:'多线程',
              // todo
              // children:[]
              routerTo:'thread-study'
            },
            {
              label:'Net编程',
              children:[
                {
                  label:'套接字与C/S交互',
                  routerTo:'socket-study'
                },
                {
                  label:'HTTPClient',
                  routerTo:'http-client-study'
                }
              ]
            }
          ]
        }
      ]
    },
    /* 根节点3 */
    {
      label: 'JavaEE',
      children: [
        {
          label: 'JavaEE',
          children: [
            {
              label: 'JavaEE',
              routerTo: 'javaee-study'
            },
            {
              label: 'JavaEE',
              routerTo: 'javaee-study'
            }
          ]
        }
      ]
    }
  ]

  // const treeData:Ref<Tree>[] = toRefs(data)

  /* 导航 */
  const router = useRouter()
  function handleNodeClick(node: Tree):void {
    // todo
    // router.push({
    //   name: node.routerTo
    // })
  }

  function showNode(node: any):void {
    // console.dir(node);
    console.log(node.isLeaf);
  }

</script>

<template>
  <div>
    <el-tree
      :data="data"
      class="bs-tree"
      node-key="label"
      accordion
      highlight-current
      @node-click="handleNodeClick"
    >
      <template #default="{node, data}">
        <div class="custom-tree-node">
          <span :class="{leaf:node.isLeaf}">
            <el-icon v-if="node.isLeaf">
              <Link />
            </el-icon>
            {{node.label}}
          </span>
        </div>
      </template>
    </el-tree>
  </div>
</template>

<style lang="css">
  .bs-tree {
    color: var(--perset-sika-brightyellow);
    background-color: var(--perset-sika-shallowpurple);
  }

  .el-tree-node__content:hover {
    background-color: #ffa635;
  }
  .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content {
    background-color: #ffa635;
  }


  .custom-tree-node {
    /* color: var(--bs-brightyellow); */
    /* color: var(--bs-whitepurple); */
    color: #18fda3;
  }

  .leaf {
    background-color: var();
  }
</style>