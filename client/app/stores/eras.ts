// app/stores/eraslists.ts
// Setup Store de Pinia 3 — eraslists con Read y Create
import { defineStore } from 'pinia'
import type { Eraslist } from '~/shared/types'

export const useEraslistsStore = defineStore('playlists', () => {
  // ── STATE ──────────────────────────────────────────────────────────────────
  // Se almacenan todas las playlist
  const eraslists = ref<Eraslist[]>([])
  // Se almacena la playlist actualmente seleccionada (si hay alguna)
  const currentEraslist = ref<Eraslist | null>(null)
  // Indicador de carga para operaciones asíncronas relacionadas con eraslists
  const isLoading = ref(false)

  // ── GETTERS ────────────────────────────────────────────────────────────────
  // Devuelve el número total de eraslists almacenadas
  const totalEraslists = computed(() => eraslists.value.length)

  // ── ACTIONS ────────────────────────────────────────────────────────────────
  // Obtiene todas las eraslists desde el backend y las almacena en el estado
  async function fetchEraslists() {
    isLoading.value = true
    try {
      eraslists.value = await $fetch<Eraslist[]>('/api/eraslists')
    } catch (e) {
      console.error('[EraslistsStore] fetchEraslists:', e)
    } finally {
      isLoading.value = false
    }
  }

  /*
  async function fetchEraslistById(id: string): Promise<Eraslist | null> {
    try {
      const playlist = await $fetch<Eraslist>(`/api/eraslists/${id}`)
      currentEraslist.value = playlist
      return playlist
    } catch (e) {
      console.error('[EraslistsStore] fetchEraslistById:', e)
      return null
    }
  }*/

  /** Dado un playlist, obtiene los tracks correspondientes del store de tracks */
  /*function getTracksForEraslist(playlist: Eraslist, allTracks: Track[]): Track[] {
    return playlist.trackIds
      .map((id) => allTracks.find((t) => t.id === id))
      .filter((t): t is Track => !!t)
  }

  function setCurrentEraslist(playlist: Eraslist) {
    currentEraslist.value = playlist
  }*/

  // retorna el estado, getters y acciones para ser usados en los componentes y paginas
  return {
    eraslists,
    currentEraslist,
    isLoading,
    totalEraslists,
    fetchEraslists,
   // fetchEraslistById,
   // getTracksForEraslist,
   // setCurrentEraslist,
  }
})