import React, { useContext } from 'react'
import MainLayout from '../layouts/MainLayout'
import Header from '../materialDashboard/layouts/Topbar'
import Sidebar from '../materialDashboard/layouts/Sidebar'
import TagsMain from '../organisms/Tags/TagsMain'
import { useGetTags } from '../../queries/tag'
import { WalletContext } from '../providers/WalletProvider'


const Tags = () => {
  // @ts-ignore
  const { address, canViewAdmin } = useContext(WalletContext)
  const {loading, tags} = useGetTags(theGraphClient, 0, 100)
  const main = loading ? 'loading' : <TagsMain tags={tags} />
  return (
    <MainLayout
      header={<Header />}
      sidebar={<Sidebar selectedAddress={address} canViewAdmin={canViewAdmin} />}
      main={main}
    />
  )
}

export default Tags

<template>
  <TmPage data-title="Network" class="page">
    <template>
      <NetworkList :networks="mainNetworks" section-title="Main Networks" />

      <NetworkList :networks="testNetworks" section-title="Test Networks" />

      <NetworkList
        :networks="comingSoon"
        :disabled="true"
        section-title="Coming Soon"
      />
    </template>
  </TmPage>
</template>

<script>
import { mapGetters } from "vuex"
import NetworkList from "./NetworkList"

import TmPage from "common/TmPage"

</script>
<style scoped>
.page {
  padding: 2rem;
  margin: 0 auto;
  max-width: 680px;
}

@media screen and (max-width: 767px) {
  .page {
    padding: 1rem;
  }
}
</style>
