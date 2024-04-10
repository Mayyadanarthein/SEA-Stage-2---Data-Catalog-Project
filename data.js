const filters = [
    {
        name: 'Black and White',
        src: 'https://lh3.googleusercontent.com/pw/AP1GczNIo6WGGs8Smndp_9KkdNnFOFXsehLFoJ979a0ck7hXULlh-Jifa7GnWDbWiYT-MxdXm3b1-M4guuuXAZsB75_HOXnUIfbFAJAOfdvuKFsmfVx27A=w2400',
        effect: 'grayscale(100%)'
    },
    {
        name: 'Inverted',
        src: 'https://lh3.googleusercontent.com/pw/AP1GczNZVDR42R0l2tra05zvHW_lJEdUjyV6k1mvTxHHNHwNuU1E4OUTIW8_sTfn-72jugQqECnhQwpSQBjYnd5aNyxW00OY7IybUpLspAoge81YAznIhg=w2400',
        effect: 'invert(100%)'
    },
    {
        name: 'Vintage',
        src: 'https://lh3.googleusercontent.com/pw/AP1GczPmoveH9ZXmGtsWGJWc6mDqLXNhMT1NBKhrGtr2S4pZV1VA-laiSpLlsBMBNZtLk7nI59seP4NPtIIrX8vaYm2pq-czF67HXwgR6avFwmIvG3O_UA=w2400',
        effect: 'sepia(100%)'
    },
    {
        name: 'Blur',
        src: 'https://lh3.googleusercontent.com/pw/AP1GczM-so9mTD_AHW3ZM1pR2uCHVwlY3WxRO2oPLhMJ93xAuD4blOtyrpv5LmKjKIp_zZv_8V6NWMYFOl6X_cprSpZQZsq3UPaHnaKd90npU7lUFL_6rw=w2400',
        effect: 'blur(10px)'
    },
    {
        name: 'Green Apple',
        src: 'https://lh3.googleusercontent.com/pw/AP1GczO4jSctnihk1Ylyprtyhx_bcRtB9V614u2_yP44CHyVRLXXMmSF9ZPyOcyXqT_PMh8Pb-Er22pT1gQIR8QbaKGdc472K3rBvuTxXwLjboWHGerBsg=w2400',
        effect: 'hue-rotate(90deg) saturate(200%)'
    },
    {
        name: 'Midnight',
        src: 'https://lh3.googleusercontent.com/pw/AP1GczP0H3f3PGqn45oW-6suMjdkIZLJ6YUN6-n4QPQDpwDzR1E94Kfq4tgs67LyyNcYMv7arNeHY9dlT91dLGqNDy_AfBOq7aZ4HSuIYVeFQsjzJMO6ig=w2400',
        effect: 'hue-rotate(180deg) brightness(80%) contrast(120%)'
    },
    {
        name: 'Frozen',
        src: 'https://lh3.googleusercontent.com/pw/AP1GczOBIcbSMiA8Y0rjoQPhLLrN-e4RZTEPVGGjYe8Q_TvCiYMWpcqVVsuUbRufk2L0ofizvtD0Qhnw511uHOT6CabWSlbsNhAEbGlYsPITG3ImeDRJBQ=w2400',
        effect: 'hue-rotate(210deg) saturate(120%) brightness(90%)'
    },
    {
        name: 'Halftone',
        src: 'https://lh3.googleusercontent.com/pw/AP1GczP1PUS0valnnWxvdGZro8_3OCVSIffyk7J_b0wg6IGgeuHxa6a0C8m4clhhf7AskibuHPRC7uPydtnFPVopu0z-Ek5_8PGVHHXCoVHxe2RzLwiZzw=w2400',
        effect: 'grayscale(100%) contrast(200%) brightness(80%)'
    },
    {
        name: 'Golden Hour',
        src: 'https://lh3.googleusercontent.com/pw/AP1GczMNxEXxqUJLW3AlXuN0D8BrJQMDNUkWw6L7Cv9SLsSC6Nrv1U7Lcg8QcgmgT1u1hRWqqYmJ762NkPtroKmfFR0OXQ4HCja1N-ABUQ1wF0IL1H1ogQ=w2400',
        effect: 'sepia(20%) saturate(180%) brightness(110%)'
    },
    {
        name: 'Oompa Loompa ',
        src: 'https://lh3.googleusercontent.com/pw/AP1GczOuyYzgyIcgn1gFXkZT5tB7zrA-wCGRaxXhJjDjAJ8VvVhciSPENIcJ7yvV5GUxGVIhV46fZFf3L3omg-WE-5FttW2Yx_s11MD8QderXDRUDEFfHg=w2400',
        effect: 'hue-rotate(0deg) saturate(300%) brightness(120%)'
    },
    {
        name: 'Crimson Dream',
        src: 'https://lh3.googleusercontent.com/pw/AP1GczOGInT3A55i_RE7Qo4YKtnmywv7wwM63s-QEZK5SZ4IHNi23TRN3uVkESt65TD07kcZj0dNqLGw24WwWtTOrcdT7XAuS2F0Cr7MKGUpm88OhuIxow=w2400',
        effect: 'hue-rotate(-20deg) saturate(150%) brightness(110%)'
    },
    {
        name: 'Smurf',
        src: 'https://lh3.googleusercontent.com/pw/AP1GczMjBXwo6uTarGCMxarwXVSl-r_XSpU07DN7IQD8jEZTKsfWF2KrY-bZI3G1iDf_I76mwEf1e9UmUKBP1mOd26Y4SDHXRGpMqi07n8lsFNNcfGHK8g=w2400',
        effect: 'hue-rotate(180deg) saturate(150%) brightness(110%)'
    },
    {
        name: 'Eclipse',
        src: 'https://lh3.googleusercontent.com/pw/AP1GczNJEsO8rHoBkRpwbMX8gLocEtj0iW-7OjM7s1wKu1_v7MxrRqH6FNQBLdbBPTa0F5EElL15ODpPhh_7lEUhS0sLps5W_Ebe5NWHcPdJ1S0cuAXvwA=w2400',
        effect: 'hue-rotate(0deg) saturate(100%) brightness(15%)'
    },
    {
        name: 'Rosy Cheeks',
        src: 'https://lh3.googleusercontent.com/pw/AP1GczN_MEoSoG8dsqcsKGVSeQNcNK0ILtbrsw1DfNMRI9Rh8jxO9IEzlxzRWOhsCw4ltXI6hL5oifXfMNKzsfzyRNBYM5MCxyFZKHZkY8bArlYBuVN5eg=w2400',
        effect: 'sepia(5%) saturate(150%) brightness(110%)'
    },
    {
        name: 'BlueBerry',
        src: 'https://lh3.googleusercontent.com/pw/AP1GczMvJ3YOCbS47d7pKHSITCmLfLW8q_iZUvIEUs49emwCwFUYaDibNMjHYJqqwcElj46jOmuDKz7G99BAc0JXU475lwngbT3c31c3SrCNYAgK60X-jA=w2400',
        effect: 'hue-rotate(220deg) saturate(150%) brightness(110%)'
    }
];
