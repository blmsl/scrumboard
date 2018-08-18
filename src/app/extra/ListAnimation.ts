import { trigger, transition, style, animate, query, stagger, animateChild } from '@angular/animations';

export const animations = [

    trigger('list', [

        transition(':enter', [
            query(':enter', [])
        ]),

    ]),

    trigger('entriesAnim', [

        transition(':enter', [
            style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
            animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
                style({ transform: 'scale(1)', opacity: 1 }))  // final
        ]),

        transition(':leave', [
            style({ transform: 'scale(1)', opacity: 1, height: '*' }),
            animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
                style({
                    transform: 'scale(0.5)', opacity: 0,
                    height: '0px', margin: '0px'
                }))
        ])

    ]),
];
