import MouseFollower from 'mouse-follower'
import gsap from 'gsap'

MouseFollower.registerGSAP(gsap)

export const cursor = typeof window !== 'undefined' ? new MouseFollower() : null
