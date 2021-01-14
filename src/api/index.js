// @ts-nocheck
import axios from 'axios';
import { DrupalJsonApiParams } from 'drupal-jsonapi-params';
const session = {
    jsonapi: {
        version: '1.0',
        meta: { links: { self: { href: 'http://jsonapi.org/format/1.0/' } } },
        parsed: true
    },
    data: [
        {
            type: 'node--session',
            id: '0a85dde5-a2c3-40a5-970a-b1b4a4eab95d',
            links: {
                describedby: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/resource/schema'
                },
                self: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/0a85dde5-a2c3-40a5-970a-b1b4a4eab95d?resourceVersion=id%3A6554'
                }
            },
            drupal_internal__nid: 6502,
            drupal_internal__vid: 6554,
            langcode: 'en',
            revision_timestamp: '2020-11-09T20:27:07+00:00',
            revision_log: null,
            status: true,
            title: 'Work Out with Dogpound',
            created: '2020-09-15T12:15:50+00:00',
            changed: '2020-11-09T20:28:42+00:00',
            promote: false,
            sticky: false,
            default_langcode: true,
            revision_translation_affected: true,
            metatag: null,
            path: { alias: null, pid: null, langcode: 'en' },
            publish_on: null,
            unpublish_on: null,
            published_at: '2020-11-09T20:27:07+00:00',
            field_private: false,
            field_short_summary: null,
            field_start_end: {
                value: '2020-10-14T01:00:00-07:00',
                end_value: '2020-10-14T01:45:00-07:00'
            },
            field_long_description: null,
            field_url: null,
            node_type: {
                type: 'node_type--node_type',
                id: '48c0aab1-f34f-40d6-ad34-7f8826b263e9'
            },
            revision_uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            field_event: {
                type: 'event--conference',
                id: '49a2e35a-e287-41d9-9301-45fc41da8f13',
                links: {
                    describedby: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/resource/schema'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13'
                    }
                },
                drupal_internal__id: 85,
                langcode: 'en',
                title: '2020 Milken Institute Global Conference',
                created: '2020-07-20T09:03:21+00:00',
                changed: '2020-11-09T21:05:06+00:00',
                default_langcode: true,
                metatag: null,
                path: {
                    alias: '/event/2020-milken-institute-global-conference',
                    pid: 1505,
                    langcode: 'en'
                },
                field_blurb: null,
                field_campaign_id: '70138000000qyBAAAY',
                field_campaign_name: '2020 Milken Institute Global Conference',
                field_campaign_owner: null,
                field_campaign_type: 'Event-GC: Private',
                field_campaign_type_public: 'Event-GC: Public Session',
                field_description: null,
                field_event_date: null,
                field_grid_event_id: 'gc20',
                field_meta_tags: null,
                field_name_short: '2020 Global Conference',
                field_published: false,
                field_registration_deadline: null,
                field_sequential_id: 0,
                field_social_network_links: [
                    {
                        key: 'Facebook',
                        description: '',
                        value: 'http://facebook.com/milkeninstitute'
                    },
                    {
                        key: 'Twitter',
                        description: '',
                        value: 'http://twitter.com/milkeninstitute'
                    },
                    {
                        key: 'LinkedIn',
                        description: '',
                        value: 'http://linkedin.com/company/milkeninstitute'
                    },
                    {
                        key: 'Instagram',
                        description: '',
                        value: 'http://instagram.com/milkeninstitute'
                    },
                    {
                        key: 'Flickr',
                        description: '',
                        value:
                            'http://www.cvent.com/events/2020-milken-institute-global-conference/event-summary-fc57edcc8848424a9fcb633998853402.aspx'
                    }
                ],
                field_speakers: null,
                event_type: {
                    type: 'event_type--event_type',
                    id: '1eac1538-d334-4e6a-a5ca-082336f6c4a9'
                },
                field_content_tabs: [
                    {
                        type: 'paragraph--paragraph_tab',
                        id: 'fe73322e-8a69-4166-ad71-f01f8fd4acf5',
                        meta: { target_revision_id: 2299 }
                    },
                    {
                        type: 'paragraph--paragraph_tab',
                        id: '7d9c7774-0256-452e-9a0a-3f8b3b08bc1f',
                        meta: { target_revision_id: 2336 }
                    }
                ],
                field_hero_image: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_hero_image'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_hero_image'
                        }
                    }
                },
                field_related_media: [
                    { type: 'media--image', id: 'a2f364fb-515f-4ee8-a273-921ab2e220f3' },
                    { type: 'media--image', id: '625574f9-44ea-4157-8d94-2829075bbab5' }
                ],
                field_sponsors: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_sponsors'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_sponsors'
                        }
                    }
                },
                field_streaming_now: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_streaming_now'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_streaming_now'
                        }
                    }
                },
                field_title_card_image: {
                    type: 'file--file',
                    id: '8fea50e4-22c7-471b-a1e5-960289e31358',
                    meta: { alt: 'GC2020_hero', title: '', width: 1920, height: 1080 }
                },
                field_tracks: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_tracks'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_tracks'
                        }
                    }
                },
                field_venue: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_venue'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_venue'
                        }
                    }
                }
            },
            field_livestream: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/0a85dde5-a2c3-40a5-970a-b1b4a4eab95d/field_livestream?resourceVersion=id%3A6554'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/0a85dde5-a2c3-40a5-970a-b1b4a4eab95d/relationships/field_livestream?resourceVersion=id%3A6554'
                    }
                }
            },
            field_people: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/0a85dde5-a2c3-40a5-970a-b1b4a4eab95d/field_people?resourceVersion=id%3A6554'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/0a85dde5-a2c3-40a5-970a-b1b4a4eab95d/relationships/field_people?resourceVersion=id%3A6554'
                    }
                }
            }
        },
        {
            type: 'node--session',
            id: '09d7ab68-b122-4ba9-b8f3-f9a57604d716',
            links: {
                describedby: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/resource/schema'
                },
                self: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/09d7ab68-b122-4ba9-b8f3-f9a57604d716?resourceVersion=id%3A6408'
                }
            },
            drupal_internal__nid: 6356,
            drupal_internal__vid: 6408,
            langcode: 'en',
            revision_timestamp: '2020-11-09T20:19:50+00:00',
            revision_log: null,
            status: true,
            title: 'Trends Reshaping Asset Management',
            created: '2020-07-31T16:42:46+00:00',
            changed: '2020-11-09T20:24:02+00:00',
            promote: false,
            sticky: false,
            default_langcode: true,
            revision_translation_affected: true,
            metatag: null,
            path: { alias: null, pid: null, langcode: 'en' },
            publish_on: null,
            unpublish_on: null,
            published_at: '2020-11-09T20:19:50+00:00',
            field_private: false,
            field_short_summary: null,
            field_start_end: {
                value: '2020-10-14T02:00:00-07:00',
                end_value: '2020-10-14T03:00:00-07:00'
            },
            field_long_description: null,
            field_url: null,
            node_type: {
                type: 'node_type--node_type',
                id: '48c0aab1-f34f-40d6-ad34-7f8826b263e9'
            },
            revision_uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            field_event: {
                type: 'event--conference',
                id: '49a2e35a-e287-41d9-9301-45fc41da8f13',
                links: {
                    describedby: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/resource/schema'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13'
                    }
                },
                drupal_internal__id: 85,
                langcode: 'en',
                title: '2020 Milken Institute Global Conference',
                created: '2020-07-20T09:03:21+00:00',
                changed: '2020-11-09T21:05:06+00:00',
                default_langcode: true,
                metatag: null,
                path: {
                    alias: '/event/2020-milken-institute-global-conference',
                    pid: 1505,
                    langcode: 'en'
                },
                field_blurb: null,
                field_campaign_id: '70138000000qyBAAAY',
                field_campaign_name: '2020 Milken Institute Global Conference',
                field_campaign_owner: null,
                field_campaign_type: 'Event-GC: Private',
                field_campaign_type_public: 'Event-GC: Public Session',
                field_description: null,
                field_event_date: null,
                field_grid_event_id: 'gc20',
                field_meta_tags: null,
                field_name_short: '2020 Global Conference',
                field_published: false,
                field_registration_deadline: null,
                field_sequential_id: 0,
                field_social_network_links: [
                    {
                        key: 'Facebook',
                        description: '',
                        value: 'http://facebook.com/milkeninstitute'
                    },
                    {
                        key: 'Twitter',
                        description: '',
                        value: 'http://twitter.com/milkeninstitute'
                    },
                    {
                        key: 'LinkedIn',
                        description: '',
                        value: 'http://linkedin.com/company/milkeninstitute'
                    },
                    {
                        key: 'Instagram',
                        description: '',
                        value: 'http://instagram.com/milkeninstitute'
                    },
                    {
                        key: 'Flickr',
                        description: '',
                        value:
                            'http://www.cvent.com/events/2020-milken-institute-global-conference/event-summary-fc57edcc8848424a9fcb633998853402.aspx'
                    }
                ],
                field_speakers: null,
                event_type: {
                    type: 'event_type--event_type',
                    id: '1eac1538-d334-4e6a-a5ca-082336f6c4a9'
                },
                field_content_tabs: [
                    {
                        type: 'paragraph--paragraph_tab',
                        id: 'fe73322e-8a69-4166-ad71-f01f8fd4acf5',
                        meta: { target_revision_id: 2299 }
                    },
                    {
                        type: 'paragraph--paragraph_tab',
                        id: '7d9c7774-0256-452e-9a0a-3f8b3b08bc1f',
                        meta: { target_revision_id: 2336 }
                    }
                ],
                field_hero_image: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_hero_image'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_hero_image'
                        }
                    }
                },
                field_related_media: [
                    { type: 'media--image', id: 'a2f364fb-515f-4ee8-a273-921ab2e220f3' },
                    { type: 'media--image', id: '625574f9-44ea-4157-8d94-2829075bbab5' }
                ],
                field_sponsors: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_sponsors'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_sponsors'
                        }
                    }
                },
                field_streaming_now: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_streaming_now'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_streaming_now'
                        }
                    }
                },
                field_title_card_image: {
                    type: 'file--file',
                    id: '8fea50e4-22c7-471b-a1e5-960289e31358',
                    meta: { alt: 'GC2020_hero', title: '', width: 1920, height: 1080 }
                },
                field_tracks: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_tracks'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_tracks'
                        }
                    }
                },
                field_venue: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_venue'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_venue'
                        }
                    }
                }
            },
            field_livestream: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/09d7ab68-b122-4ba9-b8f3-f9a57604d716/field_livestream?resourceVersion=id%3A6408'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/09d7ab68-b122-4ba9-b8f3-f9a57604d716/relationships/field_livestream?resourceVersion=id%3A6408'
                    }
                }
            },
            field_people: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/09d7ab68-b122-4ba9-b8f3-f9a57604d716/field_people?resourceVersion=id%3A6408'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/09d7ab68-b122-4ba9-b8f3-f9a57604d716/relationships/field_people?resourceVersion=id%3A6408'
                    }
                }
            }
        },
        {
            type: 'node--session',
            id: 'de12ed1e-992e-41e6-84dd-a5234d8aa879',
            links: {
                describedby: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/resource/schema'
                },
                self: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/de12ed1e-992e-41e6-84dd-a5234d8aa879?resourceVersion=id%3A6418'
                }
            },
            drupal_internal__nid: 6366,
            drupal_internal__vid: 6418,
            langcode: 'en',
            revision_timestamp: '2020-11-09T20:19:50+00:00',
            revision_log: null,
            status: true,
            title:
                'Racial and Economic Justice: Unlocking the Next Trillion of Economic Productivity',
            created: '2020-07-31T17:09:39+00:00',
            changed: '2020-11-09T20:24:02+00:00',
            promote: false,
            sticky: false,
            default_langcode: true,
            revision_translation_affected: true,
            metatag: null,
            path: { alias: null, pid: null, langcode: 'en' },
            publish_on: null,
            unpublish_on: null,
            published_at: '2020-11-09T20:19:50+00:00',
            field_private: false,
            field_short_summary: null,
            field_start_end: {
                value: '2020-10-14T03:15:00-07:00',
                end_value: '2020-10-14T04:15:00-07:00'
            },
            field_long_description: null,
            field_url: null,
            node_type: {
                type: 'node_type--node_type',
                id: '48c0aab1-f34f-40d6-ad34-7f8826b263e9'
            },
            revision_uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            field_event: {
                type: 'event--conference',
                id: '49a2e35a-e287-41d9-9301-45fc41da8f13',
                links: {
                    describedby: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/resource/schema'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13'
                    }
                },
                drupal_internal__id: 85,
                langcode: 'en',
                title: '2020 Milken Institute Global Conference',
                created: '2020-07-20T09:03:21+00:00',
                changed: '2020-11-09T21:05:06+00:00',
                default_langcode: true,
                metatag: null,
                path: {
                    alias: '/event/2020-milken-institute-global-conference',
                    pid: 1505,
                    langcode: 'en'
                },
                field_blurb: null,
                field_campaign_id: '70138000000qyBAAAY',
                field_campaign_name: '2020 Milken Institute Global Conference',
                field_campaign_owner: null,
                field_campaign_type: 'Event-GC: Private',
                field_campaign_type_public: 'Event-GC: Public Session',
                field_description: null,
                field_event_date: null,
                field_grid_event_id: 'gc20',
                field_meta_tags: null,
                field_name_short: '2020 Global Conference',
                field_published: false,
                field_registration_deadline: null,
                field_sequential_id: 0,
                field_social_network_links: [
                    {
                        key: 'Facebook',
                        description: '',
                        value: 'http://facebook.com/milkeninstitute'
                    },
                    {
                        key: 'Twitter',
                        description: '',
                        value: 'http://twitter.com/milkeninstitute'
                    },
                    {
                        key: 'LinkedIn',
                        description: '',
                        value: 'http://linkedin.com/company/milkeninstitute'
                    },
                    {
                        key: 'Instagram',
                        description: '',
                        value: 'http://instagram.com/milkeninstitute'
                    },
                    {
                        key: 'Flickr',
                        description: '',
                        value:
                            'http://www.cvent.com/events/2020-milken-institute-global-conference/event-summary-fc57edcc8848424a9fcb633998853402.aspx'
                    }
                ],
                field_speakers: null,
                event_type: {
                    type: 'event_type--event_type',
                    id: '1eac1538-d334-4e6a-a5ca-082336f6c4a9'
                },
                field_content_tabs: [
                    {
                        type: 'paragraph--paragraph_tab',
                        id: 'fe73322e-8a69-4166-ad71-f01f8fd4acf5',
                        meta: { target_revision_id: 2299 }
                    },
                    {
                        type: 'paragraph--paragraph_tab',
                        id: '7d9c7774-0256-452e-9a0a-3f8b3b08bc1f',
                        meta: { target_revision_id: 2336 }
                    }
                ],
                field_hero_image: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_hero_image'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_hero_image'
                        }
                    }
                },
                field_related_media: [
                    { type: 'media--image', id: 'a2f364fb-515f-4ee8-a273-921ab2e220f3' },
                    { type: 'media--image', id: '625574f9-44ea-4157-8d94-2829075bbab5' }
                ],
                field_sponsors: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_sponsors'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_sponsors'
                        }
                    }
                },
                field_streaming_now: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_streaming_now'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_streaming_now'
                        }
                    }
                },
                field_title_card_image: {
                    type: 'file--file',
                    id: '8fea50e4-22c7-471b-a1e5-960289e31358',
                    meta: { alt: 'GC2020_hero', title: '', width: 1920, height: 1080 }
                },
                field_tracks: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_tracks'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_tracks'
                        }
                    }
                },
                field_venue: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_venue'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_venue'
                        }
                    }
                }
            },
            field_livestream: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/de12ed1e-992e-41e6-84dd-a5234d8aa879/field_livestream?resourceVersion=id%3A6418'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/de12ed1e-992e-41e6-84dd-a5234d8aa879/relationships/field_livestream?resourceVersion=id%3A6418'
                    }
                }
            },
            field_people: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/de12ed1e-992e-41e6-84dd-a5234d8aa879/field_people?resourceVersion=id%3A6418'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/de12ed1e-992e-41e6-84dd-a5234d8aa879/relationships/field_people?resourceVersion=id%3A6418'
                    }
                }
            }
        },
        {
            type: 'node--session',
            id: '081ae161-fb82-43ba-8f00-78e824da378e',
            links: {
                describedby: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/resource/schema'
                },
                self: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/081ae161-fb82-43ba-8f00-78e824da378e?resourceVersion=id%3A6407'
                }
            },
            drupal_internal__nid: 6355,
            drupal_internal__vid: 6407,
            langcode: 'en',
            revision_timestamp: '2020-11-09T20:19:50+00:00',
            revision_log: null,
            status: true,
            title: 'Hedge Funds: Managing a Volatile Market',
            created: '2020-07-31T16:24:40+00:00',
            changed: '2020-11-09T20:24:02+00:00',
            promote: false,
            sticky: false,
            default_langcode: true,
            revision_translation_affected: true,
            metatag: null,
            path: { alias: null, pid: null, langcode: 'en' },
            publish_on: null,
            unpublish_on: null,
            published_at: '2020-11-09T20:19:50+00:00',
            field_private: false,
            field_short_summary: null,
            field_start_end: {
                value: '2020-10-14T03:15:00-07:00',
                end_value: '2020-10-14T04:15:00-07:00'
            },
            field_long_description: null,
            field_url: null,
            node_type: {
                type: 'node_type--node_type',
                id: '48c0aab1-f34f-40d6-ad34-7f8826b263e9'
            },
            revision_uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            field_event: {
                type: 'event--conference',
                id: '49a2e35a-e287-41d9-9301-45fc41da8f13',
                links: {
                    describedby: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/resource/schema'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13'
                    }
                },
                drupal_internal__id: 85,
                langcode: 'en',
                title: '2020 Milken Institute Global Conference',
                created: '2020-07-20T09:03:21+00:00',
                changed: '2020-11-09T21:05:06+00:00',
                default_langcode: true,
                metatag: null,
                path: {
                    alias: '/event/2020-milken-institute-global-conference',
                    pid: 1505,
                    langcode: 'en'
                },
                field_blurb: null,
                field_campaign_id: '70138000000qyBAAAY',
                field_campaign_name: '2020 Milken Institute Global Conference',
                field_campaign_owner: null,
                field_campaign_type: 'Event-GC: Private',
                field_campaign_type_public: 'Event-GC: Public Session',
                field_description: null,
                field_event_date: null,
                field_grid_event_id: 'gc20',
                field_meta_tags: null,
                field_name_short: '2020 Global Conference',
                field_published: false,
                field_registration_deadline: null,
                field_sequential_id: 0,
                field_social_network_links: [
                    {
                        key: 'Facebook',
                        description: '',
                        value: 'http://facebook.com/milkeninstitute'
                    },
                    {
                        key: 'Twitter',
                        description: '',
                        value: 'http://twitter.com/milkeninstitute'
                    },
                    {
                        key: 'LinkedIn',
                        description: '',
                        value: 'http://linkedin.com/company/milkeninstitute'
                    },
                    {
                        key: 'Instagram',
                        description: '',
                        value: 'http://instagram.com/milkeninstitute'
                    },
                    {
                        key: 'Flickr',
                        description: '',
                        value:
                            'http://www.cvent.com/events/2020-milken-institute-global-conference/event-summary-fc57edcc8848424a9fcb633998853402.aspx'
                    }
                ],
                field_speakers: null,
                event_type: {
                    type: 'event_type--event_type',
                    id: '1eac1538-d334-4e6a-a5ca-082336f6c4a9'
                },
                field_content_tabs: [
                    {
                        type: 'paragraph--paragraph_tab',
                        id: 'fe73322e-8a69-4166-ad71-f01f8fd4acf5',
                        meta: { target_revision_id: 2299 }
                    },
                    {
                        type: 'paragraph--paragraph_tab',
                        id: '7d9c7774-0256-452e-9a0a-3f8b3b08bc1f',
                        meta: { target_revision_id: 2336 }
                    }
                ],
                field_hero_image: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_hero_image'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_hero_image'
                        }
                    }
                },
                field_related_media: [
                    { type: 'media--image', id: 'a2f364fb-515f-4ee8-a273-921ab2e220f3' },
                    { type: 'media--image', id: '625574f9-44ea-4157-8d94-2829075bbab5' }
                ],
                field_sponsors: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_sponsors'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_sponsors'
                        }
                    }
                },
                field_streaming_now: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_streaming_now'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_streaming_now'
                        }
                    }
                },
                field_title_card_image: {
                    type: 'file--file',
                    id: '8fea50e4-22c7-471b-a1e5-960289e31358',
                    meta: { alt: 'GC2020_hero', title: '', width: 1920, height: 1080 }
                },
                field_tracks: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_tracks'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_tracks'
                        }
                    }
                },
                field_venue: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_venue'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_venue'
                        }
                    }
                }
            },
            field_livestream: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/081ae161-fb82-43ba-8f00-78e824da378e/field_livestream?resourceVersion=id%3A6407'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/081ae161-fb82-43ba-8f00-78e824da378e/relationships/field_livestream?resourceVersion=id%3A6407'
                    }
                }
            },
            field_people: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/081ae161-fb82-43ba-8f00-78e824da378e/field_people?resourceVersion=id%3A6407'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/081ae161-fb82-43ba-8f00-78e824da378e/relationships/field_people?resourceVersion=id%3A6407'
                    }
                }
            }
        },
        {
            type: 'node--session',
            id: 'ed52c91e-fb29-4b8a-a340-433130d4c079',
            links: {
                describedby: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/resource/schema'
                },
                self: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/ed52c91e-fb29-4b8a-a340-433130d4c079?resourceVersion=id%3A6462'
                }
            },
            drupal_internal__nid: 6410,
            drupal_internal__vid: 6462,
            langcode: 'en',
            revision_timestamp: '2020-11-09T20:19:50+00:00',
            revision_log: null,
            status: true,
            title: 'A Conversation with US Treasury Secretary Steven Mnuchin',
            created: '2020-08-03T13:49:25+00:00',
            changed: '2020-11-09T20:24:06+00:00',
            promote: false,
            sticky: false,
            default_langcode: true,
            revision_translation_affected: true,
            metatag: null,
            path: { alias: null, pid: null, langcode: 'en' },
            publish_on: null,
            unpublish_on: null,
            published_at: '2020-11-09T20:19:50+00:00',
            field_private: false,
            field_short_summary: null,
            field_start_end: {
                value: '2020-10-14T04:30:00-07:00',
                end_value: '2020-10-14T05:00:00-07:00'
            },
            field_long_description: null,
            field_url: null,
            node_type: {
                type: 'node_type--node_type',
                id: '48c0aab1-f34f-40d6-ad34-7f8826b263e9'
            },
            revision_uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            field_event: {
                type: 'event--conference',
                id: '49a2e35a-e287-41d9-9301-45fc41da8f13',
                links: {
                    describedby: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/resource/schema'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13'
                    }
                },
                drupal_internal__id: 85,
                langcode: 'en',
                title: '2020 Milken Institute Global Conference',
                created: '2020-07-20T09:03:21+00:00',
                changed: '2020-11-09T21:05:06+00:00',
                default_langcode: true,
                metatag: null,
                path: {
                    alias: '/event/2020-milken-institute-global-conference',
                    pid: 1505,
                    langcode: 'en'
                },
                field_blurb: null,
                field_campaign_id: '70138000000qyBAAAY',
                field_campaign_name: '2020 Milken Institute Global Conference',
                field_campaign_owner: null,
                field_campaign_type: 'Event-GC: Private',
                field_campaign_type_public: 'Event-GC: Public Session',
                field_description: null,
                field_event_date: null,
                field_grid_event_id: 'gc20',
                field_meta_tags: null,
                field_name_short: '2020 Global Conference',
                field_published: false,
                field_registration_deadline: null,
                field_sequential_id: 0,
                field_social_network_links: [
                    {
                        key: 'Facebook',
                        description: '',
                        value: 'http://facebook.com/milkeninstitute'
                    },
                    {
                        key: 'Twitter',
                        description: '',
                        value: 'http://twitter.com/milkeninstitute'
                    },
                    {
                        key: 'LinkedIn',
                        description: '',
                        value: 'http://linkedin.com/company/milkeninstitute'
                    },
                    {
                        key: 'Instagram',
                        description: '',
                        value: 'http://instagram.com/milkeninstitute'
                    },
                    {
                        key: 'Flickr',
                        description: '',
                        value:
                            'http://www.cvent.com/events/2020-milken-institute-global-conference/event-summary-fc57edcc8848424a9fcb633998853402.aspx'
                    }
                ],
                field_speakers: null,
                event_type: {
                    type: 'event_type--event_type',
                    id: '1eac1538-d334-4e6a-a5ca-082336f6c4a9'
                },
                field_content_tabs: [
                    {
                        type: 'paragraph--paragraph_tab',
                        id: 'fe73322e-8a69-4166-ad71-f01f8fd4acf5',
                        meta: { target_revision_id: 2299 }
                    },
                    {
                        type: 'paragraph--paragraph_tab',
                        id: '7d9c7774-0256-452e-9a0a-3f8b3b08bc1f',
                        meta: { target_revision_id: 2336 }
                    }
                ],
                field_hero_image: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_hero_image'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_hero_image'
                        }
                    }
                },
                field_related_media: [
                    { type: 'media--image', id: 'a2f364fb-515f-4ee8-a273-921ab2e220f3' },
                    { type: 'media--image', id: '625574f9-44ea-4157-8d94-2829075bbab5' }
                ],
                field_sponsors: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_sponsors'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_sponsors'
                        }
                    }
                },
                field_streaming_now: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_streaming_now'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_streaming_now'
                        }
                    }
                },
                field_title_card_image: {
                    type: 'file--file',
                    id: '8fea50e4-22c7-471b-a1e5-960289e31358',
                    meta: { alt: 'GC2020_hero', title: '', width: 1920, height: 1080 }
                },
                field_tracks: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_tracks'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_tracks'
                        }
                    }
                },
                field_venue: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_venue'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_venue'
                        }
                    }
                }
            },
            field_livestream: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/ed52c91e-fb29-4b8a-a340-433130d4c079/field_livestream?resourceVersion=id%3A6462'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/ed52c91e-fb29-4b8a-a340-433130d4c079/relationships/field_livestream?resourceVersion=id%3A6462'
                    }
                }
            },
            field_people: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/ed52c91e-fb29-4b8a-a340-433130d4c079/field_people?resourceVersion=id%3A6462'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/ed52c91e-fb29-4b8a-a340-433130d4c079/relationships/field_people?resourceVersion=id%3A6462'
                    }
                }
            }
        },
        {
            type: 'node--session',
            id: '8a6150d3-ab3b-4d7f-9b41-1ca44e55fa0f',
            links: {
                describedby: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/resource/schema'
                },
                self: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/8a6150d3-ab3b-4d7f-9b41-1ca44e55fa0f?resourceVersion=id%3A6567'
                }
            },
            drupal_internal__nid: 6515,
            drupal_internal__vid: 6567,
            langcode: 'en',
            revision_timestamp: '2020-11-09T20:27:07+00:00',
            revision_log: null,
            status: true,
            title: 'A Conversation with Jared Bernstein and Jason Furman',
            created: '2020-09-20T16:27:05+00:00',
            changed: '2020-11-09T20:28:43+00:00',
            promote: false,
            sticky: false,
            default_langcode: true,
            revision_translation_affected: true,
            metatag: null,
            path: { alias: null, pid: null, langcode: 'en' },
            publish_on: null,
            unpublish_on: null,
            published_at: '2020-11-09T20:27:07+00:00',
            field_private: false,
            field_short_summary: null,
            field_start_end: {
                value: '2020-10-14T05:15:00-07:00',
                end_value: '2020-10-14T05:45:00-07:00'
            },
            field_long_description: null,
            field_url: null,
            node_type: {
                type: 'node_type--node_type',
                id: '48c0aab1-f34f-40d6-ad34-7f8826b263e9'
            },
            revision_uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            field_event: {
                type: 'event--conference',
                id: '49a2e35a-e287-41d9-9301-45fc41da8f13',
                links: {
                    describedby: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/resource/schema'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13'
                    }
                },
                drupal_internal__id: 85,
                langcode: 'en',
                title: '2020 Milken Institute Global Conference',
                created: '2020-07-20T09:03:21+00:00',
                changed: '2020-11-09T21:05:06+00:00',
                default_langcode: true,
                metatag: null,
                path: {
                    alias: '/event/2020-milken-institute-global-conference',
                    pid: 1505,
                    langcode: 'en'
                },
                field_blurb: null,
                field_campaign_id: '70138000000qyBAAAY',
                field_campaign_name: '2020 Milken Institute Global Conference',
                field_campaign_owner: null,
                field_campaign_type: 'Event-GC: Private',
                field_campaign_type_public: 'Event-GC: Public Session',
                field_description: null,
                field_event_date: null,
                field_grid_event_id: 'gc20',
                field_meta_tags: null,
                field_name_short: '2020 Global Conference',
                field_published: false,
                field_registration_deadline: null,
                field_sequential_id: 0,
                field_social_network_links: [
                    {
                        key: 'Facebook',
                        description: '',
                        value: 'http://facebook.com/milkeninstitute'
                    },
                    {
                        key: 'Twitter',
                        description: '',
                        value: 'http://twitter.com/milkeninstitute'
                    },
                    {
                        key: 'LinkedIn',
                        description: '',
                        value: 'http://linkedin.com/company/milkeninstitute'
                    },
                    {
                        key: 'Instagram',
                        description: '',
                        value: 'http://instagram.com/milkeninstitute'
                    },
                    {
                        key: 'Flickr',
                        description: '',
                        value:
                            'http://www.cvent.com/events/2020-milken-institute-global-conference/event-summary-fc57edcc8848424a9fcb633998853402.aspx'
                    }
                ],
                field_speakers: null,
                event_type: {
                    type: 'event_type--event_type',
                    id: '1eac1538-d334-4e6a-a5ca-082336f6c4a9'
                },
                field_content_tabs: [
                    {
                        type: 'paragraph--paragraph_tab',
                        id: 'fe73322e-8a69-4166-ad71-f01f8fd4acf5',
                        meta: { target_revision_id: 2299 }
                    },
                    {
                        type: 'paragraph--paragraph_tab',
                        id: '7d9c7774-0256-452e-9a0a-3f8b3b08bc1f',
                        meta: { target_revision_id: 2336 }
                    }
                ],
                field_hero_image: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_hero_image'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_hero_image'
                        }
                    }
                },
                field_related_media: [
                    { type: 'media--image', id: 'a2f364fb-515f-4ee8-a273-921ab2e220f3' },
                    { type: 'media--image', id: '625574f9-44ea-4157-8d94-2829075bbab5' }
                ],
                field_sponsors: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_sponsors'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_sponsors'
                        }
                    }
                },
                field_streaming_now: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_streaming_now'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_streaming_now'
                        }
                    }
                },
                field_title_card_image: {
                    type: 'file--file',
                    id: '8fea50e4-22c7-471b-a1e5-960289e31358',
                    meta: { alt: 'GC2020_hero', title: '', width: 1920, height: 1080 }
                },
                field_tracks: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_tracks'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_tracks'
                        }
                    }
                },
                field_venue: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_venue'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_venue'
                        }
                    }
                }
            },
            field_livestream: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/8a6150d3-ab3b-4d7f-9b41-1ca44e55fa0f/field_livestream?resourceVersion=id%3A6567'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/8a6150d3-ab3b-4d7f-9b41-1ca44e55fa0f/relationships/field_livestream?resourceVersion=id%3A6567'
                    }
                }
            },
            field_people: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/8a6150d3-ab3b-4d7f-9b41-1ca44e55fa0f/field_people?resourceVersion=id%3A6567'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/8a6150d3-ab3b-4d7f-9b41-1ca44e55fa0f/relationships/field_people?resourceVersion=id%3A6567'
                    }
                }
            }
        },
        {
            type: 'node--session',
            id: 'e8dea130-efeb-424b-a887-443e62e731f9',
            links: {
                describedby: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/resource/schema'
                },
                self: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/e8dea130-efeb-424b-a887-443e62e731f9?resourceVersion=id%3A6436'
                }
            },
            drupal_internal__nid: 6384,
            drupal_internal__vid: 6436,
            langcode: 'en',
            revision_timestamp: '2020-11-09T20:19:50+00:00',
            revision_log: null,
            status: true,
            title:
                'Part 1: A Conversation with FCC Chairman Ajit Pai | Part 2: Building for the Future: Digital Infrastructure and 5G',
            created: '2020-08-03T09:50:23+00:00',
            changed: '2020-11-09T20:24:04+00:00',
            promote: false,
            sticky: false,
            default_langcode: true,
            revision_translation_affected: true,
            metatag: null,
            path: { alias: null, pid: null, langcode: 'en' },
            publish_on: null,
            unpublish_on: null,
            published_at: '2020-11-09T20:19:50+00:00',
            field_private: false,
            field_short_summary: null,
            field_start_end: {
                value: '2020-10-14T06:00:00-07:00',
                end_value: '2020-10-14T07:15:00-07:00'
            },
            field_long_description: null,
            field_url: null,
            node_type: {
                type: 'node_type--node_type',
                id: '48c0aab1-f34f-40d6-ad34-7f8826b263e9'
            },
            revision_uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            field_event: {
                type: 'event--conference',
                id: '49a2e35a-e287-41d9-9301-45fc41da8f13',
                links: {
                    describedby: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/resource/schema'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13'
                    }
                },
                drupal_internal__id: 85,
                langcode: 'en',
                title: '2020 Milken Institute Global Conference',
                created: '2020-07-20T09:03:21+00:00',
                changed: '2020-11-09T21:05:06+00:00',
                default_langcode: true,
                metatag: null,
                path: {
                    alias: '/event/2020-milken-institute-global-conference',
                    pid: 1505,
                    langcode: 'en'
                },
                field_blurb: null,
                field_campaign_id: '70138000000qyBAAAY',
                field_campaign_name: '2020 Milken Institute Global Conference',
                field_campaign_owner: null,
                field_campaign_type: 'Event-GC: Private',
                field_campaign_type_public: 'Event-GC: Public Session',
                field_description: null,
                field_event_date: null,
                field_grid_event_id: 'gc20',
                field_meta_tags: null,
                field_name_short: '2020 Global Conference',
                field_published: false,
                field_registration_deadline: null,
                field_sequential_id: 0,
                field_social_network_links: [
                    {
                        key: 'Facebook',
                        description: '',
                        value: 'http://facebook.com/milkeninstitute'
                    },
                    {
                        key: 'Twitter',
                        description: '',
                        value: 'http://twitter.com/milkeninstitute'
                    },
                    {
                        key: 'LinkedIn',
                        description: '',
                        value: 'http://linkedin.com/company/milkeninstitute'
                    },
                    {
                        key: 'Instagram',
                        description: '',
                        value: 'http://instagram.com/milkeninstitute'
                    },
                    {
                        key: 'Flickr',
                        description: '',
                        value:
                            'http://www.cvent.com/events/2020-milken-institute-global-conference/event-summary-fc57edcc8848424a9fcb633998853402.aspx'
                    }
                ],
                field_speakers: null,
                event_type: {
                    type: 'event_type--event_type',
                    id: '1eac1538-d334-4e6a-a5ca-082336f6c4a9'
                },
                field_content_tabs: [
                    {
                        type: 'paragraph--paragraph_tab',
                        id: 'fe73322e-8a69-4166-ad71-f01f8fd4acf5',
                        meta: { target_revision_id: 2299 }
                    },
                    {
                        type: 'paragraph--paragraph_tab',
                        id: '7d9c7774-0256-452e-9a0a-3f8b3b08bc1f',
                        meta: { target_revision_id: 2336 }
                    }
                ],
                field_hero_image: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_hero_image'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_hero_image'
                        }
                    }
                },
                field_related_media: [
                    { type: 'media--image', id: 'a2f364fb-515f-4ee8-a273-921ab2e220f3' },
                    { type: 'media--image', id: '625574f9-44ea-4157-8d94-2829075bbab5' }
                ],
                field_sponsors: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_sponsors'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_sponsors'
                        }
                    }
                },
                field_streaming_now: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_streaming_now'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_streaming_now'
                        }
                    }
                },
                field_title_card_image: {
                    type: 'file--file',
                    id: '8fea50e4-22c7-471b-a1e5-960289e31358',
                    meta: { alt: 'GC2020_hero', title: '', width: 1920, height: 1080 }
                },
                field_tracks: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_tracks'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_tracks'
                        }
                    }
                },
                field_venue: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_venue'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_venue'
                        }
                    }
                }
            },
            field_livestream: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/e8dea130-efeb-424b-a887-443e62e731f9/field_livestream?resourceVersion=id%3A6436'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/e8dea130-efeb-424b-a887-443e62e731f9/relationships/field_livestream?resourceVersion=id%3A6436'
                    }
                }
            },
            field_people: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/e8dea130-efeb-424b-a887-443e62e731f9/field_people?resourceVersion=id%3A6436'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/e8dea130-efeb-424b-a887-443e62e731f9/relationships/field_people?resourceVersion=id%3A6436'
                    }
                }
            }
        },
        {
            type: 'node--session',
            id: '4ff4d880-2cb8-4f9f-a5d9-6f76bb0556f4',
            links: {
                describedby: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/resource/schema'
                },
                self: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/4ff4d880-2cb8-4f9f-a5d9-6f76bb0556f4?resourceVersion=id%3A6454'
                }
            },
            drupal_internal__nid: 6402,
            drupal_internal__vid: 6454,
            langcode: 'en',
            revision_timestamp: '2020-11-09T20:19:50+00:00',
            revision_log: null,
            status: true,
            title: 'Building a Stronger Food System After COVID-19',
            created: '2020-08-03T10:32:41+00:00',
            changed: '2020-11-09T20:24:05+00:00',
            promote: false,
            sticky: false,
            default_langcode: true,
            revision_translation_affected: true,
            metatag: null,
            path: { alias: null, pid: null, langcode: 'en' },
            publish_on: null,
            unpublish_on: null,
            published_at: '2020-11-09T20:19:50+00:00',
            field_private: false,
            field_short_summary: null,
            field_start_end: {
                value: '2020-10-14T06:15:00-07:00',
                end_value: '2020-10-14T07:15:00-07:00'
            },
            field_long_description: null,
            field_url: null,
            node_type: {
                type: 'node_type--node_type',
                id: '48c0aab1-f34f-40d6-ad34-7f8826b263e9'
            },
            revision_uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            field_event: {
                type: 'event--conference',
                id: '49a2e35a-e287-41d9-9301-45fc41da8f13',
                links: {
                    describedby: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/resource/schema'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13'
                    }
                },
                drupal_internal__id: 85,
                langcode: 'en',
                title: '2020 Milken Institute Global Conference',
                created: '2020-07-20T09:03:21+00:00',
                changed: '2020-11-09T21:05:06+00:00',
                default_langcode: true,
                metatag: null,
                path: {
                    alias: '/event/2020-milken-institute-global-conference',
                    pid: 1505,
                    langcode: 'en'
                },
                field_blurb: null,
                field_campaign_id: '70138000000qyBAAAY',
                field_campaign_name: '2020 Milken Institute Global Conference',
                field_campaign_owner: null,
                field_campaign_type: 'Event-GC: Private',
                field_campaign_type_public: 'Event-GC: Public Session',
                field_description: null,
                field_event_date: null,
                field_grid_event_id: 'gc20',
                field_meta_tags: null,
                field_name_short: '2020 Global Conference',
                field_published: false,
                field_registration_deadline: null,
                field_sequential_id: 0,
                field_social_network_links: [
                    {
                        key: 'Facebook',
                        description: '',
                        value: 'http://facebook.com/milkeninstitute'
                    },
                    {
                        key: 'Twitter',
                        description: '',
                        value: 'http://twitter.com/milkeninstitute'
                    },
                    {
                        key: 'LinkedIn',
                        description: '',
                        value: 'http://linkedin.com/company/milkeninstitute'
                    },
                    {
                        key: 'Instagram',
                        description: '',
                        value: 'http://instagram.com/milkeninstitute'
                    },
                    {
                        key: 'Flickr',
                        description: '',
                        value:
                            'http://www.cvent.com/events/2020-milken-institute-global-conference/event-summary-fc57edcc8848424a9fcb633998853402.aspx'
                    }
                ],
                field_speakers: null,
                event_type: {
                    type: 'event_type--event_type',
                    id: '1eac1538-d334-4e6a-a5ca-082336f6c4a9'
                },
                field_content_tabs: [
                    {
                        type: 'paragraph--paragraph_tab',
                        id: 'fe73322e-8a69-4166-ad71-f01f8fd4acf5',
                        meta: { target_revision_id: 2299 }
                    },
                    {
                        type: 'paragraph--paragraph_tab',
                        id: '7d9c7774-0256-452e-9a0a-3f8b3b08bc1f',
                        meta: { target_revision_id: 2336 }
                    }
                ],
                field_hero_image: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_hero_image'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_hero_image'
                        }
                    }
                },
                field_related_media: [
                    { type: 'media--image', id: 'a2f364fb-515f-4ee8-a273-921ab2e220f3' },
                    { type: 'media--image', id: '625574f9-44ea-4157-8d94-2829075bbab5' }
                ],
                field_sponsors: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_sponsors'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_sponsors'
                        }
                    }
                },
                field_streaming_now: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_streaming_now'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_streaming_now'
                        }
                    }
                },
                field_title_card_image: {
                    type: 'file--file',
                    id: '8fea50e4-22c7-471b-a1e5-960289e31358',
                    meta: { alt: 'GC2020_hero', title: '', width: 1920, height: 1080 }
                },
                field_tracks: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_tracks'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_tracks'
                        }
                    }
                },
                field_venue: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_venue'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_venue'
                        }
                    }
                }
            },
            field_livestream: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/4ff4d880-2cb8-4f9f-a5d9-6f76bb0556f4/field_livestream?resourceVersion=id%3A6454'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/4ff4d880-2cb8-4f9f-a5d9-6f76bb0556f4/relationships/field_livestream?resourceVersion=id%3A6454'
                    }
                }
            },
            field_people: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/4ff4d880-2cb8-4f9f-a5d9-6f76bb0556f4/field_people?resourceVersion=id%3A6454'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/4ff4d880-2cb8-4f9f-a5d9-6f76bb0556f4/relationships/field_people?resourceVersion=id%3A6454'
                    }
                }
            }
        },
        {
            type: 'node--session',
            id: '1e6015ff-f8b0-4136-a191-b98181fbe7b6',
            links: {
                describedby: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/resource/schema'
                },
                self: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/1e6015ff-f8b0-4136-a191-b98181fbe7b6?resourceVersion=id%3A6546'
                }
            },
            drupal_internal__nid: 6494,
            drupal_internal__vid: 6546,
            langcode: 'en',
            revision_timestamp: '2020-11-09T20:27:07+00:00',
            revision_log: null,
            status: true,
            title: 'Mindful Moments | Move to Get Unstuck with Daniela Plattner',
            created: '2020-09-09T15:25:40+00:00',
            changed: '2020-11-09T20:28:41+00:00',
            promote: false,
            sticky: false,
            default_langcode: true,
            revision_translation_affected: true,
            metatag: null,
            path: { alias: null, pid: null, langcode: 'en' },
            publish_on: null,
            unpublish_on: null,
            published_at: '2020-11-09T20:27:07+00:00',
            field_private: false,
            field_short_summary: null,
            field_start_end: {
                value: '2020-10-14T07:15:00-07:00',
                end_value: '2020-10-14T07:30:00-07:00'
            },
            field_long_description: null,
            field_url: null,
            node_type: {
                type: 'node_type--node_type',
                id: '48c0aab1-f34f-40d6-ad34-7f8826b263e9'
            },
            revision_uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            field_event: {
                type: 'event--conference',
                id: '49a2e35a-e287-41d9-9301-45fc41da8f13',
                links: {
                    describedby: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/resource/schema'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13'
                    }
                },
                drupal_internal__id: 85,
                langcode: 'en',
                title: '2020 Milken Institute Global Conference',
                created: '2020-07-20T09:03:21+00:00',
                changed: '2020-11-09T21:05:06+00:00',
                default_langcode: true,
                metatag: null,
                path: {
                    alias: '/event/2020-milken-institute-global-conference',
                    pid: 1505,
                    langcode: 'en'
                },
                field_blurb: null,
                field_campaign_id: '70138000000qyBAAAY',
                field_campaign_name: '2020 Milken Institute Global Conference',
                field_campaign_owner: null,
                field_campaign_type: 'Event-GC: Private',
                field_campaign_type_public: 'Event-GC: Public Session',
                field_description: null,
                field_event_date: null,
                field_grid_event_id: 'gc20',
                field_meta_tags: null,
                field_name_short: '2020 Global Conference',
                field_published: false,
                field_registration_deadline: null,
                field_sequential_id: 0,
                field_social_network_links: [
                    {
                        key: 'Facebook',
                        description: '',
                        value: 'http://facebook.com/milkeninstitute'
                    },
                    {
                        key: 'Twitter',
                        description: '',
                        value: 'http://twitter.com/milkeninstitute'
                    },
                    {
                        key: 'LinkedIn',
                        description: '',
                        value: 'http://linkedin.com/company/milkeninstitute'
                    },
                    {
                        key: 'Instagram',
                        description: '',
                        value: 'http://instagram.com/milkeninstitute'
                    },
                    {
                        key: 'Flickr',
                        description: '',
                        value:
                            'http://www.cvent.com/events/2020-milken-institute-global-conference/event-summary-fc57edcc8848424a9fcb633998853402.aspx'
                    }
                ],
                field_speakers: null,
                event_type: {
                    type: 'event_type--event_type',
                    id: '1eac1538-d334-4e6a-a5ca-082336f6c4a9'
                },
                field_content_tabs: [
                    {
                        type: 'paragraph--paragraph_tab',
                        id: 'fe73322e-8a69-4166-ad71-f01f8fd4acf5',
                        meta: { target_revision_id: 2299 }
                    },
                    {
                        type: 'paragraph--paragraph_tab',
                        id: '7d9c7774-0256-452e-9a0a-3f8b3b08bc1f',
                        meta: { target_revision_id: 2336 }
                    }
                ],
                field_hero_image: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_hero_image'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_hero_image'
                        }
                    }
                },
                field_related_media: [
                    { type: 'media--image', id: 'a2f364fb-515f-4ee8-a273-921ab2e220f3' },
                    { type: 'media--image', id: '625574f9-44ea-4157-8d94-2829075bbab5' }
                ],
                field_sponsors: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_sponsors'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_sponsors'
                        }
                    }
                },
                field_streaming_now: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_streaming_now'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_streaming_now'
                        }
                    }
                },
                field_title_card_image: {
                    type: 'file--file',
                    id: '8fea50e4-22c7-471b-a1e5-960289e31358',
                    meta: { alt: 'GC2020_hero', title: '', width: 1920, height: 1080 }
                },
                field_tracks: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_tracks'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_tracks'
                        }
                    }
                },
                field_venue: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_venue'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_venue'
                        }
                    }
                }
            },
            field_livestream: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/1e6015ff-f8b0-4136-a191-b98181fbe7b6/field_livestream?resourceVersion=id%3A6546'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/1e6015ff-f8b0-4136-a191-b98181fbe7b6/relationships/field_livestream?resourceVersion=id%3A6546'
                    }
                }
            },
            field_people: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/1e6015ff-f8b0-4136-a191-b98181fbe7b6/field_people?resourceVersion=id%3A6546'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/1e6015ff-f8b0-4136-a191-b98181fbe7b6/relationships/field_people?resourceVersion=id%3A6546'
                    }
                }
            }
        },
        {
            type: 'node--session',
            id: '69446ff4-e490-4547-9097-242e6a7fd1f6',
            links: {
                describedby: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/resource/schema'
                },
                self: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/69446ff4-e490-4547-9097-242e6a7fd1f6?resourceVersion=id%3A6455'
                }
            },
            drupal_internal__nid: 6403,
            drupal_internal__vid: 6455,
            langcode: 'en',
            revision_timestamp: '2020-11-09T20:19:50+00:00',
            revision_log: null,
            status: true,
            title: 'Ten Years in Ten Months: Accelerating the Disruption of Higher Education',
            created: '2020-08-03T10:38:23+00:00',
            changed: '2020-11-09T20:24:05+00:00',
            promote: false,
            sticky: false,
            default_langcode: true,
            revision_translation_affected: true,
            metatag: null,
            path: { alias: null, pid: null, langcode: 'en' },
            publish_on: null,
            unpublish_on: null,
            published_at: '2020-11-09T20:19:50+00:00',
            field_private: false,
            field_short_summary: null,
            field_start_end: {
                value: '2020-10-14T07:30:00-07:00',
                end_value: '2020-10-14T08:30:00-07:00'
            },
            field_long_description: null,
            field_url: null,
            node_type: {
                type: 'node_type--node_type',
                id: '48c0aab1-f34f-40d6-ad34-7f8826b263e9'
            },
            revision_uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            field_event: {
                type: 'event--conference',
                id: '49a2e35a-e287-41d9-9301-45fc41da8f13',
                links: {
                    describedby: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/resource/schema'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13'
                    }
                },
                drupal_internal__id: 85,
                langcode: 'en',
                title: '2020 Milken Institute Global Conference',
                created: '2020-07-20T09:03:21+00:00',
                changed: '2020-11-09T21:05:06+00:00',
                default_langcode: true,
                metatag: null,
                path: {
                    alias: '/event/2020-milken-institute-global-conference',
                    pid: 1505,
                    langcode: 'en'
                },
                field_blurb: null,
                field_campaign_id: '70138000000qyBAAAY',
                field_campaign_name: '2020 Milken Institute Global Conference',
                field_campaign_owner: null,
                field_campaign_type: 'Event-GC: Private',
                field_campaign_type_public: 'Event-GC: Public Session',
                field_description: null,
                field_event_date: null,
                field_grid_event_id: 'gc20',
                field_meta_tags: null,
                field_name_short: '2020 Global Conference',
                field_published: false,
                field_registration_deadline: null,
                field_sequential_id: 0,
                field_social_network_links: [
                    {
                        key: 'Facebook',
                        description: '',
                        value: 'http://facebook.com/milkeninstitute'
                    },
                    {
                        key: 'Twitter',
                        description: '',
                        value: 'http://twitter.com/milkeninstitute'
                    },
                    {
                        key: 'LinkedIn',
                        description: '',
                        value: 'http://linkedin.com/company/milkeninstitute'
                    },
                    {
                        key: 'Instagram',
                        description: '',
                        value: 'http://instagram.com/milkeninstitute'
                    },
                    {
                        key: 'Flickr',
                        description: '',
                        value:
                            'http://www.cvent.com/events/2020-milken-institute-global-conference/event-summary-fc57edcc8848424a9fcb633998853402.aspx'
                    }
                ],
                field_speakers: null,
                event_type: {
                    type: 'event_type--event_type',
                    id: '1eac1538-d334-4e6a-a5ca-082336f6c4a9'
                },
                field_content_tabs: [
                    {
                        type: 'paragraph--paragraph_tab',
                        id: 'fe73322e-8a69-4166-ad71-f01f8fd4acf5',
                        meta: { target_revision_id: 2299 }
                    },
                    {
                        type: 'paragraph--paragraph_tab',
                        id: '7d9c7774-0256-452e-9a0a-3f8b3b08bc1f',
                        meta: { target_revision_id: 2336 }
                    }
                ],
                field_hero_image: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_hero_image'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_hero_image'
                        }
                    }
                },
                field_related_media: [
                    { type: 'media--image', id: 'a2f364fb-515f-4ee8-a273-921ab2e220f3' },
                    { type: 'media--image', id: '625574f9-44ea-4157-8d94-2829075bbab5' }
                ],
                field_sponsors: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_sponsors'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_sponsors'
                        }
                    }
                },
                field_streaming_now: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_streaming_now'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_streaming_now'
                        }
                    }
                },
                field_title_card_image: {
                    type: 'file--file',
                    id: '8fea50e4-22c7-471b-a1e5-960289e31358',
                    meta: { alt: 'GC2020_hero', title: '', width: 1920, height: 1080 }
                },
                field_tracks: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_tracks'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_tracks'
                        }
                    }
                },
                field_venue: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_venue'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_venue'
                        }
                    }
                }
            },
            field_livestream: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/69446ff4-e490-4547-9097-242e6a7fd1f6/field_livestream?resourceVersion=id%3A6455'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/69446ff4-e490-4547-9097-242e6a7fd1f6/relationships/field_livestream?resourceVersion=id%3A6455'
                    }
                }
            },
            field_people: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/69446ff4-e490-4547-9097-242e6a7fd1f6/field_people?resourceVersion=id%3A6455'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/69446ff4-e490-4547-9097-242e6a7fd1f6/relationships/field_people?resourceVersion=id%3A6455'
                    }
                }
            }
        },
        {
            type: 'node--session',
            id: '5147c29e-c9df-4159-8d58-5e881f09f1c3',
            links: {
                describedby: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/resource/schema'
                },
                self: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/5147c29e-c9df-4159-8d58-5e881f09f1c3?resourceVersion=id%3A6498'
                }
            },
            drupal_internal__nid: 6446,
            drupal_internal__vid: 6498,
            langcode: 'en',
            revision_timestamp: '2020-11-09T20:19:50+00:00',
            revision_log: null,
            status: true,
            title: 'Begin Within: Set Your Mind Right',
            created: '2020-09-01T13:32:54+00:00',
            changed: '2020-11-09T20:24:10+00:00',
            promote: false,
            sticky: false,
            default_langcode: true,
            revision_translation_affected: true,
            metatag: null,
            path: { alias: null, pid: null, langcode: 'en' },
            publish_on: null,
            unpublish_on: null,
            published_at: '2020-11-09T20:19:50+00:00',
            field_private: false,
            field_short_summary: null,
            field_start_end: {
                value: '2020-10-14T07:30:00-07:00',
                end_value: '2020-10-14T08:30:00-07:00'
            },
            field_long_description: null,
            field_url: null,
            node_type: {
                type: 'node_type--node_type',
                id: '48c0aab1-f34f-40d6-ad34-7f8826b263e9'
            },
            revision_uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            field_event: {
                type: 'event--conference',
                id: '49a2e35a-e287-41d9-9301-45fc41da8f13',
                links: {
                    describedby: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/resource/schema'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13'
                    }
                },
                drupal_internal__id: 85,
                langcode: 'en',
                title: '2020 Milken Institute Global Conference',
                created: '2020-07-20T09:03:21+00:00',
                changed: '2020-11-09T21:05:06+00:00',
                default_langcode: true,
                metatag: null,
                path: {
                    alias: '/event/2020-milken-institute-global-conference',
                    pid: 1505,
                    langcode: 'en'
                },
                field_blurb: null,
                field_campaign_id: '70138000000qyBAAAY',
                field_campaign_name: '2020 Milken Institute Global Conference',
                field_campaign_owner: null,
                field_campaign_type: 'Event-GC: Private',
                field_campaign_type_public: 'Event-GC: Public Session',
                field_description: null,
                field_event_date: null,
                field_grid_event_id: 'gc20',
                field_meta_tags: null,
                field_name_short: '2020 Global Conference',
                field_published: false,
                field_registration_deadline: null,
                field_sequential_id: 0,
                field_social_network_links: [
                    {
                        key: 'Facebook',
                        description: '',
                        value: 'http://facebook.com/milkeninstitute'
                    },
                    {
                        key: 'Twitter',
                        description: '',
                        value: 'http://twitter.com/milkeninstitute'
                    },
                    {
                        key: 'LinkedIn',
                        description: '',
                        value: 'http://linkedin.com/company/milkeninstitute'
                    },
                    {
                        key: 'Instagram',
                        description: '',
                        value: 'http://instagram.com/milkeninstitute'
                    },
                    {
                        key: 'Flickr',
                        description: '',
                        value:
                            'http://www.cvent.com/events/2020-milken-institute-global-conference/event-summary-fc57edcc8848424a9fcb633998853402.aspx'
                    }
                ],
                field_speakers: null,
                event_type: {
                    type: 'event_type--event_type',
                    id: '1eac1538-d334-4e6a-a5ca-082336f6c4a9'
                },
                field_content_tabs: [
                    {
                        type: 'paragraph--paragraph_tab',
                        id: 'fe73322e-8a69-4166-ad71-f01f8fd4acf5',
                        meta: { target_revision_id: 2299 }
                    },
                    {
                        type: 'paragraph--paragraph_tab',
                        id: '7d9c7774-0256-452e-9a0a-3f8b3b08bc1f',
                        meta: { target_revision_id: 2336 }
                    }
                ],
                field_hero_image: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_hero_image'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_hero_image'
                        }
                    }
                },
                field_related_media: [
                    { type: 'media--image', id: 'a2f364fb-515f-4ee8-a273-921ab2e220f3' },
                    { type: 'media--image', id: '625574f9-44ea-4157-8d94-2829075bbab5' }
                ],
                field_sponsors: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_sponsors'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_sponsors'
                        }
                    }
                },
                field_streaming_now: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_streaming_now'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_streaming_now'
                        }
                    }
                },
                field_title_card_image: {
                    type: 'file--file',
                    id: '8fea50e4-22c7-471b-a1e5-960289e31358',
                    meta: { alt: 'GC2020_hero', title: '', width: 1920, height: 1080 }
                },
                field_tracks: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_tracks'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_tracks'
                        }
                    }
                },
                field_venue: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_venue'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_venue'
                        }
                    }
                }
            },
            field_livestream: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/5147c29e-c9df-4159-8d58-5e881f09f1c3/field_livestream?resourceVersion=id%3A6498'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/5147c29e-c9df-4159-8d58-5e881f09f1c3/relationships/field_livestream?resourceVersion=id%3A6498'
                    }
                }
            },
            field_people: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/5147c29e-c9df-4159-8d58-5e881f09f1c3/field_people?resourceVersion=id%3A6498'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/5147c29e-c9df-4159-8d58-5e881f09f1c3/relationships/field_people?resourceVersion=id%3A6498'
                    }
                }
            }
        },
        {
            type: 'node--session',
            id: 'b46dfd59-7157-4e03-b0bf-e398e140a7c1',
            links: {
                describedby: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/resource/schema'
                },
                self: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/b46dfd59-7157-4e03-b0bf-e398e140a7c1?resourceVersion=id%3A6413'
                }
            },
            drupal_internal__nid: 6361,
            drupal_internal__vid: 6413,
            langcode: 'en',
            revision_timestamp: '2020-11-09T20:19:50+00:00',
            revision_log: null,
            status: true,
            title: 'Betting on the Future: Tech, Software, and Beyond ',
            created: '2020-07-31T17:05:04+00:00',
            changed: '2020-11-09T20:24:02+00:00',
            promote: false,
            sticky: false,
            default_langcode: true,
            revision_translation_affected: true,
            metatag: null,
            path: { alias: null, pid: null, langcode: 'en' },
            publish_on: null,
            unpublish_on: null,
            published_at: '2020-11-09T20:19:50+00:00',
            field_private: false,
            field_short_summary: null,
            field_start_end: {
                value: '2020-10-14T09:30:00-07:00',
                end_value: '2020-10-14T10:30:00-07:00'
            },
            field_long_description: null,
            field_url: null,
            node_type: {
                type: 'node_type--node_type',
                id: '48c0aab1-f34f-40d6-ad34-7f8826b263e9'
            },
            revision_uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            field_event: {
                type: 'event--conference',
                id: '49a2e35a-e287-41d9-9301-45fc41da8f13',
                links: {
                    describedby: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/resource/schema'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13'
                    }
                },
                drupal_internal__id: 85,
                langcode: 'en',
                title: '2020 Milken Institute Global Conference',
                created: '2020-07-20T09:03:21+00:00',
                changed: '2020-11-09T21:05:06+00:00',
                default_langcode: true,
                metatag: null,
                path: {
                    alias: '/event/2020-milken-institute-global-conference',
                    pid: 1505,
                    langcode: 'en'
                },
                field_blurb: null,
                field_campaign_id: '70138000000qyBAAAY',
                field_campaign_name: '2020 Milken Institute Global Conference',
                field_campaign_owner: null,
                field_campaign_type: 'Event-GC: Private',
                field_campaign_type_public: 'Event-GC: Public Session',
                field_description: null,
                field_event_date: null,
                field_grid_event_id: 'gc20',
                field_meta_tags: null,
                field_name_short: '2020 Global Conference',
                field_published: false,
                field_registration_deadline: null,
                field_sequential_id: 0,
                field_social_network_links: [
                    {
                        key: 'Facebook',
                        description: '',
                        value: 'http://facebook.com/milkeninstitute'
                    },
                    {
                        key: 'Twitter',
                        description: '',
                        value: 'http://twitter.com/milkeninstitute'
                    },
                    {
                        key: 'LinkedIn',
                        description: '',
                        value: 'http://linkedin.com/company/milkeninstitute'
                    },
                    {
                        key: 'Instagram',
                        description: '',
                        value: 'http://instagram.com/milkeninstitute'
                    },
                    {
                        key: 'Flickr',
                        description: '',
                        value:
                            'http://www.cvent.com/events/2020-milken-institute-global-conference/event-summary-fc57edcc8848424a9fcb633998853402.aspx'
                    }
                ],
                field_speakers: null,
                event_type: {
                    type: 'event_type--event_type',
                    id: '1eac1538-d334-4e6a-a5ca-082336f6c4a9'
                },
                field_content_tabs: [
                    {
                        type: 'paragraph--paragraph_tab',
                        id: 'fe73322e-8a69-4166-ad71-f01f8fd4acf5',
                        meta: { target_revision_id: 2299 }
                    },
                    {
                        type: 'paragraph--paragraph_tab',
                        id: '7d9c7774-0256-452e-9a0a-3f8b3b08bc1f',
                        meta: { target_revision_id: 2336 }
                    }
                ],
                field_hero_image: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_hero_image'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_hero_image'
                        }
                    }
                },
                field_related_media: [
                    { type: 'media--image', id: 'a2f364fb-515f-4ee8-a273-921ab2e220f3' },
                    { type: 'media--image', id: '625574f9-44ea-4157-8d94-2829075bbab5' }
                ],
                field_sponsors: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_sponsors'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_sponsors'
                        }
                    }
                },
                field_streaming_now: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_streaming_now'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_streaming_now'
                        }
                    }
                },
                field_title_card_image: {
                    type: 'file--file',
                    id: '8fea50e4-22c7-471b-a1e5-960289e31358',
                    meta: { alt: 'GC2020_hero', title: '', width: 1920, height: 1080 }
                },
                field_tracks: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_tracks'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_tracks'
                        }
                    }
                },
                field_venue: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_venue'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_venue'
                        }
                    }
                }
            },
            field_livestream: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/b46dfd59-7157-4e03-b0bf-e398e140a7c1/field_livestream?resourceVersion=id%3A6413'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/b46dfd59-7157-4e03-b0bf-e398e140a7c1/relationships/field_livestream?resourceVersion=id%3A6413'
                    }
                }
            },
            field_people: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/b46dfd59-7157-4e03-b0bf-e398e140a7c1/field_people?resourceVersion=id%3A6413'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/b46dfd59-7157-4e03-b0bf-e398e140a7c1/relationships/field_people?resourceVersion=id%3A6413'
                    }
                }
            }
        },
        {
            type: 'node--session',
            id: '177f7a3b-344d-4071-b255-5672b6c13535',
            links: {
                describedby: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/resource/schema'
                },
                self: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/177f7a3b-344d-4071-b255-5672b6c13535?resourceVersion=id%3A6445'
                }
            },
            drupal_internal__nid: 6393,
            drupal_internal__vid: 6445,
            langcode: 'en',
            revision_timestamp: '2020-11-09T20:19:50+00:00',
            revision_log: null,
            status: true,
            title: 'Building Equity in Entrepreneurship',
            created: '2020-08-03T10:00:18+00:00',
            changed: '2020-11-09T20:24:04+00:00',
            promote: false,
            sticky: false,
            default_langcode: true,
            revision_translation_affected: true,
            metatag: null,
            path: { alias: null, pid: null, langcode: 'en' },
            publish_on: null,
            unpublish_on: null,
            published_at: '2020-11-09T20:19:50+00:00',
            field_private: false,
            field_short_summary: null,
            field_start_end: {
                value: '2020-10-14T09:30:00-07:00',
                end_value: '2020-10-14T10:30:00-07:00'
            },
            field_long_description: null,
            field_url: null,
            node_type: {
                type: 'node_type--node_type',
                id: '48c0aab1-f34f-40d6-ad34-7f8826b263e9'
            },
            revision_uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            field_event: {
                type: 'event--conference',
                id: '49a2e35a-e287-41d9-9301-45fc41da8f13',
                links: {
                    describedby: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/resource/schema'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13'
                    }
                },
                drupal_internal__id: 85,
                langcode: 'en',
                title: '2020 Milken Institute Global Conference',
                created: '2020-07-20T09:03:21+00:00',
                changed: '2020-11-09T21:05:06+00:00',
                default_langcode: true,
                metatag: null,
                path: {
                    alias: '/event/2020-milken-institute-global-conference',
                    pid: 1505,
                    langcode: 'en'
                },
                field_blurb: null,
                field_campaign_id: '70138000000qyBAAAY',
                field_campaign_name: '2020 Milken Institute Global Conference',
                field_campaign_owner: null,
                field_campaign_type: 'Event-GC: Private',
                field_campaign_type_public: 'Event-GC: Public Session',
                field_description: null,
                field_event_date: null,
                field_grid_event_id: 'gc20',
                field_meta_tags: null,
                field_name_short: '2020 Global Conference',
                field_published: false,
                field_registration_deadline: null,
                field_sequential_id: 0,
                field_social_network_links: [
                    {
                        key: 'Facebook',
                        description: '',
                        value: 'http://facebook.com/milkeninstitute'
                    },
                    {
                        key: 'Twitter',
                        description: '',
                        value: 'http://twitter.com/milkeninstitute'
                    },
                    {
                        key: 'LinkedIn',
                        description: '',
                        value: 'http://linkedin.com/company/milkeninstitute'
                    },
                    {
                        key: 'Instagram',
                        description: '',
                        value: 'http://instagram.com/milkeninstitute'
                    },
                    {
                        key: 'Flickr',
                        description: '',
                        value:
                            'http://www.cvent.com/events/2020-milken-institute-global-conference/event-summary-fc57edcc8848424a9fcb633998853402.aspx'
                    }
                ],
                field_speakers: null,
                event_type: {
                    type: 'event_type--event_type',
                    id: '1eac1538-d334-4e6a-a5ca-082336f6c4a9'
                },
                field_content_tabs: [
                    {
                        type: 'paragraph--paragraph_tab',
                        id: 'fe73322e-8a69-4166-ad71-f01f8fd4acf5',
                        meta: { target_revision_id: 2299 }
                    },
                    {
                        type: 'paragraph--paragraph_tab',
                        id: '7d9c7774-0256-452e-9a0a-3f8b3b08bc1f',
                        meta: { target_revision_id: 2336 }
                    }
                ],
                field_hero_image: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_hero_image'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_hero_image'
                        }
                    }
                },
                field_related_media: [
                    { type: 'media--image', id: 'a2f364fb-515f-4ee8-a273-921ab2e220f3' },
                    { type: 'media--image', id: '625574f9-44ea-4157-8d94-2829075bbab5' }
                ],
                field_sponsors: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_sponsors'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_sponsors'
                        }
                    }
                },
                field_streaming_now: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_streaming_now'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_streaming_now'
                        }
                    }
                },
                field_title_card_image: {
                    type: 'file--file',
                    id: '8fea50e4-22c7-471b-a1e5-960289e31358',
                    meta: { alt: 'GC2020_hero', title: '', width: 1920, height: 1080 }
                },
                field_tracks: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_tracks'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_tracks'
                        }
                    }
                },
                field_venue: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_venue'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_venue'
                        }
                    }
                }
            },
            field_livestream: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/177f7a3b-344d-4071-b255-5672b6c13535/field_livestream?resourceVersion=id%3A6445'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/177f7a3b-344d-4071-b255-5672b6c13535/relationships/field_livestream?resourceVersion=id%3A6445'
                    }
                }
            },
            field_people: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/177f7a3b-344d-4071-b255-5672b6c13535/field_people?resourceVersion=id%3A6445'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/177f7a3b-344d-4071-b255-5672b6c13535/relationships/field_people?resourceVersion=id%3A6445'
                    }
                }
            }
        },
        {
            type: 'node--session',
            id: 'c445692a-c7e1-4349-9eff-03869ed43c3c',
            links: {
                describedby: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/resource/schema'
                },
                self: {
                    href:
                        'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/c445692a-c7e1-4349-9eff-03869ed43c3c?resourceVersion=id%3A6468'
                }
            },
            drupal_internal__nid: 6416,
            drupal_internal__vid: 6468,
            langcode: 'en',
            revision_timestamp: '2020-11-09T20:19:50+00:00',
            revision_log: null,
            status: true,
            title:
                'China\u0027s Inbound and Outbound Investments: Navigating Opportunities and Challenges',
            created: '2020-08-03T14:40:11+00:00',
            changed: '2020-11-09T20:24:06+00:00',
            promote: false,
            sticky: false,
            default_langcode: true,
            revision_translation_affected: true,
            metatag: null,
            path: { alias: null, pid: null, langcode: 'en' },
            publish_on: null,
            unpublish_on: null,
            published_at: '2020-11-09T20:19:50+00:00',
            field_private: false,
            field_short_summary: null,
            field_start_end: {
                value: '2020-10-14T13:00:00-07:00',
                end_value: '2020-10-14T14:00:00-07:00'
            },
            field_long_description: null,
            field_url: null,
            node_type: {
                type: 'node_type--node_type',
                id: '48c0aab1-f34f-40d6-ad34-7f8826b263e9'
            },
            revision_uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            uid: { type: 'user--user', id: '0569f59f-1865-457b-81c5-f3459b3a18cb' },
            field_event: {
                type: 'event--conference',
                id: '49a2e35a-e287-41d9-9301-45fc41da8f13',
                links: {
                    describedby: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/resource/schema'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13'
                    }
                },
                drupal_internal__id: 85,
                langcode: 'en',
                title: '2020 Milken Institute Global Conference',
                created: '2020-07-20T09:03:21+00:00',
                changed: '2020-11-09T21:05:06+00:00',
                default_langcode: true,
                metatag: null,
                path: {
                    alias: '/event/2020-milken-institute-global-conference',
                    pid: 1505,
                    langcode: 'en'
                },
                field_blurb: null,
                field_campaign_id: '70138000000qyBAAAY',
                field_campaign_name: '2020 Milken Institute Global Conference',
                field_campaign_owner: null,
                field_campaign_type: 'Event-GC: Private',
                field_campaign_type_public: 'Event-GC: Public Session',
                field_description: null,
                field_event_date: null,
                field_grid_event_id: 'gc20',
                field_meta_tags: null,
                field_name_short: '2020 Global Conference',
                field_published: false,
                field_registration_deadline: null,
                field_sequential_id: 0,
                field_social_network_links: [
                    {
                        key: 'Facebook',
                        description: '',
                        value: 'http://facebook.com/milkeninstitute'
                    },
                    {
                        key: 'Twitter',
                        description: '',
                        value: 'http://twitter.com/milkeninstitute'
                    },
                    {
                        key: 'LinkedIn',
                        description: '',
                        value: 'http://linkedin.com/company/milkeninstitute'
                    },
                    {
                        key: 'Instagram',
                        description: '',
                        value: 'http://instagram.com/milkeninstitute'
                    },
                    {
                        key: 'Flickr',
                        description: '',
                        value:
                            'http://www.cvent.com/events/2020-milken-institute-global-conference/event-summary-fc57edcc8848424a9fcb633998853402.aspx'
                    }
                ],
                field_speakers: null,
                event_type: {
                    type: 'event_type--event_type',
                    id: '1eac1538-d334-4e6a-a5ca-082336f6c4a9'
                },
                field_content_tabs: [
                    {
                        type: 'paragraph--paragraph_tab',
                        id: 'fe73322e-8a69-4166-ad71-f01f8fd4acf5',
                        meta: { target_revision_id: 2299 }
                    },
                    {
                        type: 'paragraph--paragraph_tab',
                        id: '7d9c7774-0256-452e-9a0a-3f8b3b08bc1f',
                        meta: { target_revision_id: 2336 }
                    }
                ],
                field_hero_image: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_hero_image'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_hero_image'
                        }
                    }
                },
                field_related_media: [
                    { type: 'media--image', id: 'a2f364fb-515f-4ee8-a273-921ab2e220f3' },
                    { type: 'media--image', id: '625574f9-44ea-4157-8d94-2829075bbab5' }
                ],
                field_sponsors: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_sponsors'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_sponsors'
                        }
                    }
                },
                field_streaming_now: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_streaming_now'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_streaming_now'
                        }
                    }
                },
                field_title_card_image: {
                    type: 'file--file',
                    id: '8fea50e4-22c7-471b-a1e5-960289e31358',
                    meta: { alt: 'GC2020_hero', title: '', width: 1920, height: 1080 }
                },
                field_tracks: {
                    data: [],
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_tracks'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_tracks'
                        }
                    }
                },
                field_venue: {
                    data: null,
                    links: {
                        related: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/field_venue'
                        },
                        self: {
                            href:
                                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/event/conference/49a2e35a-e287-41d9-9301-45fc41da8f13/relationships/field_venue'
                        }
                    }
                }
            },
            field_livestream: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/c445692a-c7e1-4349-9eff-03869ed43c3c/field_livestream?resourceVersion=id%3A6468'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/c445692a-c7e1-4349-9eff-03869ed43c3c/relationships/field_livestream?resourceVersion=id%3A6468'
                    }
                }
            },
            field_people: {
                data: [],
                links: {
                    related: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/c445692a-c7e1-4349-9eff-03869ed43c3c/field_people?resourceVersion=id%3A6468'
                    },
                    self: {
                        href:
                            'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session/c445692a-c7e1-4349-9eff-03869ed43c3c/relationships/field_people?resourceVersion=id%3A6468'
                    }
                }
            }
        }
    ],
    meta: { count: '14' },
    links: {
        self: {
            href:
                'https://live-freshdrupalmi.pantheonsite.io/jsonapi/node/session?filter%5Bfield_event.field_grid_event_id%5D=gc20\u0026filter%5Bfield_start_end.value%5D%5Bcondition%5D%5Bpath%5D=field_start_end.value\u0026filter%5Bfield_start_end.value%5D%5Bcondition%5D%5Bvalue%5D=2020-10-14\u0026filter%5Bfield_start_end.value%5D%5Bcondition%5D%5Boperator%5D=STARTS_WITH\u0026include=field_livestream%2Cfield_people%2Cfield_event\u0026jsonapi_include=true\u0026sort=field_start_end.value'
        }
    }
};

