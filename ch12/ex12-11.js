// 코드 12-11 publishReplay 연산자의 구현 코드

export function publishReplay(bufferSize,
    windowTime, selectorOrScheduler, scheduler) {
    if (selectorOrScheduler && typeof selectorOrScheduler !== 'function') {
	scheduler = selectorOrScheduler;
    }
    const selector = typeof selectorOrScheduler === 'function' ?
	  selectorOrScheduler : undefined;
    const subject = new ReplaySubject(bufferSize, windowTime, scheduler);
    return (source) => multicast(() => subject, selector)(source);
}
