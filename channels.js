let jwPlayerInstance = null,
  activeIndex = -1
const channels = [
    {
        number: 1,
        name: 'JUNGO TV PINOY',
        category: 'JungoTV',
        type: 'hls',
        url: 'https://jungotvstream.chanall.tv/jungotv/jungopinoytv/stream.m3u8',
    },
    {
        number: 2,
        name: 'SCREAMFLIX',
        category: 'JungoTV',
        type: 'hls',
        url: 'https://jungotvstream.chanall.tv/jungotv/screamflix/stream.m3u8',
    },
    {
        number: 3,
        name: 'FRONT ROW CHANNEL',
        category: 'JungoTV',
        type: 'hls',
        url: 'https://jungotvstream.chanall.tv/jungotv/frontrow/stream.m3u8',
    },
    {
        number: 4,
        name: 'HALLYPOP',
        category: 'JungoTV',
        type: 'hls',
        url: 'https://jungotvstream.chanall.tv/jungotv/hallypop/stream.m3u8',
    },
    {
        number: 5,
        name: 'AWSN',
        category: 'JungoTV',
        type: 'hls',
        url: 'https://amg02188-amg02188c2-jungotv-northamerica-5717.playouts.now.amagi.tv/playlist1080p.m3u8',
    },
    {
        number: 6,
        name: 'COMBAT GO',
        category: 'JungoTV',
        type: 'hls',
        url: 'https://jungotvstream.chanall.tv/jungotv/combatgo/stream.m3u8',
    },
    {
        number: 7,
        name: 'ANC',
        category: 'iWantTFC',
        type: 'mpd',
        url: 'https://abslive.akamaized.net/dash/live/2027618/anc-ph3/manifest.mpd',
        drm:
        {
            clearkey: {keyId: 'b6d6e536f8fa4d8b93627af0128cf00d',key: 'e73c8dcfdea374ae576ced342f6c73a2',},
        },
    },
    {
        number: 8,
        name: 'CINEMA ONE',
        category: 'iWantTFC',
        type: 'mpd',
        url: 'https://abslive.akamaized.net/dash/live/2027618/c1ph/manifest.mpd',
        drm:
        {
            clearkey: {keyId: '55eddd1e157e4c3b830866e4679e7032',key: '525030e984567ba8df0af80660952368',},
        },
    },
    {
        number: 9,
        name: 'CINE MO!',
        category: 'iWantTFC',
        type: 'mpd',
        url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-cinemo-dash-abscbnono/516e9acd-cea2-417a-8d53-b67fa05b75c1/index.mpd',
        drm:
        {
            clearkey: {keyId: 'aa8aebe35ccc4541b7ce6292efcb1bfb',key: 'f06b6031a3604cc6708c14d83f1a1b27',},
        },
    },
    {
        number: 10,
        name: 'Kapamilya Channel',
        category: 'iWantTFC',
        type: 'mpd',
        url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-kapcha-dash-abscbnono/cf9ed087-2aa4-4118-941c-13910a4c51bc/index.mpd',
        drm:
        {
            clearkey: {keyId: 'bd17afb5dc9648a39be79ee3634dd4b8',key: 'b475084a1a58857e18480e30fbb0e544',},
        },
    },
    {
        number: 11,
        name: 'Kapatid Channel',
        category: 'iWantTFC',
        type: 'hls',
        url: 'https://cdnsc01.mediaquest.com.ph/bpk-token/2ab@vir3vrwhfwxg03nlufyqic1ldnhkmpnuvogyhkda/bpk-tv/kapatid_hd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '045d103180f64562b1db7c932741c3ba',key: 'c3380548b9075c767a6ae2006ef4bff8',},
        },
    },
    {
        number: 12,
        name: 'MYX',
        category: 'iWantTFC',
        type: 'mpd',
        url: 'https://d24xfhmhdb6r0q.cloudfront.net/out/v1/e897a7b6414a46019818ee9f2c081c4f/index.mpd',
        drm:
        {
            clearkey: {keyId: 'f40a52a3ac9b4702bdd5b735d910fd2f',key: '5ce1bc7f06b494c276252b4d13c90e51',},
        },
    },
    {
        number: 13,
        name: 'TELERADYO SERBISYO',
        category: 'iWantTFC',
        type: 'mpd',
        url: 'https://d14c00opfjb50c.cloudfront.net/out/v1/0fa4eb67579d41cca4ed146c93aa855f/index.mpd',
        drm:
        {
            clearkey: {keyId: '47c093e0c9fd4f80839a0337da3dd876',key: '50547394045b3d047dc7d92f57b5fb33',},
        },
    },
    {
        number: 14,
        name: 'TFC ASIA',
        category: 'iWantTFC',
        type: 'mpd',
        url: 'https://d1facupi3cod3q.cloudfront.net/out/v1/e3633f8591e248b0af1af15a474bfa4a/index.mpd',
        drm:
        {
            clearkey: {keyId: '9568cc84e1d944f38eac304517eab6fd',key: 'f12142af8f39b3bab79d3679d3665ebe',},
        },
    },
    {
        number: 15,
        name: 'TFC NORTH AMERICA',
        category: 'iWantTFC',
        type: 'mpd',
        url: 'https://du44jtt5g7upx.cloudfront.net/out/v1/a3b708325c1d43dc9549c262526a6945/index.mpd',
        drm:
        {
            clearkey: {keyId: '9c700e42ffc64d9b82d94cf57a2302fa',key: '44d038e1fdcaefb3e75ffb4e42537279',},
        },
    },
    {
        number: 16,
        name: 'A2Z',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_a2z/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '3f6d8a2c1b7e4c9f8d52a7e1b0c6f93d',key: '4019f9269b9054a2b9e257b114ebbaf2',},
        },
    },
    {
        number: 17,
        name: 'ABC AUSTRALIA',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/abc_aus/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'd6f1a8c29b7e4d5a8f332c1e9d7b6a90',key: '790bd17b9e623e832003a993a2de1d87',},
        },
    },
    {
        number: 18,
        name: 'AL JAZEERA',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/dr_aljazeera/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '7f3d900a04d84492b31fe9f79ac614e3',key: 'd33ff14f50beac42969385583294b8f2',},
        },
    },
    {
        number: 19,
        name: 'ANIMAL PLANET',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_animal_planet_sd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '436b69f987924fcbbc06d40a69c2799a',key: 'c63d5b0d7e52335b61aeba4f6537d54d',},
        },
    },
    {
        number: 20,
        name: 'ARIRANG KOREA',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/arirang_sd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '13815d0fa026441ea7662b0c9de00bcf',key: '2d99a55743677c3879a068dd9c92f824',},
        },
    },
    {
        number: 21,
        name: 'ASIAN FOOD NETWORK',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/asianfoodnetwork_sd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '1619db30b9ed42019abb760a0a3b5e7f',key: '5921e47fb290ae263291b851c0b4b6e4',},
        },
    },
    {
        number: 22,
        name: 'AXN',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_axn_sd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '8a6c2f1e9d7b4c5aa1f04d2b7e9c1f88',key: '05e6bfa4b6805c46b772f35326b26b36',},
        },
    },
    {
        number: 23,
        name: 'BBC EARTH',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_bbcearth_hd1/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '34ce95b60c424e169619816c5181aded',key: '0e2a2117d705613542618f58bf26fc8e',},
        },
    },
    {
        number: 24,
        name: 'BBC LIFESTYLE',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_bbclifestyle/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '34880f56627c11ee8c990242ac120002',key: 'c23677c829bb244b79a3dc09ffd88ca0',},
        },
    },
    {
        number: 25,
        name: 'BBC WORLD NEWS',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/bbcworld_news_sd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'f59650be475e4c34a844d4e2062f71f3',key: '119639e849ddee96c4cec2f2b6b09b40',},
        },
    },
    {
        number: 26,
        name: 'BILYONARYO NEWS CHANNEL',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/bilyonaryoch/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '227ffaf09bec4a889e0e0988704d52a2',key: 'b2d0dce5c486891997c1c92ddaca2cd2',},
        },
    },
    {
        number: 27,
        name: 'BLOOMBERG',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/bloomberg_sd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '3b8e6d1f2c9a4f7d9a556c1e7b2d8f90',key: '09f0bd803966c4befbd239cfa75efe23',},
        },
    },
    {
        number: 28,
        name: 'BUKO CHANNEL',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_buko_sd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'd273c085f2ab4a248e7bfc375229007d',key: '7932354c3a84f7fc1b80efa6bcea0615',},
        },
    },
    {
        number: 29,
        name: 'CARTOON NETWORK',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cartoonnetworkhd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'a2d1f552ff9541558b3296b5a932136b',key: 'cdd48fa884dc0c3a3f85aeebca13d444',},
        },
    },
    {
        number: 30,
        name: 'CCTV 4',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/dr_cctv4/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'b83566836c0d4216b7107bd7b8399366',key: '32d50635bfd05fbf8189a0e3f6c8db09',},
        },
    },
    {
        number: 31,
        name: 'CELESTIAL MOVIES PINOY',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/celmovie_pinoy_sd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '0f8537d8412b11edb8780242ac120002',key: '2ffd7230416150fd5196fd7ea71c36f3',},
        },
    },
    {
        number: 32,
        name: 'CGTN ENGLISH',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cgtn/default/index.mpd',
        drm:
        {clearkey: {keyId: '0f854ee4412b11edb8780242ac120002',key: '9f2c82a74e727deadbda389e18798d55',},
        },
    },
    {
        number: 33,
        name: 'CINEMAX',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_cinemax/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'b207c44332844523a3a3b0469e5652d7',key: 'fe71aea346db08f8c6fbf0592209f955',},
        },
    },
    {
        number: 34,
        name: 'CNA',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/channelnewsasia/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'b259df9987364dd3b778aa5d42cb9acd',key: '753e3dba96ab467e468269e7e33fb813',},
        },
    },
    {
        number: 35,
        name: 'CRIME+INVESTIGATION',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/crime_invest/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '21e2843b561c4248b8ea487986a16d33',key: 'db6bb638ccdfc1ad1a3e98d728486801',},
        },
    },
    {
        number: 36,
        name: 'DEPED TV',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/depedch_sd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '0f853706412b11edb8780242ac120002',key: '2157d6529d80a760f60a8b5350dbc4df',},
        },
    },
    {
        number: 37,
        name: 'DISCOVERY',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/discovery/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'd9ac48f5131641a789328257e778ad3a',key: 'b6e67c37239901980c6e37e0607ceee6',},
        },
    },
    {
        number: 38,
        name: 'DREAMWORKS CHANNEL',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_dreamworks_hd1/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '7b1e9c4d5a2f4d8c9f106d3a8b2c1e77',key: '8b2904224c6cee13d2d4e06c0a3b2887',},
        },
    },
    {
        number: 39,
        name: 'DREAMWORKS (TAGALIZED)',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_dreamworktag/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '564b3b1c781043c19242c66e348699c5',key: 'd3ad27d7fe1f14fb1a2cd5688549fbab',},
        },
    },
    {
        number: 40,
        name: 'FASHION TV',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/fashiontvhd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '9d7c1f2a6b4e4a8d8f33c1e5b7d2a960',key: '3a18c535c52db7c79823f59036a9d195',},
        },
    },
    {
        number: 41,
        name: 'FOOD NETWORK',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_foodnetwork_hd1/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '4a9d2f7c1e6b4c8d8a55d7b1e3f0c926',key: '2e62531bdb450480a18197b14f4ebc77',},
        },
    },
    {
        number: 42,
        name: 'FRANCE 24',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/france24/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '257f9fdeb39d41bdb226c2ae1fbdaeb6',key: 'e80ead0f4f9d6038ab34f332713ceaa5',},
        },
    },
    {
        number: 43,
        name: 'GLOBAL TREKKER',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/globaltrekker/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'b7a6c5d23f1e4a9d8c721e5d9f4a6b13',key: '63ca9ad0d88fccb8c667b028f47287ba',},
        },
    },
    {
        number: 44,
        name: 'HBO HD',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_hbohd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'c2b7a1e95d4f4c3a8e617f9d0a2b6c18',key: '27fca1ab042998b0c2f058b0764d7ed4',},
        },
    },
    {
        number: 45,
        name: 'HBO FAMILY',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_hbofam/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '872910c843294319800d85f9a0940607',key: 'f79fd895b79c590708cf5e8b5c6263be',},
        },
    },
    {
        number: 46,
        name: 'HBO HITS',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_hbohits/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'b04ae8017b5b4601a5a0c9060f6d5b7d',key: 'a8795f3bdb8a4778b7e888ee484cc7a1',},
        },
    },
    {
        number: 47,
        name: 'HBO SIGNATURE',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_hbosign/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'a06ca6c275744151895762e0346380f5',key: '559da1b63eec77b5a942018f14d3f56f',},
        },
    },
    {
        number: 48,
        name: 'HGTV HD',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/hgtv_hd1/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'f1e8c2d97a3b4f5d8c669d1a2b7e4c30',key: '03aaa7dcf893e6b934aeb3c46f9df5b9',},
        },
    },
    {
        number: 49,
        name: 'HISTORY HD',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/dr_historyhd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'a7724b7ca2604c33bb2e963a0319968a',key: '6f97e3e2eb2bade626e0281ec01d3675',},
        },
    },
    {
        number: 50,
        name: 'HITS HD',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/hits_hd1/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '6d2f8a1c9b5e4c7da1f03e7b9d6c2a55',key: '37c9835795779f8d848a6119d3270c69',},
        },
    },
    {
        number: 51,
        name: 'HITS MOVIES',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/dr_hitsmovies/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '2c8a5f1e7b9d4c6a9e55f1d7b2a8c360',key: 'c9f622dff27e9e1c1f78617ba3b81a62',},
        },
    },
    {
        number: 52,
        name: 'HITS NOW',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_hitsnow/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'f9c3d6b18a2e4d7f9e453b1a8c6d2f70',key: 'ce8874347ec428c624558dcdc3575dd4',},
        },
    },
    {
        number: 53,
        name: 'IBC 13',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/ibc13_sd_new/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '16ecd238c0394592b8d3559c06b1faf5',key: '05b47ae3be1368912ebe28f87480fc84',},
        },
    },
    {
        number: 54,
        name: 'KBS WORLD',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/kbsworld/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '22ff2347107e4871aa423bea9c2bd363',key: 'c6e7ba2f48b3a3b8269e8bc360e60404',},
        },
    },
    {
        number: 55,
        name: 'KIX',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/kix_hd1/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'c9d4b7a18e2f4d6c9a103f5b7e1c2d88',key: '7f3139092bf87d8aa51ee40e6294d376',},
        },
    },
    {
        number: 56,
        name: 'KNOWLEDGE CHANNEL',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/knowledge_channel/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'c7d2b1e94f8a4d6c8a106b3d1f9c2e55',key: '2052f6b844aa53144bb32f0e41295106',},
        },
    },
    {
        number: 57,
        name: 'LIFETIME',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/dr_lifetime/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'cf861d26e7834166807c324d57df5119',key: '64a81e30f6e5b7547e3516bbf8c647d0',},
        },
    },
    {
        number: 58,
        name: 'LOTUS MACAU',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/lotusmacau_prd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '60dc692e64ea443a8fb5ac186c865a9b',key: '01bdbe22d59b2a4504b53adc2f606cc1',},
        },
    },
    {
        number: 59,
        name: 'MOONBUG KIDS',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_moonbug_kids_sd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '0bf00921bec94a65a124fba1ef52b1cd',key: '0f1488487cbe05e2badc3db53ae0f29f',},
        },
    },
    {
        number: 60,
        name: 'MPTV',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_mptv/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '6aab8f40536f4ea98e7c97b8f3aa7d4e',key: '139aa5a55ade471faaddacc4f4de8807',},
        },
    },
    {
        number: 61,
        name: 'NBA TV PHILIPPINES',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cgnl_nba/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'd1f8a0c97b3d4e529a6f2c4b8d7e1f90',key: '58ab331d14b66bf31aca4284e0a3e536',},
        },
    },
    {
        number: 62,
        name: 'NBA TV PHILIPPINES (PL)',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/pl_nba/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'f36eed9e95f140fabbc88a08abbeafff',key: '0125600d0eb13359c28bdab4a2ebe75a',},
        },
    },
    {
        number: 63,
        name: 'NHK WORLD JAPAN',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/dr_nhk_japan/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '3d6e9d4de7d7449aadd846b7a684e564',key: '0800fff80980f47f7ac6bc60b361b0cf',},
        },
    },
    {
        number: 64,
        name: 'NICK JR.',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_nickjr/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'bab5c11178b646749fbae87962bf5113',key: '0ac679aad3b9d619ac39ad634ec76bc8',},
        },
    },
    {
        number: 65,
        name: 'NICKELODEON',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/dr_nickelodeon/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '9ce58f37576b416381b6514a809bfd8b',key: 'f0fbb758cdeeaddfa3eae538856b4d72',},
        },
    },
    {
        number: 66,
        name: 'ONE NEWS',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/onenews_hd1/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '2e6a9d7c1f4b4c8a8d33c7b1f0a5e924',key: '4c71e178d090332fbfe72e023b59f6d2',},
        },
    },
    {
        number: 67,
        name: 'ONE PH',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/oneph_sd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'b1c7e9d24f8a4d6c9e337a2f1c5b8d60',key: '8ff2e524cc1e028f2a4d4925e860c796',},
        },
    },
    {
        number: 68,
        name: 'ONE SPORTS',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_onesports_hd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '53c3bf2eba574f639aa21f2d4409ff11',key: '3de28411cf08a64ea935b9578f6d0edd',},
        },
    },
    {
        number: 69,
        name: 'ONE SPORTS+',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_onesportsplus_hd1/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'f00bd0122a8a4da1a49ea6c49f7098ad',key: 'a4079f3667ba4c2bcfdeb13e45a6e9c6',},
        },
    },
    {
        number: 70,
        name: 'PBA RUSH',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_pbarush_hd1/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'd7f1a9c36b2e4f8d9a441c5e7b2d8f60',key: 'fb83c86f600ab945e7e9afed8376eb1e',},
        },
    },
    {
        number: 71,
        name: 'PBO',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/pbo_sd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'dcbdaaa6662d4188bdf97f9f0ca5e830',key: '31e752b441bd2972f2b98a4b1bc1c7a1',},
        },
    },
    {
        number: 72,
        name: 'PL SDI 1',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/pl_sdi1/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'a913faeecaac4813a55240bea0c68858',key: '05b7d7eaba8d6410dbe234336d9b235a',},
        },
    },
    {
        number: 73,
        name: 'PL SDI 2',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/pl_sdi2/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '2f3056cac18d4e31a59de39767042b03',key: '83728946b898141ae411572f9f5fce0d',},
        },
    },
    {
        number: 74,
        name: 'PL SDI 3',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/pl_sdi3/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '0c16d5962a22494db502b3453f891208',key: 'acaed175b981b34ae9b5cb0130506854',},
        },
    },
    {
        number: 75,
        name: 'PL SDI 4',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/pl_sdi4/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'c3050cba95c945418efa3aedbc69cff7',key: '988e7fade0828273472e24545d0cfa4c',},
        },
    },
    {
        number: 76,
        name: 'PL SDI 5',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/pl_sdi5/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'eecc6d7ac3df439fb2b73fb38007cb82',key: '826c341a6fef4518cefd27ec85e8b274',},
        },
    },
    {
        number: 77,
        name: 'PL SDI 6',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/pl_sdi6/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '02d5f086706e407e9343c040ac7fb5b8',key: '9d7e088bf7fffc9297ab3a02f0ce9a72',},
        },
    },
    {
        number: 78,
        name: 'PL SDI 7',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/pl_sdi7/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '40bed7f7948e4e5792982cf5b7ee4d78',key: '1fbfd2e3be51aae857f2f24306e5fc41',},
        },
    },
    {
        number: 79,
        name: 'PL SDI 8',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/pl_sdi8/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '5a8dbf3b9c2c43079a40fb5d0068f9ef',key: '1778ac6e22527ee2efd6886d8d509c2d',},
        },
    },
    {
        number: 80,
        name: 'PL SDI 9',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/pl_sdi9/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '1c7b9a2af9ad4076b155f06269b6adc2',key: 'ed6a8b11738cd27c0bee2d9e3fee178a',},
        },
    },
    {
        number: 81,
        name: 'PL SDI 10',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/pl_sdi10/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '63055a8904644407a64a57874703f71e',key: '0fd611777d37a7ff8afce19d9cee2e91',},
        },
    },
    {
        number: 82,
        name: 'SMART SDI 7',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/smart_sdi7/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '0f873c2c412b11edb8780242ac120002',key: '9c1f27adc2a2dd23ce415e8563c07af6',},
        },
    },
    {
        number: 83,
        name: 'SMART SDI 8',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/smart_sdi8/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '50ea84d79773464192071d6fc058cba1',key: '0b1642e0a661a780e74835fe765e1319',},
        },
    },
    {
        number: 84,
        name: 'SMART SDI 9',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/smart_sdi9/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'd2a24c65b3734565af71a1c3a9bbbf69',key: '552351880bd0eb97f85c8aeccd88ffa5',},
        },
    },
    {
        number: 85,
        name: 'PPV SD 197',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/ppvsd197/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '8ad18258a9814d60a67efc6ec9fb3cbd',key: '7ce6edd4bcf1510583c7739ac8f08e79',},
        },
    },
    {
        number: 86,
        name: 'PTV',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_ptv4_sd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '71a130a851b9484bb47141c8966fb4a3',key: 'ad1f003b4f0b31b75ea4593844435600',},
        },
    },
    {
        number: 87,
        name: 'ROCK ACTION',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/dr_rockextreme/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '0f852fb8412b11edb8780242ac120002',key: '4cbc004d8c444f9f996db42059ce8178',},
        },
    },
    {
        number: 88,
        name: 'ROCK ENTERTAINMENT',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/dr_rockentertainment/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'e4ee0cf8ca9746f99af402ca6eed8dc7',key: 'be2a096403346bc1d0bb0f812822bb62',},
        },
    },
    {
        number: 89,
        name: 'RPTV',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cnn_rptv_prod_hd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '1917f4caf2364e6d9b1507326a85ead6',key: 'a1340a251a5aa63a9b0ea5d9d7f67595',},
        },
    },
    {
        number: 90,
        name: 'SARI-SARI',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_sarisari/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '0a7ab3612f434335aa6e895016d8cd2d',key: 'b21654621230ae21714a5cab52daeb9d',},
        },
    },
    {
        number: 91,
        name: 'SPOTV',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_spotvhd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'ec7ee27d83764e4b845c48cca31c8eef',key: '9c0e4191203fccb0fde34ee29999129e',},
        },
    },
    {
        number: 92,
        name: 'SPOTV 2',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/dr_spotv2hd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '7eea72d6075245a99ee3255603d58853',key: '6848ef60575579bf4d415db1032153ed',},
        },
    },
    {
        number: 93,
        name: 'TAP ACTION FLIX',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_tapactionflix_hd1/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'bee1066160c0424696d9bf99ca0645e3',key: 'f5b72bf3b89b9848de5616f37de040b7',},
        },
    },
    {
        number: 94,
        name: 'TAP MOVIES',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_tapmovies_hd1/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '71cbdf02b595468bb77398222e1ade09',key: 'c3f2aa420b8908ab8761571c01899460',},
        },
    },
    {
        number: 95,
        name: 'TAP SPORTS',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/dr_tapsports/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'eabd2d95c89e42f2b0b0b40ce4179ea0',key: '0e7e35a07e2c12822316c0dc4873903f',},
        },
    },
    {
        number: 96,
        name: 'TAP TV',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_taptv_sd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'f6804251e90b4966889b7df94fdc621e',key: '55c3c014f2bd12d6bd62349658f24566',},
        },
    },
    {
        number: 97,
        name: 'THRILL',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_thrill_sd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '928114ffb2394d14b5585258f70ed183',key: 'a82edc340bc73447bac16cdfed0a4c62',},
        },
    },
    {
        number: 98,
        name: 'TMC',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_tagalogmovie/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '96701d297d1241e492d41c397631d857',key: 'ca2931211c1a261f082a3a2c4fd9f91b',},
        },
    },
    {
        number: 99,
        name: 'TRAVEL CHANNEL',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/travel_channel_sd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'f3047fc13d454dacb6db4207ee79d3d3',key: 'bdbd38748f51fc26932e96c9a2020839',},
        },
    },
    {
        number: 100,
        name: 'TRUE FM',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/truefm_tv/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'a4e2b9d61c754f3a8d109b6c2f1e7a55',key: '1d8d975f0bc2ed90eda138bd31f173f4',},
        },
    },
    {
        number: 101,
        name: 'TV MARIA',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/tvmaria_prd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'fa3998b9a4de40659725ebc5151250d6',key: '998f1294b122bbf1a96c1ddc0cbb229f',},
        },
    },
    {
        number: 102,
        name: 'TV5 HD',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/tv5_hd/default1/index.mpd',
        drm:
        {
            clearkey: {keyId: '2615129ef2c846a9bbd43a641c7303ef',key: '07c7f996b1734ea288641a68e1cfdc4d',},
        },
    },
    {
        number: 103,
        name: 'TV5 MONDE',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/dr_tv5_monde/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'fba5a720b4a541b286552899ba86e38b',key: 'f63fa50423148bfcbaa58c91dfcffd0e',},
        },
    },
    {
        number: 104,
        name: 'TVN PREMIUM',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_tvnpre/default/index.mpd',
        drm:
        {
            clearkey: {keyId: 'e1bde543e8a140b38d3f84ace746553e',key: 'b712c4ec307300043333a6899a402c10',},
        },
    },
    {
        number: 105,
        name: 'TVN MOVIES PINOY',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_tvnmovie/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '2e53f8d8a5e94bca8f9a1e16ce67df33',key: '3471b2464b5c7b033a03bb8307d9fa35',},
        },
    },
    {
        number: 106,
        name: 'TVUP',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/tvup_prd/default1/index.mpd',
        drm:
        {
            clearkey: {keyId: '83e813ccd4ca4837afd611037af02f63',key: 'a97c515dbcb5dcbc432bbd09d15afd41',},
        },
    },
    {
        number: 107,
        name: 'UAAP VARSITY CHANNEL',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/cg_uaap_cplay_sd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '95588338ee37423e99358a6d431324b9',key: '6e0f50a12f36599a55073868f814e81e',},
        },
    },
    {
        number: 108,
        name: 'VIVA CINEMA',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://ucdn.mediaquest.com.ph/bpk-tv/viva_sd/default/index.mpd',
        drm:
        {
            clearkey: {keyId: '07aa813bf2c147748046edd930f7736e',key: '3bd6688b8b44e96201e753224adfc8fb',},
        },
    },
    {
        number: 109,
        name: 'WARNER TV',
        category: 'Cignal',
        type: 'hls',
        url: 'https://cdn4.skygo.mn/live/disk1/Warner/HLSv3-FTA/Warner.m3u8',
    },
    {
        number: 110,
        name: 'COME DINE WITH ME',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg00654-itv-amg00654c2-samsung-ph-4583.playouts.now.amagi.tv/playlist.m3u8',
    },
    {
        number: 111,
        name: 'DEAL OR NO DEAL',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg00627-amg00627c21-samsung-ph-5284.playouts.now.amagi.tv/playlist/amg00627-banijayfast-dealornodealrow-samsungph/playlist.m3u8',
    },
    {
        number: 112,
        name: 'DONT TELL THE BRIDE',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg00426-lds-amg00426c15-samsung-ph-4614.playouts.now.amagi.tv/playlist.m3u8',
    },
    {
        number: 113,
        name: 'EURONEWS WORLD',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg00882-amg00882c2-samsung-ph-4542.playouts.now.amagi.tv/playlist.m3u8',
    },
    {
        number: 114,
        name: 'FRANCE 24',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg00106-amg00106c1-samsung-ph-4550.playouts.now.amagi.tv/playlist.m3u8',
    },
    {
        number: 115,
        name: 'FEAR FACTOR',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg00627-amg00627c2-samsung-ph-5298.playouts.now.amagi.tv/playlist/amg00627-banijayfast-fearfactor-samsungph/playlist.m3u8',
    },
    {
        number: 116,
        name: 'FREE MOVIES',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg01553-amg01553c2-samsung-ph-7163.playouts.now.amagi.tv/playlist.m3u8',
    },
    {
        number: 117,
        name: 'HARDCORE PAWN',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg00627-amg00627c8-samsung-ph-5278.playouts.now.amagi.tv/playlist/amg00627-banijayfast-hardcorepawn-samsungph/playlist.m3u8',
    },
    {
        number: 118,
        name: 'HIGHWAY THRU HELL',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg00627-amg00627c15-samsung-ph-4559.playouts.now.amagi.tv/playlist/amg00627-banijayfast-highwaythruhell-samsungph/playlist.m3u8',
    },
    {
        number: 119,
        name: 'HISTORY',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg00426-lds-amg00426c2-samsung-ph-4623.playouts.now.amagi.tv/playlist.m3u8',
    },
    {
        number: 120,
        name: 'INFAST',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg00861-amg00861c8-samsung-ph-4629.playouts.now.amagi.tv/playlist.m3u8',
    },
    {
        number: 121,
        name: 'INTROUBLE',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg00861-amg00861c6-samsung-ph-4635.playouts.now.amagi.tv/playlist.m3u8',
    },
    {
        number: 122,
        name: 'INTRAVEL',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg00861-amg00861c22-samsung-ph-5411.playouts.now.amagi.tv/playlist.m3u8',
    },
    {
        number: 123,
        name: 'INWILD',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg00861-amg00861c7-samsung-ph-4632.playouts.now.amagi.tv/playlist.m3u8',
    },
    {
        number: 124,
        name: 'JELLY JAMMY WORLD',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg01553-amg01553c1-samsung-ph-7144.playouts.now.amagi.tv/playlist.m3u8',
    },
    {
        number: 125,
        name: 'LEADSTORY BREAKING NEWS',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg02703-amg02703c17-samsung-ph-4546.playouts.now.amagi.tv/playlist.m3u8',
    },
    {
        number: 126,
        name: 'LETTERMAN TV',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://d2q9uitg1qpepj.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-843x0rz51uzj6/playlist.m3u8',
    },
    {
        number: 127,
        name: 'MYTHBUSTERS',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg00627-amg00627c14-samsung-ph-4556.playouts.now.amagi.tv/playlist/amg00627-banijayfast-mythbusters-samsungph/playlist.m3u8',
    },
    {
        number: 128,
        name: 'NOW 70S',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg01076-amg01076c1-samsung-ph-6994.playouts.now.amagi.tv/playlist.m3u8',
    },
    {
        number: 129,
        name: 'NOW 80S',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg01076-amg01076c2-samsung-ph-6998.playouts.now.amagi.tv/playlist.m3u8',
    },
    {
        number: 130,
        name: 'PET CLUB TV',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg01076-amg01076c10-samsung-ph-7605.playouts.now.amagi.tv/playlist.m3u8',
    },
    {
        number: 131,
        name: 'PULSE TV',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg01076-amg01076c8-samsung-ph-5639.playouts.now.amagi.tv/playlist.m3u8',
    },
    {
        number: 132,
        name: 'REAL CRIME',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg00426-lds-amg00426c16-samsung-ph-4620.playouts.now.amagi.tv/playlist.m3u8',
    },
    {
        number: 133,
        name: 'REAL WILD',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg00426-lds-amg00426c1-samsung-ph-4626.playouts.now.amagi.tv/playlist.m3u8',
    },
    {
        number: 134,
        name: 'RIVER MONSTERS BY ITV STUDIOS',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg00654-itv-amg00654c12-samsung-ph-4580.playouts.now.amagi.tv/playlist.m3u8',
    },
    {
        number: 135,
        name: 'SURVIVOR',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg00627-amg00627c16-samsung-ph-5303.playouts.now.amagi.tv/playlist/amg00627-banijayfast-survivor-samsungph/playlist.m3u8',
    },
    {
        number: 136,
        name: 'TENNIS+',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg01935-amg01935c1-amgplt0020.playout.now3.amagi.tv/playlist/amg01935-amg01935c1-amgplt0020/playlist.m3u8',
    },
    {
        number: 137,
        name: 'THE BIGGEST LOSER',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg00627-amg00627c4-samsung-ph-5275.playouts.now.amagi.tv/playlist/amg00627-banijayfast-thebiggestloser-samsungph/playlist.m3u8',
    },
    {
        number: 138,
        name: 'TRACE URBAN',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg01131-amg01131c1-samsung-ph-5310.playouts.now.amagi.tv/playlist.m3u8',
    },
    {
        number: 139,
        name: 'WIPEOUT XTRA',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg00627-amg00627c7-samsung-ph-5300.playouts.now.amagi.tv/playlist/amg00627-banijayfast-wipeoutxtra-samsungph/playlist.m3u8',
    },
    {
        number: 140,
        name: 'ZEE BOLLYMOVIES',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg17931-zee-amg17931c8-samsung-ph-6525.playouts.now.amagi.tv/playlist.m3u8',
    },
    {
        number: 141,
        name: 'ZEE ONE',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg17931-zee-amg17931c6-samsung-ph-6513.playouts.now.amagi.tv/playlist.m3u8',
    },
    {
        number: 142,
        name: 'ZEE SINE',
        category: 'SamsungTV',
        type: 'hls',
        url: 'https://amg17931-zee-amg17931c9-samsung-ph-6528.playouts.now.amagi.tv/playlist/amg17931-asiatvusaltdfast-zeesine-samsungph/playlist.m3u8',
    },
    {
        number: 143,
        name: 'GMA NETWORK (YT)',
        category: 'Yt Stream',
        type: 'hls',
        url: 'https://ytusn.ceephc.workers.dev/gmanetwork/master.m3u8',
    },
]

