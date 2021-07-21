import { mount, shallowMount, RouterLinkStub } from '@vue/test-utils'
import ListItem from '@/components/ListItem.vue'

describe('[UT] Should render list item', () => {
  test('Load list item', () => {
    const wrapper = mount(ListItem)
    expect(wrapper.vm).toBeTruthy()
  })
})

describe('[UT] Should recieve movie object', () => {
  const wrapper = shallowMount(ListItem, {
    stubs: {
      NuxtLink: RouterLinkStub
    },
    propsData: {
      movie: {
        adult: false,
        backdrop_path: '/3RMbkXS4ocMmoJyAD3ZsWbm32Kx.jpg',
        genre_ids: [28, 12, 18, 878, 53],
        id: 615658,
        original_language: 'en',
        original_title: 'Awake',
        overview: 'After a sudden global event wipes out all electronics and takes away humankind’s ability to sleep, chaos quickly begins to consume the world. Only Jill, an ex-soldier with a troubled past, may hold the key to a cure in the form of her own daughter. The question is, can Jill safely deliver her daughter and save the world before she herself loses her mind.',
        popularity: 1874.005,
        poster_path: '/1OTa0PfX2axMY8f9tFRSzESUgkC.jpg',
        release_date: '2021-06-09',
        title: 'Awake',
        video: false,
        vote_average: 6.1,
        vote_count: 515
      }
    }
  })

  it('checks the movie', () => {
    expect(wrapper.props().movie).toBeTruthy()
  })
})
