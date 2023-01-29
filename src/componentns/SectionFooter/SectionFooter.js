import Link from 'next/link'
import React from 'react'

function SectionFooter() {
  return (
    <div id='sectionFooter' className='sectionFooter'>
        <ul>
            <li>
                <a href='/' className='caption active'>English</a>
                <a href='/' className='caption'>Deutsch</a>
                <a href='/' className='caption'>Français</a>
                <a href='/' className='caption'>Русский</a>
                <a href='/' className='caption'>Український</a>
                <a href='/' className='caption'>Білоруська</a>
            </li>
        </ul>
        <Link className='tonLogo' href="https://ton.org" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="220" height="40" viewBox="0 0 220 40"><path d="M1.138 27V13.91h5.165c.992 0 1.838.189 2.537.568a3.853 3.853 0 0 1 1.598 1.566c.37.665.556 1.432.556 2.301 0 .87-.187 1.637-.562 2.301a3.88 3.88 0 0 1-1.63 1.554c-.708.37-1.564.556-2.57.556H2.94v-2.218h2.845c.532 0 .971-.092 1.317-.275.349-.188.609-.446.78-.774.174-.332.261-.713.261-1.144 0-.434-.087-.814-.262-1.138a1.75 1.75 0 0 0-.78-.76c-.349-.183-.792-.275-1.329-.275H3.906V27H1.138Zm16.38.192c-.992 0-1.85-.211-2.575-.633a4.33 4.33 0 0 1-1.668-1.777c-.393-.763-.589-1.647-.589-2.653 0-1.014.197-1.9.588-2.659a4.28 4.28 0 0 1 1.669-1.777c.724-.426 1.583-.639 2.576-.639.993 0 1.85.213 2.57.64a4.266 4.266 0 0 1 1.674 1.776c.392.759.588 1.645.588 2.66 0 1.005-.196 1.89-.588 2.652a4.317 4.317 0 0 1-1.675 1.777c-.72.422-1.576.633-2.57.633Zm.014-2.11c.451 0 .828-.128 1.131-.383.303-.26.53-.614.684-1.061.158-.448.236-.957.236-1.528 0-.57-.078-1.08-.236-1.528-.154-.447-.381-.8-.684-1.06-.303-.26-.68-.39-1.131-.39-.456 0-.84.13-1.151.39-.307.26-.539.613-.697 1.06-.153.448-.23.957-.23 1.528 0 .571.077 1.08.23 1.528.158.447.39.8.697 1.06.311.256.695.384 1.15.384ZM26.312 27l-2.671-9.818h2.755l1.52 6.596h.09l1.586-6.596h2.703l1.611 6.558h.083l1.496-6.558h2.749L35.568 27h-2.883l-1.687-6.175h-.122L29.19 27h-2.877Zm18.103.192c-1.01 0-1.88-.205-2.608-.614a4.203 4.203 0 0 1-1.675-1.751c-.392-.759-.588-1.656-.588-2.691 0-1.01.196-1.897.588-2.66a4.347 4.347 0 0 1 1.656-1.783c.715-.426 1.555-.639 2.518-.639.648 0 1.25.104 1.809.313a4.014 4.014 0 0 1 1.47.927c.422.413.75.933.984 1.56.235.622.352 1.35.352 2.186v.748h-8.29V21.1h5.727c0-.392-.085-.74-.256-1.042a1.833 1.833 0 0 0-.71-.71 2.024 2.024 0 0 0-1.041-.261c-.414 0-.78.096-1.1.287a2.016 2.016 0 0 0-.741.76c-.18.316-.27.668-.275 1.056v1.604c0 .486.09.906.268 1.26.184.353.441.626.774.817.332.192.726.288 1.182.288.303 0 .58-.043.831-.128.252-.085.467-.213.646-.383s.315-.38.409-.627l2.519.166a3.44 3.44 0 0 1-.787 1.586c-.392.447-.899.797-1.521 1.048-.618.247-1.332.37-2.141.37ZM51.198 27v-9.818h2.64v1.713h.102c.18-.61.48-1.07.901-1.38a2.37 2.37 0 0 1 1.458-.474 4.106 4.106 0 0 1 .856.096v2.416a3.548 3.548 0 0 0-.53-.102 4.77 4.77 0 0 0-.62-.045c-.4 0-.759.088-1.074.262a1.93 1.93 0 0 0-.741.716c-.18.307-.269.66-.269 1.061V27h-2.723Zm11.883.192c-1.01 0-1.88-.205-2.608-.614a4.202 4.202 0 0 1-1.675-1.751c-.392-.759-.588-1.656-.588-2.691 0-1.01.196-1.897.588-2.66a4.347 4.347 0 0 1 1.655-1.783c.716-.426 1.556-.639 2.519-.639.648 0 1.25.104 1.809.313a4.013 4.013 0 0 1 1.47.927c.422.413.75.933.984 1.56.235.622.352 1.35.352 2.186v.748h-8.29V21.1h5.727c0-.392-.085-.74-.256-1.042a1.831 1.831 0 0 0-.71-.71 2.024 2.024 0 0 0-1.041-.261c-.414 0-.78.096-1.1.287a2.016 2.016 0 0 0-.741.76c-.18.316-.27.668-.275 1.056v1.604c0 .486.09.906.268 1.26.184.353.441.626.774.817.332.192.726.288 1.182.288.303 0 .58-.043.831-.128.252-.085.467-.213.646-.383s.315-.38.409-.627l2.519.166a3.44 3.44 0 0 1-.787 1.586c-.392.447-.899.797-1.521 1.048-.618.247-1.332.37-2.141.37Zm10.4-.032a3.707 3.707 0 0 1-2.025-.576c-.601-.387-1.079-.956-1.432-1.706-.35-.754-.524-1.68-.524-2.774 0-1.125.18-2.06.543-2.806.362-.75.844-1.31 1.445-1.681a3.701 3.701 0 0 1 1.987-.563c.55 0 1.008.094 1.375.281.37.183.669.414.895.69.23.273.404.542.524.806h.083v-4.922h2.716V27h-2.684v-1.572h-.115a3.506 3.506 0 0 1-.544.811c-.23.265-.53.484-.9.659-.367.174-.815.262-1.343.262Zm.864-2.167c.439 0 .81-.12 1.112-.358.307-.243.541-.582.703-1.016.166-.435.25-.944.25-1.528 0-.584-.081-1.091-.243-1.521-.162-.43-.397-.763-.704-.998-.306-.234-.68-.351-1.118-.351-.448 0-.825.121-1.132.364-.306.243-.539.58-.696 1.01-.158.43-.237.93-.237 1.496 0 .57.079 1.076.237 1.515.162.434.394.775.696 1.023.307.242.684.364 1.132.364ZM86.525 27V13.91h2.722v4.921h.084c.119-.264.291-.533.517-.805a2.73 2.73 0 0 1 .895-.69c.371-.188.831-.282 1.38-.282a3.69 3.69 0 0 1 1.983.563c.605.37 1.088.93 1.45 1.68.363.746.544 1.682.544 2.807 0 1.095-.177 2.02-.53 2.774-.35.75-.827 1.319-1.433 1.706a3.67 3.67 0 0 1-2.02.576c-.528 0-.977-.088-1.348-.262a2.788 2.788 0 0 1-.901-.659 3.345 3.345 0 0 1-.537-.811h-.122V27h-2.684Zm2.665-4.91c0 .585.081 1.094.243 1.529.162.434.396.773.703 1.016.307.239.68.358 1.119.358.443 0 .818-.122 1.125-.364.306-.248.539-.588.696-1.023.162-.44.243-.944.243-1.515 0-.567-.079-1.065-.236-1.496-.158-.43-.39-.767-.697-1.01-.307-.243-.684-.364-1.131-.364-.444 0-.819.117-1.125.351-.303.235-.535.567-.697.998-.162.43-.243.937-.243 1.52Zm10.591 8.592c-.345 0-.669-.028-.971-.083a3.539 3.539 0 0 1-.742-.198l.614-2.033c.32.098.607.151.863.16.26.008.484-.051.671-.18.192-.127.347-.344.467-.651l.16-.416-3.523-10.1h2.864l2.033 7.211h.102l2.052-7.21h2.883l-3.816 10.88a4.594 4.594 0 0 1-.748 1.38 3.06 3.06 0 0 1-1.183.914c-.477.217-1.052.326-1.726.326Z" fill="#fff"/><path d="M144 40c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20Z" fill="#A2FA32"/><path d="M138.435 13.218h11.217c.397 0 .794.058 1.208.251.497.232.76.597.945.867a2.517 2.517 0 0 1 .369 1.317 2.674 2.674 0 0 1-.335 1.307l-7.087 12.174a.87.87 0 0 1-1.506-.006l-6.957-12.148-.006-.01c-.16-.262-.406-.668-.449-1.191a2.377 2.377 0 0 1 .311-1.383 2.361 2.361 0 0 1 1.044-.957c.47-.22.946-.221 1.246-.221Zm4.696 1.739h-4.696c-.309 0-.427.019-.51.058a.629.629 0 0 0-.358.621c.007.074.037.159.214.452a.18.18 0 0 1 .011.018l5.339 9.322V14.957Zm1.739 0v10.517l5.461-9.382a.945.945 0 0 0 .104-.44.774.774 0 0 0-.09-.37 1.402 1.402 0 0 0-.138-.177.263.263 0 0 0-.082-.06 1.037 1.037 0 0 0-.473-.088h-4.782Z" fill="#000" fill-rule="evenodd" clip-rule="evenodd"/><path d="M180.639 16.191V13.91h10.752v2.282h-4.008V27h-2.736V16.191h-4.008Zm24.454 4.264c0 1.427-.27 2.642-.811 3.643-.537 1.001-1.27 1.766-2.199 2.295-.925.524-1.965.786-3.12.786-1.163 0-2.207-.264-3.132-.793-.924-.528-1.655-1.293-2.192-2.294-.537-1.002-.806-2.214-.806-3.637 0-1.428.269-2.642.806-3.644.537-1.001 1.268-1.764 2.192-2.288.925-.529 1.969-.793 3.132-.793 1.155 0 2.195.264 3.12.793.929.524 1.662 1.287 2.199 2.288.541 1.002.811 2.216.811 3.643Zm-2.806 0c0-.925-.138-1.705-.415-2.34-.273-.635-.659-1.116-1.157-1.444-.499-.329-1.083-.493-1.752-.493s-1.252.164-1.751.492c-.499.329-.886.81-1.163 1.445-.273.635-.409 1.415-.409 2.34 0 .924.136 1.704.409 2.339.277.635.664 1.116 1.163 1.445.499.328 1.082.492 1.751.492.669 0 1.253-.164 1.752-.492.498-.329.884-.81 1.157-1.445.277-.635.415-1.415.415-2.34Zm16.306-6.546V27h-2.39l-5.696-8.24h-.096V27h-2.767V13.91h2.429l5.65 8.232h.115v-8.233h2.755Z" fill="currentColor"/></svg>
        </Link>
    </div>
  )
}

export default SectionFooter