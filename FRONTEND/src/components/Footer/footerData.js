import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


export const footMenu = [
    {
        id:1,
        title : "Help",
        menu : [
            {
                id : 1,
                link : "FAQS",
                path : "/"
            },
            {
                id : 2,
                link : "Track Order",
                path : "/"
            },
            {
                id : 3,
                link : "Cancel Order",
                path : "/"
            },
            {
                id : 4,
                link : "Return Order",
                path : "/"
            },
            {
                id : 5,
                link : "Warranty Info",
                path : "/"
            },

        ]
    },
    {
        id : 2,
        title: "Policies",
        menu : [
            {
                id : 1,
                link : "Return Policy",
                path : "/"
            },
            {
                id : 2,
                link : "Security",
                path : "/"
            },
            {
                id : 3,
                link : "Site Map",
                path : "/"
            },
            {
                id : 4,
                link : "Privacy Policy",
                path : "/"
            },
            {
                id : 5,
                link : "Terms & Conditions",
                path : "/"
            },
        ]
    },
    {
        id : 3,
        title : "Company",
        menu : [
            {
                id : 1,
                link : "About",
                path : "/"
            },
            {
                id : 2,
                link : "Contact",
                path : "/"
            },
            {
                id : 3,
                link : "Services",
                path : "/"
            },
            {
                id : 4,
                link : "Affliates",
                path : "/"
            },
        ]
    }
];

export const footSocial = [
    {
        id :1,
        icon : <FaFacebookF />,
        path : "/"
    },
    {
        id :2,
        icon : <FaTwitter />,
        path : "/"
    },
    {
        id :3,
        icon : <FaInstagram />,
        path : "/"
    },
    {
        id :4,
        icon : <FaLinkedinIn />,
        path : "/"
    },
]