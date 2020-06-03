<template>
  <div>
    <ul class="list-disc">
        <li v-for="ecard in $page.ecards.edges" :key="ecard.id">
            <g-link :to="ecard.node.path">
                {{ ecard.node.name }}
            </g-link>
        </li>
    </ul>
  </div>
</template>

<page-query>
query Ecards {
	ecards: allEcard {
    edges{
      node {
          id
        path
        name
        content
      }
    }
  }
}
</page-query>