const API_URL =
    process.env.NODE_ENV === 'production'
        ? `${process.env.REACT_APP_API_URL}`
        : 'http://localhost:5000';

// @ts-ignore
export const getProgramDay = async (id) => {
    console.log('getProgramDay', API_URL);
    let res = await axios.get(
        `${API_URL}/jsonapi/paragraph/program_day/${id}?jsonapi_include=true`
    );

    return handleResponse(res);
};

// @ts-ignore
export const getDaySessions = async (event_id, date) => {
    const apiParams = new DrupalJsonApiParams();
    apiParams.addInclude(['field_livestream', 'field_people', 'field_event']);
    apiParams.addFilter('field_event.field_grid_event_id', event_id);
    apiParams.addFilter('field_start_end.value', date, 'STARTS_WITH');
    apiParams.addSort('field_start_end.value', 'asc');
    console.log('Query:', apiParams.getQueryObject());
    console.log(
        `Query: ${API_URL}/jsonapi/node/session?jsonapi_include=true&`.concat(
            decodeURIComponent(apiParams.getQueryString())
        )
    );

    // const res = await axios.get(
    //     `${API_URL}/jsonapi/node/session?jsonapi_include=true&`.concat(apiParams.getQueryString())
    // );

    // let resp = await fetch(`${API_URL}/${date}`);
    // console.log('getDaySessions', await axios.get(`${API_URL}/${date}`));
    return session.data;
    // return handleResponse(res);
};

const handleResponse = (res) => {
    if (res.status === 200) {
        console.log('handleResponse', res);
        return res.data;
    }
    if (res.status > 300) {
        return {
            error: 'Error'
        };
    }
    if (res.status > 400) {
        return {
            error: 'Server Error'
        };
    }
};