function setupChannelList() {
  const list = document.getElementById('channelList');
  const countDisplay = document.getElementById('channelCount');
  const searchValue = document.getElementById('searchInput').value.toLowerCase();
  const selectedCategory = document.getElementById('categoryFilter').value || 'all';

  list.innerHTML = '';
  let totalCount = 0;
  let visibleIndex = 0;

  channels.forEach((channel, originalIndex) => {
    const matchesCategory = selectedCategory === 'all' || channel.category === selectedCategory;
    const matchesSearch = channel.name.toLowerCase().includes(searchValue);

    if (matchesCategory && matchesSearch) {
      totalCount++;

      const displayNumber = originalIndex + 1;

      const listItem = document.createElement('li');
      listItem.tabIndex = 0;
      
      // Modified click handler to restart current channel
      listItem.onclick = () => {
        if (activeIndex === originalIndex) {
          // Force restart of current channel
          activeIndex = -1; // Reset to force reload
          loadChannel(originalIndex);
          showChannelInfo(originalIndex);
        } else {
          loadChannel(originalIndex);
          showChannelInfo(originalIndex);
        }
        scrollChannelToMiddle(originalIndex);
      };
      
      listItem.setAttribute('data-number', displayNumber);
      listItem.setAttribute('data-original-index', originalIndex);

      if (originalIndex === activeIndex) {
        listItem.classList.add('active');
        currentChannelIndex = originalIndex;
      }

      listItem.textContent = channel.name + ' ';

      list.appendChild(listItem);
    }
  });

  countDisplay.textContent = `Total: ${totalCount}/${channels.length}`;
      }
