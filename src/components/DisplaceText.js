// src/components/DisplaceText.js
import React, { useRef } from 'react';
import { ScrollScene, UseCanvas, styles } from '@14islands/r3f-scroll-rig';
import { WebGLText } from '@14islands/r3f-scroll-rig/powerups';
import { MeshDistortMaterial } from '@react-three/drei';

export function DisplaceText({ children, font, as: Tag = 'span' }) {
    const el = useRef();

    return (
        <>
            <Tag ref={el} className={styles.transparentColorWhenSmooth}>
                {children}
            </Tag>

            <UseCanvas>
                <ScrollScene track={el}>
                    {(props) => (
                        <WebGLText
                            el={el}
                            font={font}
                            glyphGeometryDetail={16}
                            {...props}
                        >
                            <MeshDistortMaterial speed={1.4} distort={0.14} />
                            {children}
                        </WebGLText>
                    )}
                </ScrollScene>
            </UseCanvas>
        </>
    );
}
