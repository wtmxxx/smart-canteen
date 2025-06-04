export {};
declare global {
    const NULL: any;
    const Long: $.java.lang.Long_C;
    type Long = $.java.lang.Long;
    type long = number | bigint | Long;
    function newArray(type: any, ...dimensions: number[]): any;
    const BigDecimal: $.java.math.BigDecimal_C;
    type BigDecimal = $.java.math.BigDecimal;
    namespace $ {
        function type(clsName: string): any;
    }
    namespace $ {
        namespace java.awt {
            interface AWTEvent_S {
                readonly ACTION_EVENT_MASK: long;
                readonly ADJUSTMENT_EVENT_MASK: long;
                readonly COMPONENT_EVENT_MASK: long;
                readonly CONTAINER_EVENT_MASK: long;
                readonly FOCUS_EVENT_MASK: long;
                readonly HIERARCHY_BOUNDS_EVENT_MASK: long;
                readonly HIERARCHY_EVENT_MASK: long;
                readonly INPUT_METHOD_EVENT_MASK: long;
                readonly INVOCATION_EVENT_MASK: long;
                readonly ITEM_EVENT_MASK: long;
                readonly KEY_EVENT_MASK: long;
                readonly MOUSE_EVENT_MASK: long;
                readonly MOUSE_MOTION_EVENT_MASK: long;
                readonly MOUSE_WHEEL_EVENT_MASK: long;
                readonly PAINT_EVENT_MASK: long;
                readonly RESERVED_ID_MAX: number;
                readonly TEXT_EVENT_MASK: long;
                readonly WINDOW_EVENT_MASK: long;
                readonly WINDOW_FOCUS_EVENT_MASK: long;
                readonly WINDOW_STATE_EVENT_MASK: long;
            }
            type AWTEvent_ST = java.util.EventObject_S & AWTEvent_S;
            interface AWTEvent_C extends AWTEvent_ST {
                new (arg0: Event): AWTEvent;
                new (arg0: any, arg1: number): AWTEvent;
            }
            interface AWTEvent$ {
                getID(): number;
                paramString(): string;
                setSource(arg0: any): void;
            }
            type AWTEvent = java.util.EventObject & AWTEvent_S & AWTEvent$;
            interface BufferCapabilities_S {
            }
            type BufferCapabilities_ST = java.lang.Cloneable_S & BufferCapabilities_S;
            interface BufferCapabilities_C extends BufferCapabilities_ST {
                new (arg0: ImageCapabilities, arg1: ImageCapabilities, arg2: BufferCapabilities$FlipContents): BufferCapabilities;
            }
            interface BufferCapabilities$ {
                clone(): any;
                getBackBufferCapabilities(): ImageCapabilities;
                getFlipContents(): BufferCapabilities$FlipContents;
                getFrontBufferCapabilities(): ImageCapabilities;
                isFullScreenRequired(): boolean;
                isMultiBufferAvailable(): boolean;
                isPageFlipping(): boolean;
            }
            type BufferCapabilities = java.lang.Cloneable & BufferCapabilities_S & BufferCapabilities$;
            interface BufferCapabilities$FlipContents_S {
                readonly BACKGROUND: BufferCapabilities$FlipContents;
                readonly COPIED: BufferCapabilities$FlipContents;
                readonly PRIOR: BufferCapabilities$FlipContents;
                readonly UNDEFINED: BufferCapabilities$FlipContents;
            }
            type BufferCapabilities$FlipContents_ST = __AttributeValue_S & BufferCapabilities$FlipContents_S;
            interface BufferCapabilities$FlipContents_C extends BufferCapabilities$FlipContents_ST {
                new (): BufferCapabilities$FlipContents;
            }
            interface BufferCapabilities$FlipContents$ {
            }
            type BufferCapabilities$FlipContents = __AttributeValue & BufferCapabilities$FlipContents_S & BufferCapabilities$FlipContents$;
            interface Color_S {
                readonly BLACK: Color;
                readonly BLUE: Color;
                readonly CYAN: Color;
                readonly DARK_GRAY: Color;
                readonly GRAY: Color;
                readonly GREEN: Color;
                readonly LIGHT_GRAY: Color;
                readonly MAGENTA: Color;
                readonly ORANGE: Color;
                readonly PINK: Color;
                readonly RED: Color;
                readonly WHITE: Color;
                readonly YELLOW: Color;
                readonly black: Color;
                readonly blue: Color;
                readonly cyan: Color;
                readonly darkGray: Color;
                readonly gray: Color;
                readonly green: Color;
                readonly lightGray: Color;
                readonly magenta: Color;
                readonly orange: Color;
                readonly pink: Color;
                readonly red: Color;
                readonly white: Color;
                readonly yellow: Color;
                HSBtoRGB(arg0: number, arg1: number, arg2: number): number;
                RGBtoHSB(arg0: number, arg1: number, arg2: number, arg3: number[]): number[];
                decode(arg0: string): Color;
                getColor(arg0: string): Color;
                getColor(arg0: string, arg1: number): Color;
                getColor(arg0: string, arg1: Color): Color;
                getHSBColor(arg0: number, arg1: number, arg2: number): Color;
            }
            type Color_ST = Paint_S & java.io.Serializable_S & Color_S;
            interface Color_C extends Color_ST {
                new (arg0: number): Color;
                new (arg0: number, arg1: boolean): Color;
                new (arg0: number, arg1: number, arg2: number): Color;
                new (arg0: java.awt.color.ColorSpace, arg1: number[], arg2: number): Color;
                new (arg0: number, arg1: number, arg2: number, arg3: number): Color;
            }
            interface Color$ {
                brighter(): this;
                darker(): this;
                getAlpha(): number;
                getBlue(): number;
                getColorComponents(arg0: number[]): number[];
                getColorComponents(arg0: java.awt.color.ColorSpace, arg1: number[]): number[];
                getColorSpace(): java.awt.color.ColorSpace;
                getComponents(arg0: number[]): number[];
                getComponents(arg0: java.awt.color.ColorSpace, arg1: number[]): number[];
                getGreen(): number;
                getRGB(): number;
                getRGBColorComponents(arg0: number[]): number[];
                getRGBComponents(arg0: number[]): number[];
                getRed(): number;
            }
            type Color = Paint & java.io.Serializable & Color_S & Color$;
            interface Component_S {
                readonly BOTTOM_ALIGNMENT: number;
                readonly CENTER_ALIGNMENT: number;
                readonly LEFT_ALIGNMENT: number;
                readonly RIGHT_ALIGNMENT: number;
                readonly TOP_ALIGNMENT: number;
            }
            type Component_ST = java.awt.image.ImageObserver_S & MenuContainer_S & java.io.Serializable_S & Component_S;
            interface Component_C extends Component_ST {
            }
            interface Component$ {
                add(arg0: PopupMenu): void;
                addComponentListener(arg0: java.awt.event.ComponentListener): void;
                addFocusListener(arg0: java.awt.event.FocusListener): void;
                addHierarchyBoundsListener(arg0: java.awt.event.HierarchyBoundsListener): void;
                addHierarchyListener(arg0: java.awt.event.HierarchyListener): void;
                addInputMethodListener(arg0: java.awt.event.InputMethodListener): void;
                addKeyListener(arg0: java.awt.event.KeyListener): void;
                addMouseListener(arg0: java.awt.event.MouseListener): void;
                addMouseMotionListener(arg0: java.awt.event.MouseMotionListener): void;
                addMouseWheelListener(arg0: java.awt.event.MouseWheelListener): void;
                addNotify(): void;
                addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void;
                addPropertyChangeListener(arg0: string, arg1: java.beans.PropertyChangeListener): void;
                applyComponentOrientation(arg0: ComponentOrientation): void;
                areFocusTraversalKeysSet(arg0: number): boolean;
                checkImage(arg0: Image, arg1: java.awt.image.ImageObserver): number;
                checkImage(arg0: Image, arg1: number, arg2: number, arg3: java.awt.image.ImageObserver): number;
                contains(arg0: Point): boolean;
                contains(arg0: number, arg1: number): boolean;
                createImage(arg0: java.awt.image.ImageProducer): Image;
                createImage(arg0: number, arg1: number): Image;
                createVolatileImage(arg0: number, arg1: number): java.awt.image.VolatileImage;
                createVolatileImage(arg0: number, arg1: number, arg2: ImageCapabilities): java.awt.image.VolatileImage;
                dispatchEvent(arg0: AWTEvent): void;
                doLayout(): void;
                enableInputMethods(arg0: boolean): void;
                firePropertyChange(arg0: string, arg1: long, arg2: long): void;
                firePropertyChange(arg0: string, arg1: number, arg2: number): void;
                firePropertyChange(arg0: string, arg1: string, arg2: string): void;
                getAccessibleContext(): javax.accessibility.AccessibleContext;
                getAlignmentX(): number;
                getAlignmentY(): number;
                getBackground(): Color;
                getBaseline(arg0: number, arg1: number): number;
                getBaselineResizeBehavior(): Component$BaselineResizeBehavior;
                getBounds(): Rectangle;
                getBounds(arg0: Rectangle): Rectangle;
                getColorModel(): java.awt.image.ColorModel;
                getComponentAt(arg0: Point): this;
                getComponentAt(arg0: number, arg1: number): this;
                getComponentListeners(): java.awt.event.ComponentListener[];
                getComponentOrientation(): ComponentOrientation;
                getCursor(): Cursor;
                getDropTarget(): java.awt.dnd.DropTarget;
                getFocusCycleRootAncestor(): Container;
                getFocusListeners(): java.awt.event.FocusListener[];
                getFocusTraversalKeys(arg0: number): java.util.Set;
                getFocusTraversalKeysEnabled(): boolean;
                getFontMetrics(arg0: Font): FontMetrics;
                getForeground(): Color;
                getGraphics(): Graphics;
                getGraphicsConfiguration(): GraphicsConfiguration;
                getHeight(): number;
                getHierarchyBoundsListeners(): java.awt.event.HierarchyBoundsListener[];
                getHierarchyListeners(): java.awt.event.HierarchyListener[];
                getIgnoreRepaint(): boolean;
                getInputContext(): java.awt.im.InputContext;
                getInputMethodListeners(): java.awt.event.InputMethodListener[];
                getInputMethodRequests(): java.awt.im.InputMethodRequests;
                getKeyListeners(): java.awt.event.KeyListener[];
                getListeners(arg0: java.lang.Class): java.util.EventListener[];
                getLocale(): java.util.Locale;
                getLocation(): Point;
                getLocation(arg0: Point): Point;
                getLocationOnScreen(): Point;
                getMaximumSize(): Dimension;
                getMinimumSize(): Dimension;
                getMouseListeners(): java.awt.event.MouseListener[];
                getMouseMotionListeners(): java.awt.event.MouseMotionListener[];
                getMousePosition(): Point;
                getMouseWheelListeners(): java.awt.event.MouseWheelListener[];
                getName(): string;
                getParent(): Container;
                getPreferredSize(): Dimension;
                getPropertyChangeListeners(): java.beans.PropertyChangeListener[];
                getPropertyChangeListeners(arg0: string): java.beans.PropertyChangeListener[];
                getSize(): Dimension;
                getSize(arg0: Dimension): Dimension;
                getToolkit(): Toolkit;
                getTreeLock(): any;
                getWidth(): number;
                getX(): number;
                getY(): number;
                hasFocus(): boolean;
                invalidate(): void;
                isBackgroundSet(): boolean;
                isCursorSet(): boolean;
                isDisplayable(): boolean;
                isDoubleBuffered(): boolean;
                isEnabled(): boolean;
                isFocusCycleRoot(arg0: Container): boolean;
                isFocusOwner(): boolean;
                isFocusable(): boolean;
                isFontSet(): boolean;
                isForegroundSet(): boolean;
                isLightweight(): boolean;
                isMaximumSizeSet(): boolean;
                isMinimumSizeSet(): boolean;
                isOpaque(): boolean;
                isPreferredSizeSet(): boolean;
                isShowing(): boolean;
                isValid(): boolean;
                isVisible(): boolean;
                list(): void;
                list(arg0: java.io.PrintWriter): void;
                list(arg0: java.io.PrintStream): void;
                list(arg0: java.io.PrintWriter, arg1: number): void;
                list(arg0: java.io.PrintStream, arg1: number): void;
                paint(arg0: Graphics): void;
                paintAll(arg0: Graphics): void;
                prepareImage(arg0: Image, arg1: java.awt.image.ImageObserver): boolean;
                prepareImage(arg0: Image, arg1: number, arg2: number, arg3: java.awt.image.ImageObserver): boolean;
                print(arg0: Graphics): void;
                printAll(arg0: Graphics): void;
                removeComponentListener(arg0: java.awt.event.ComponentListener): void;
                removeFocusListener(arg0: java.awt.event.FocusListener): void;
                removeHierarchyBoundsListener(arg0: java.awt.event.HierarchyBoundsListener): void;
                removeHierarchyListener(arg0: java.awt.event.HierarchyListener): void;
                removeInputMethodListener(arg0: java.awt.event.InputMethodListener): void;
                removeKeyListener(arg0: java.awt.event.KeyListener): void;
                removeMouseListener(arg0: java.awt.event.MouseListener): void;
                removeMouseMotionListener(arg0: java.awt.event.MouseMotionListener): void;
                removeMouseWheelListener(arg0: java.awt.event.MouseWheelListener): void;
                removeNotify(): void;
                removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void;
                removePropertyChangeListener(arg0: string, arg1: java.beans.PropertyChangeListener): void;
                repaint(): void;
                repaint(arg0: long): void;
                repaint(arg0: number, arg1: number, arg2: number, arg3: number): void;
                repaint(arg0: long, arg1: number, arg2: number, arg3: number, arg4: number): void;
                requestFocus(): void;
                requestFocusInWindow(): boolean;
                revalidate(): void;
                setBackground(arg0: Color): void;
                setBounds(arg0: Rectangle): void;
                setBounds(arg0: number, arg1: number, arg2: number, arg3: number): void;
                setComponentOrientation(arg0: ComponentOrientation): void;
                setCursor(arg0: Cursor): void;
                setDropTarget(arg0: java.awt.dnd.DropTarget): void;
                setEnabled(arg0: boolean): void;
                setFocusTraversalKeys(arg0: number, arg1: java.util.Set): void;
                setFocusTraversalKeysEnabled(arg0: boolean): void;
                setFocusable(arg0: boolean): void;
                setFont(arg0: Font): void;
                setForeground(arg0: Color): void;
                setIgnoreRepaint(arg0: boolean): void;
                setLocale(arg0: java.util.Locale): void;
                setLocation(arg0: Point): void;
                setLocation(arg0: number, arg1: number): void;
                setMaximumSize(arg0: Dimension): void;
                setMinimumSize(arg0: Dimension): void;
                setName(arg0: string): void;
                setPreferredSize(arg0: Dimension): void;
                setSize(arg0: Dimension): void;
                setSize(arg0: number, arg1: number): void;
                setVisible(arg0: boolean): void;
                transferFocus(): void;
                transferFocusBackward(): void;
                transferFocusUpCycle(): void;
                update(arg0: Graphics): void;
                validate(): void;
            }
            type Component = java.awt.image.ImageObserver & MenuContainer & java.io.Serializable & Component_S & Component$;
            enum Component$BaselineResizeBehavior {
                CONSTANT_ASCENT,
                CONSTANT_DESCENT,
                CENTER_OFFSET,
                OTHER
            }
            interface ComponentOrientation_S {
                readonly LEFT_TO_RIGHT: ComponentOrientation;
                readonly RIGHT_TO_LEFT: ComponentOrientation;
                readonly UNKNOWN: ComponentOrientation;
                getOrientation(arg0: java.util.Locale): ComponentOrientation;
            }
            type ComponentOrientation_ST = java.io.Serializable_S & ComponentOrientation_S;
            interface ComponentOrientation_C extends ComponentOrientation_ST {
                new (): ComponentOrientation;
            }
            interface ComponentOrientation$ {
                isHorizontal(): boolean;
                isLeftToRight(): boolean;
            }
            type ComponentOrientation = java.io.Serializable & ComponentOrientation_S & ComponentOrientation$;
            interface Composite_S {
            }
            interface Composite$ {
                createContext(arg0: java.awt.image.ColorModel, arg1: java.awt.image.ColorModel, arg2: RenderingHints): CompositeContext;
            }
            type Composite = Composite_S & Composite$;
            interface CompositeContext_S {
            }
            interface CompositeContext$ {
                compose(arg0: java.awt.image.Raster, arg1: java.awt.image.Raster, arg2: java.awt.image.WritableRaster): void;
                dispose(): void;
            }
            type CompositeContext = CompositeContext_S & CompositeContext$;
            interface Container_S {
            }
            type Container_ST = Component_S & Container_S;
            interface Container_C extends Container_ST {
                new (): Container;
            }
            interface Container$ {
                add(arg0: Component): Component;
                add(arg0: Component, arg1: number): Component;
                add(arg0: Component, arg1: any): void;
                add(arg0: string, arg1: Component): Component;
                add(arg0: Component, arg1: any, arg2: number): void;
                addContainerListener(arg0: java.awt.event.ContainerListener): void;
                findComponentAt(arg0: Point): Component;
                findComponentAt(arg0: number, arg1: number): Component;
                getComponent(arg0: number): Component;
                getComponentCount(): number;
                getComponentZOrder(arg0: Component): number;
                getComponents(): Component[];
                getContainerListeners(): java.awt.event.ContainerListener[];
                getFocusTraversalPolicy(): FocusTraversalPolicy;
                getInsets(): Insets;
                getLayout(): LayoutManager;
                getMousePosition(arg0: boolean): Point;
                isAncestorOf(arg0: Component): boolean;
                isFocusCycleRoot(): boolean;
                isFocusTraversalPolicyProvider(): boolean;
                isFocusTraversalPolicySet(): boolean;
                isValidateRoot(): boolean;
                paintComponents(arg0: Graphics): void;
                printComponents(arg0: Graphics): void;
                remove(arg0: number): void;
                remove(arg0: Component): void;
                removeAll(): void;
                removeContainerListener(arg0: java.awt.event.ContainerListener): void;
                setComponentZOrder(arg0: Component, arg1: number): void;
                setFocusCycleRoot(arg0: boolean): void;
                setFocusTraversalPolicy(arg0: FocusTraversalPolicy): void;
                setFocusTraversalPolicyProvider(arg0: boolean): void;
                setLayout(arg0: LayoutManager): void;
                transferFocusDownCycle(): void;
            }
            type Container = Component & Container_S & Container$;
            interface Cursor_S {
                readonly CROSSHAIR_CURSOR: number;
                readonly CUSTOM_CURSOR: number;
                readonly DEFAULT_CURSOR: number;
                readonly E_RESIZE_CURSOR: number;
                readonly HAND_CURSOR: number;
                readonly MOVE_CURSOR: number;
                readonly NE_RESIZE_CURSOR: number;
                readonly NW_RESIZE_CURSOR: number;
                readonly N_RESIZE_CURSOR: number;
                readonly SE_RESIZE_CURSOR: number;
                readonly SW_RESIZE_CURSOR: number;
                readonly S_RESIZE_CURSOR: number;
                readonly TEXT_CURSOR: number;
                readonly WAIT_CURSOR: number;
                readonly W_RESIZE_CURSOR: number;
                getDefaultCursor(): Cursor;
                getPredefinedCursor(arg0: number): Cursor;
                getSystemCustomCursor(arg0: string): Cursor;
            }
            type Cursor_ST = java.io.Serializable_S & Cursor_S;
            interface Cursor_C extends Cursor_ST {
                new (arg0: number): Cursor;
            }
            interface Cursor$ {
                getName(): string;
                getType(): number;
            }
            type Cursor = java.io.Serializable & Cursor_S & Cursor$;
            enum Dialog$ModalExclusionType {
                NO_EXCLUDE,
                APPLICATION_EXCLUDE,
                TOOLKIT_EXCLUDE
            }
            enum Dialog$ModalityType {
                MODELESS,
                DOCUMENT_MODAL,
                APPLICATION_MODAL,
                TOOLKIT_MODAL
            }
            interface Dimension_S {
            }
            type Dimension_ST = java.awt.geom.Dimension2D_S & java.io.Serializable_S & Dimension_S;
            interface Dimension_C extends Dimension_ST {
                new (): Dimension;
                new (arg0: Dimension): Dimension;
                new (arg0: number, arg1: number): Dimension;
            }
            interface Dimension$ {
                height: number;
                width: number;
                getSize(): this;
                setSize(arg0: Dimension): void;
                setSize(arg0: number, arg1: number): void;
            }
            type Dimension = java.awt.geom.Dimension2D & java.io.Serializable & Dimension_S & Dimension$;
            interface DisplayMode_S {
                readonly BIT_DEPTH_MULTI: number;
                readonly REFRESH_RATE_UNKNOWN: number;
            }
            interface DisplayMode_C extends DisplayMode_S {
                new (arg0: number, arg1: number, arg2: number, arg3: number): DisplayMode;
            }
            interface DisplayMode$ {
                equals(arg0: DisplayMode): boolean;
                getBitDepth(): number;
                getHeight(): number;
                getRefreshRate(): number;
                getWidth(): number;
            }
            type DisplayMode = DisplayMode_S & DisplayMode$;
            interface Event_S {
                readonly ACTION_EVENT: number;
                readonly ALT_MASK: number;
                readonly BACK_SPACE: number;
                readonly CAPS_LOCK: number;
                readonly CTRL_MASK: number;
                readonly DELETE: number;
                readonly DOWN: number;
                readonly END: number;
                readonly ENTER: number;
                readonly ESCAPE: number;
                readonly F1: number;
                readonly F10: number;
                readonly F11: number;
                readonly F12: number;
                readonly F2: number;
                readonly F3: number;
                readonly F4: number;
                readonly F5: number;
                readonly F6: number;
                readonly F7: number;
                readonly F8: number;
                readonly F9: number;
                readonly GOT_FOCUS: number;
                readonly HOME: number;
                readonly INSERT: number;
                readonly KEY_ACTION: number;
                readonly KEY_ACTION_RELEASE: number;
                readonly KEY_PRESS: number;
                readonly KEY_RELEASE: number;
                readonly LEFT: number;
                readonly LIST_DESELECT: number;
                readonly LIST_SELECT: number;
                readonly LOAD_FILE: number;
                readonly LOST_FOCUS: number;
                readonly META_MASK: number;
                readonly MOUSE_DOWN: number;
                readonly MOUSE_DRAG: number;
                readonly MOUSE_ENTER: number;
                readonly MOUSE_EXIT: number;
                readonly MOUSE_MOVE: number;
                readonly MOUSE_UP: number;
                readonly NUM_LOCK: number;
                readonly PAUSE: number;
                readonly PGDN: number;
                readonly PGUP: number;
                readonly PRINT_SCREEN: number;
                readonly RIGHT: number;
                readonly SAVE_FILE: number;
                readonly SCROLL_ABSOLUTE: number;
                readonly SCROLL_BEGIN: number;
                readonly SCROLL_END: number;
                readonly SCROLL_LINE_DOWN: number;
                readonly SCROLL_LINE_UP: number;
                readonly SCROLL_LOCK: number;
                readonly SCROLL_PAGE_DOWN: number;
                readonly SCROLL_PAGE_UP: number;
                readonly SHIFT_MASK: number;
                readonly TAB: number;
                readonly UP: number;
                readonly WINDOW_DEICONIFY: number;
                readonly WINDOW_DESTROY: number;
                readonly WINDOW_EXPOSE: number;
                readonly WINDOW_ICONIFY: number;
                readonly WINDOW_MOVED: number;
            }
            type Event_ST = java.io.Serializable_S & Event_S;
            interface Event_C extends Event_ST {
                new (arg0: any, arg1: number, arg2: any): Event;
                new (arg0: any, arg1: long, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): Event;
                new (arg0: any, arg1: long, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: any): Event;
            }
            interface Event$ {
                arg: any;
                clickCount: number;
                evt: Event;
                id: number;
                key: number;
                modifiers: number;
                target: any;
                when: long;
                x: number;
                y: number;
                controlDown(): boolean;
                metaDown(): boolean;
                shiftDown(): boolean;
                translate(arg0: number, arg1: number): void;
            }
            type Event = java.io.Serializable & Event_S & Event$;
            interface EventQueue_S {
                getCurrentEvent(): AWTEvent;
                getMostRecentEventTime(): long;
                invokeAndWait(arg0: java.lang.Runnable): void;
                invokeLater(arg0: java.lang.Runnable): void;
                isDispatchThread(): boolean;
            }
            interface EventQueue_C extends EventQueue_S {
                new (): EventQueue;
            }
            interface EventQueue$ {
                createSecondaryLoop(): SecondaryLoop;
                getNextEvent(): AWTEvent;
                peekEvent(): AWTEvent;
                peekEvent(arg0: number): AWTEvent;
                postEvent(arg0: AWTEvent): void;
                push(arg0: EventQueue): void;
            }
            type EventQueue = EventQueue_S & EventQueue$;
            interface FocusTraversalPolicy_S {
            }
            interface FocusTraversalPolicy_C extends FocusTraversalPolicy_S {
                new (): FocusTraversalPolicy;
            }
            interface FocusTraversalPolicy$ {
                getComponentAfter(arg0: Container, arg1: Component): Component;
                getComponentBefore(arg0: Container, arg1: Component): Component;
                getDefaultComponent(arg0: Container): Component;
                getFirstComponent(arg0: Container): Component;
                getInitialComponent(arg0: Window): Component;
                getLastComponent(arg0: Container): Component;
            }
            type FocusTraversalPolicy = FocusTraversalPolicy_S & FocusTraversalPolicy$;
            interface Font_S {
                readonly BOLD: number;
                readonly CENTER_BASELINE: number;
                readonly DIALOG: string;
                readonly DIALOG_INPUT: string;
                readonly HANGING_BASELINE: number;
                readonly ITALIC: number;
                readonly LAYOUT_LEFT_TO_RIGHT: number;
                readonly LAYOUT_NO_LIMIT_CONTEXT: number;
                readonly LAYOUT_NO_START_CONTEXT: number;
                readonly LAYOUT_RIGHT_TO_LEFT: number;
                readonly MONOSPACED: string;
                readonly PLAIN: number;
                readonly ROMAN_BASELINE: number;
                readonly SANS_SERIF: string;
                readonly SERIF: string;
                readonly TRUETYPE_FONT: number;
                readonly TYPE1_FONT: number;
                createFont(arg0: number, arg1: java.io.File): Font;
                createFont(arg0: number, arg1: java.io.InputStream): Font;
                decode(arg0: string): Font;
                getFont(arg0: java.util.Map): Font;
                getFont(arg0: string): Font;
                getFont(arg0: string, arg1: Font): Font;
            }
            type Font_ST = java.io.Serializable_S & Font_S;
            interface Font_C extends Font_ST {
                new (arg0: java.util.Map): Font;
                new (arg0: string, arg1: number, arg2: number): Font;
            }
            interface Font$ {
                canDisplay(arg0: number): boolean;
                canDisplay(arg0: string): boolean;
                canDisplayUpTo(arg0: string): number;
                canDisplayUpTo(arg0: string[], arg1: number, arg2: number): number;
                canDisplayUpTo(arg0: java.text.CharacterIterator, arg1: number, arg2: number): number;
                createGlyphVector(arg0: java.awt.font.FontRenderContext, arg1: string[]): java.awt.font.GlyphVector;
                createGlyphVector(arg0: java.awt.font.FontRenderContext, arg1: number[]): java.awt.font.GlyphVector;
                createGlyphVector(arg0: java.awt.font.FontRenderContext, arg1: java.text.CharacterIterator): java.awt.font.GlyphVector;
                createGlyphVector(arg0: java.awt.font.FontRenderContext, arg1: string): java.awt.font.GlyphVector;
                deriveFont(arg0: number): this;
                deriveFont(arg0: java.util.Map): this;
                deriveFont(arg0: java.awt.geom.AffineTransform): this;
                deriveFont(arg0: number, arg1: number): this;
                deriveFont(arg0: number, arg1: java.awt.geom.AffineTransform): this;
                getAttributes(): java.util.Map;
                getAvailableAttributes(): java.text.AttributedCharacterIterator$Attribute[];
                getBaselineFor(arg0: string): number;
                getFamily(): string;
                getFamily(arg0: java.util.Locale): string;
                getFontName(): string;
                getFontName(arg0: java.util.Locale): string;
                getItalicAngle(): number;
                getLineMetrics(arg0: string, arg1: java.awt.font.FontRenderContext): java.awt.font.LineMetrics;
                getLineMetrics(arg0: string[], arg1: number, arg2: number, arg3: java.awt.font.FontRenderContext): java.awt.font.LineMetrics;
                getLineMetrics(arg0: java.text.CharacterIterator, arg1: number, arg2: number, arg3: java.awt.font.FontRenderContext): java.awt.font.LineMetrics;
                getLineMetrics(arg0: string, arg1: number, arg2: number, arg3: java.awt.font.FontRenderContext): java.awt.font.LineMetrics;
                getMaxCharBounds(arg0: java.awt.font.FontRenderContext): java.awt.geom.Rectangle2D;
                getMissingGlyphCode(): number;
                getName(): string;
                getNumGlyphs(): number;
                getPSName(): string;
                getSize(): number;
                getSize2D(): number;
                getStringBounds(arg0: string, arg1: java.awt.font.FontRenderContext): java.awt.geom.Rectangle2D;
                getStringBounds(arg0: string[], arg1: number, arg2: number, arg3: java.awt.font.FontRenderContext): java.awt.geom.Rectangle2D;
                getStringBounds(arg0: java.text.CharacterIterator, arg1: number, arg2: number, arg3: java.awt.font.FontRenderContext): java.awt.geom.Rectangle2D;
                getStringBounds(arg0: string, arg1: number, arg2: number, arg3: java.awt.font.FontRenderContext): java.awt.geom.Rectangle2D;
                getStyle(): number;
                getTransform(): java.awt.geom.AffineTransform;
                hasLayoutAttributes(): boolean;
                hasUniformLineMetrics(): boolean;
                isBold(): boolean;
                isItalic(): boolean;
                isPlain(): boolean;
                isTransformed(): boolean;
                layoutGlyphVector(arg0: java.awt.font.FontRenderContext, arg1: string[], arg2: number, arg3: number, arg4: number): java.awt.font.GlyphVector;
            }
            type Font = java.io.Serializable & Font_S & Font$;
            interface FontMetrics_S {
            }
            type FontMetrics_ST = java.io.Serializable_S & FontMetrics_S;
            interface FontMetrics_C extends FontMetrics_ST {
            }
            interface FontMetrics$ {
                bytesWidth(arg0: number[], arg1: number, arg2: number): number;
                charWidth(arg0: number): number;
                charWidth(arg0: string): number;
                charsWidth(arg0: string[], arg1: number, arg2: number): number;
                getAscent(): number;
                getDescent(): number;
                getFont(): Font;
                getFontRenderContext(): java.awt.font.FontRenderContext;
                getHeight(): number;
                getLeading(): number;
                getLineMetrics(arg0: string, arg1: Graphics): java.awt.font.LineMetrics;
                getLineMetrics(arg0: string[], arg1: number, arg2: number, arg3: Graphics): java.awt.font.LineMetrics;
                getLineMetrics(arg0: java.text.CharacterIterator, arg1: number, arg2: number, arg3: Graphics): java.awt.font.LineMetrics;
                getLineMetrics(arg0: string, arg1: number, arg2: number, arg3: Graphics): java.awt.font.LineMetrics;
                getMaxAdvance(): number;
                getMaxAscent(): number;
                getMaxCharBounds(arg0: Graphics): java.awt.geom.Rectangle2D;
                getMaxDescent(): number;
                getStringBounds(arg0: string, arg1: Graphics): java.awt.geom.Rectangle2D;
                getStringBounds(arg0: string[], arg1: number, arg2: number, arg3: Graphics): java.awt.geom.Rectangle2D;
                getStringBounds(arg0: java.text.CharacterIterator, arg1: number, arg2: number, arg3: Graphics): java.awt.geom.Rectangle2D;
                getStringBounds(arg0: string, arg1: number, arg2: number, arg3: Graphics): java.awt.geom.Rectangle2D;
                getWidths(): number[];
                hasUniformLineMetrics(): boolean;
                stringWidth(arg0: string): number;
            }
            type FontMetrics = java.io.Serializable & FontMetrics_S & FontMetrics$;
            interface Frame_S {
                readonly ICONIFIED: number;
                readonly MAXIMIZED_BOTH: number;
                readonly MAXIMIZED_HORIZ: number;
                readonly MAXIMIZED_VERT: number;
                readonly NORMAL: number;
                getFrames(): Frame[];
            }
            type Frame_ST = MenuContainer_S & Window_S & Frame_S;
            interface Frame_C extends Frame_ST {
                new (): Frame;
                new (arg0: string): Frame;
                new (arg0: GraphicsConfiguration): Frame;
                new (arg0: string, arg1: GraphicsConfiguration): Frame;
            }
            interface Frame$ {
                getExtendedState(): number;
                getIconImage(): Image;
                getMaximizedBounds(): Rectangle;
                getMenuBar(): MenuBar;
                getState(): number;
                getTitle(): string;
                isResizable(): boolean;
                isUndecorated(): boolean;
                setExtendedState(arg0: number): void;
                setMaximizedBounds(arg0: Rectangle): void;
                setMenuBar(arg0: MenuBar): void;
                setResizable(arg0: boolean): void;
                setState(arg0: number): void;
                setTitle(arg0: string): void;
                setUndecorated(arg0: boolean): void;
            }
            type Frame = Window & MenuContainer & Frame_S & Frame$;
            interface Graphics_S {
            }
            interface Graphics_C extends Graphics_S {
            }
            interface Graphics$ {
                clearRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
                clipRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
                copyArea(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
                create(): this;
                create(arg0: number, arg1: number, arg2: number, arg3: number): this;
                dispose(): void;
                draw3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
                drawArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
                drawBytes(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: number): void;
                drawChars(arg0: string[], arg1: number, arg2: number, arg3: number, arg4: number): void;
                drawImage(arg0: Image, arg1: number, arg2: number, arg3: java.awt.image.ImageObserver): boolean;
                drawImage(arg0: Image, arg1: number, arg2: number, arg3: Color, arg4: java.awt.image.ImageObserver): boolean;
                drawImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: java.awt.image.ImageObserver): boolean;
                drawImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Color, arg6: java.awt.image.ImageObserver): boolean;
                drawImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: java.awt.image.ImageObserver): boolean;
                drawImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Color, arg10: java.awt.image.ImageObserver): boolean;
                drawLine(arg0: number, arg1: number, arg2: number, arg3: number): void;
                drawOval(arg0: number, arg1: number, arg2: number, arg3: number): void;
                drawPolygon(arg0: Polygon): void;
                drawPolygon(arg0: number[], arg1: number[], arg2: number): void;
                drawPolyline(arg0: number[], arg1: number[], arg2: number): void;
                drawRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
                drawRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
                drawString(arg0: java.text.AttributedCharacterIterator, arg1: number, arg2: number): void;
                drawString(arg0: string, arg1: number, arg2: number): void;
                fill3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
                fillArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
                fillOval(arg0: number, arg1: number, arg2: number, arg3: number): void;
                fillPolygon(arg0: Polygon): void;
                fillPolygon(arg0: number[], arg1: number[], arg2: number): void;
                fillRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
                fillRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
                finalize(): void;
                getClip(): Shape;
                getClipBounds(): Rectangle;
                getClipBounds(arg0: Rectangle): Rectangle;
                getColor(): Color;
                getFont(): Font;
                getFontMetrics(): FontMetrics;
                getFontMetrics(arg0: Font): FontMetrics;
                hitClip(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
                setClip(arg0: Shape): void;
                setClip(arg0: number, arg1: number, arg2: number, arg3: number): void;
                setColor(arg0: Color): void;
                setFont(arg0: Font): void;
                setPaintMode(): void;
                setXORMode(arg0: Color): void;
                translate(arg0: number, arg1: number): void;
            }
            type Graphics = Graphics_S & Graphics$;
            interface Graphics2D_S {
            }
            type Graphics2D_ST = Graphics_S & Graphics2D_S;
            interface Graphics2D_C extends Graphics2D_ST {
            }
            interface Graphics2D$ {
                addRenderingHints(arg0: java.util.Map): void;
                clip(arg0: Shape): void;
                draw(arg0: Shape): void;
                drawGlyphVector(arg0: java.awt.font.GlyphVector, arg1: number, arg2: number): void;
                drawImage(arg0: Image, arg1: java.awt.geom.AffineTransform, arg2: java.awt.image.ImageObserver): boolean;
                drawImage(arg0: java.awt.image.BufferedImage, arg1: java.awt.image.BufferedImageOp, arg2: number, arg3: number): void;
                drawRenderableImage(arg0: java.awt.image.renderable.RenderableImage, arg1: java.awt.geom.AffineTransform): void;
                drawRenderedImage(arg0: java.awt.image.RenderedImage, arg1: java.awt.geom.AffineTransform): void;
                drawString(arg0: java.text.AttributedCharacterIterator, arg1: number, arg2: number): void;
                drawString(arg0: string, arg1: number, arg2: number): void;
                fill(arg0: Shape): void;
                getBackground(): Color;
                getComposite(): Composite;
                getDeviceConfiguration(): GraphicsConfiguration;
                getFontRenderContext(): java.awt.font.FontRenderContext;
                getPaint(): Paint;
                getRenderingHint(arg0: RenderingHints$Key): any;
                getRenderingHints(): RenderingHints;
                getStroke(): Stroke;
                getTransform(): java.awt.geom.AffineTransform;
                hit(arg0: Rectangle, arg1: Shape, arg2: boolean): boolean;
                rotate(arg0: number): void;
                rotate(arg0: number, arg1: number, arg2: number): void;
                scale(arg0: number, arg1: number): void;
                setBackground(arg0: Color): void;
                setComposite(arg0: Composite): void;
                setPaint(arg0: Paint): void;
                setRenderingHint(arg0: RenderingHints$Key, arg1: any): void;
                setRenderingHints(arg0: java.util.Map): void;
                setStroke(arg0: Stroke): void;
                setTransform(arg0: java.awt.geom.AffineTransform): void;
                shear(arg0: number, arg1: number): void;
                transform(arg0: java.awt.geom.AffineTransform): void;
                translate(arg0: number, arg1: number): void;
            }
            type Graphics2D = Graphics & Graphics2D_S & Graphics2D$;
            interface GraphicsConfigTemplate_S {
                readonly PREFERRED: number;
                readonly REQUIRED: number;
                readonly UNNECESSARY: number;
            }
            type GraphicsConfigTemplate_ST = java.io.Serializable_S & GraphicsConfigTemplate_S;
            interface GraphicsConfigTemplate_C extends GraphicsConfigTemplate_ST {
                new (): GraphicsConfigTemplate;
            }
            interface GraphicsConfigTemplate$ {
                getBestConfiguration(arg0: GraphicsConfiguration[]): GraphicsConfiguration;
                isGraphicsConfigSupported(arg0: GraphicsConfiguration): boolean;
            }
            type GraphicsConfigTemplate = java.io.Serializable & GraphicsConfigTemplate_S & GraphicsConfigTemplate$;
            interface GraphicsConfiguration_S {
            }
            interface GraphicsConfiguration_C extends GraphicsConfiguration_S {
            }
            interface GraphicsConfiguration$ {
                createCompatibleImage(arg0: number, arg1: number): java.awt.image.BufferedImage;
                createCompatibleImage(arg0: number, arg1: number, arg2: number): java.awt.image.BufferedImage;
                createCompatibleVolatileImage(arg0: number, arg1: number): java.awt.image.VolatileImage;
                createCompatibleVolatileImage(arg0: number, arg1: number, arg2: number): java.awt.image.VolatileImage;
                createCompatibleVolatileImage(arg0: number, arg1: number, arg2: ImageCapabilities): java.awt.image.VolatileImage;
                createCompatibleVolatileImage(arg0: number, arg1: number, arg2: ImageCapabilities, arg3: number): java.awt.image.VolatileImage;
                getBounds(): Rectangle;
                getBufferCapabilities(): BufferCapabilities;
                getColorModel(): java.awt.image.ColorModel;
                getColorModel(arg0: number): java.awt.image.ColorModel;
                getDefaultTransform(): java.awt.geom.AffineTransform;
                getDevice(): GraphicsDevice;
                getImageCapabilities(): ImageCapabilities;
                getNormalizingTransform(): java.awt.geom.AffineTransform;
                isTranslucencyCapable(): boolean;
            }
            type GraphicsConfiguration = GraphicsConfiguration_S & GraphicsConfiguration$;
            interface GraphicsDevice_S {
                readonly TYPE_IMAGE_BUFFER: number;
                readonly TYPE_PRINTER: number;
                readonly TYPE_RASTER_SCREEN: number;
            }
            interface GraphicsDevice_C extends GraphicsDevice_S {
            }
            interface GraphicsDevice$ {
                getAvailableAcceleratedMemory(): number;
                getBestConfiguration(arg0: GraphicsConfigTemplate): GraphicsConfiguration;
                getConfigurations(): GraphicsConfiguration[];
                getDefaultConfiguration(): GraphicsConfiguration;
                getDisplayMode(): DisplayMode;
                getDisplayModes(): DisplayMode[];
                getFullScreenWindow(): Window;
                getIDstring(): string;
                getType(): number;
                isDisplayChangeSupported(): boolean;
                isFullScreenSupported(): boolean;
                isWindowTranslucencySupported(arg0: GraphicsDevice$WindowTranslucency): boolean;
                setDisplayMode(arg0: DisplayMode): void;
                setFullScreenWindow(arg0: Window): void;
            }
            type GraphicsDevice = GraphicsDevice_S & GraphicsDevice$;
            enum GraphicsDevice$WindowTranslucency {
                PERPIXEL_TRANSPARENT,
                TRANSLUCENT,
                PERPIXEL_TRANSLUCENT
            }
            interface Image_S {
                readonly SCALE_AREA_AVERAGING: number;
                readonly SCALE_DEFAULT: number;
                readonly SCALE_FAST: number;
                readonly SCALE_REPLICATE: number;
                readonly SCALE_SMOOTH: number;
                readonly UndefinedProperty: any;
            }
            interface Image_C extends Image_S {
                new (): Image;
            }
            interface Image$ {
                flush(): void;
                getAccelerationPriority(): number;
                getCapabilities(arg0: GraphicsConfiguration): ImageCapabilities;
                getGraphics(): Graphics;
                getHeight(arg0: java.awt.image.ImageObserver): number;
                getProperty(arg0: string, arg1: java.awt.image.ImageObserver): any;
                getScaledInstance(arg0: number, arg1: number, arg2: number): this;
                getSource(): java.awt.image.ImageProducer;
                getWidth(arg0: java.awt.image.ImageObserver): number;
                setAccelerationPriority(arg0: number): void;
            }
            type Image = Image_S & Image$;
            interface ImageCapabilities_S {
            }
            type ImageCapabilities_ST = java.lang.Cloneable_S & ImageCapabilities_S;
            interface ImageCapabilities_C extends ImageCapabilities_ST {
                new (arg0: boolean): ImageCapabilities;
            }
            interface ImageCapabilities$ {
                clone(): any;
                isAccelerated(): boolean;
                isTrueVolatile(): boolean;
            }
            type ImageCapabilities = java.lang.Cloneable & ImageCapabilities_S & ImageCapabilities$;
            interface Insets_S {
            }
            type Insets_ST = java.io.Serializable_S & java.lang.Cloneable_S & Insets_S;
            interface Insets_C extends Insets_ST {
                new (arg0: number, arg1: number, arg2: number, arg3: number): Insets;
            }
            interface Insets$ {
                bottom: number;
                left: number;
                right: number;
                top: number;
                clone(): any;
                set(arg0: number, arg1: number, arg2: number, arg3: number): void;
            }
            type Insets = java.lang.Cloneable & java.io.Serializable & Insets_S & Insets$;
            interface JobAttributes_S {
            }
            type JobAttributes_ST = java.lang.Cloneable_S & JobAttributes_S;
            interface JobAttributes_C extends JobAttributes_ST {
                new (): JobAttributes;
                new (arg0: JobAttributes): JobAttributes;
                new (arg0: number, arg1: JobAttributes$DefaultSelectionType, arg2: JobAttributes$DestinationType, arg3: JobAttributes$DialogType, arg4: string, arg5: number, arg6: number, arg7: JobAttributes$MultipleDocumentHandlingType, arg8: number[][], arg9: string, arg10: JobAttributes$SidesType): JobAttributes;
            }
            interface JobAttributes$ {
                clone(): any;
                getCopies(): number;
                getDefaultSelection(): JobAttributes$DefaultSelectionType;
                getDestination(): JobAttributes$DestinationType;
                getDialog(): JobAttributes$DialogType;
                getFileName(): string;
                getFromPage(): number;
                getMaxPage(): number;
                getMinPage(): number;
                getMultipleDocumentHandling(): JobAttributes$MultipleDocumentHandlingType;
                getPageRanges(): number[][];
                getPrinter(): string;
                getSides(): JobAttributes$SidesType;
                getToPage(): number;
                set(arg0: JobAttributes): void;
                setCopies(arg0: number): void;
                setCopiesToDefault(): void;
                setDefaultSelection(arg0: JobAttributes$DefaultSelectionType): void;
                setDestination(arg0: JobAttributes$DestinationType): void;
                setDialog(arg0: JobAttributes$DialogType): void;
                setFileName(arg0: string): void;
                setFromPage(arg0: number): void;
                setMaxPage(arg0: number): void;
                setMinPage(arg0: number): void;
                setMultipleDocumentHandling(arg0: JobAttributes$MultipleDocumentHandlingType): void;
                setMultipleDocumentHandlingToDefault(): void;
                setPageRanges(arg0: number[][]): void;
                setPrinter(arg0: string): void;
                setSides(arg0: JobAttributes$SidesType): void;
                setSidesToDefault(): void;
                setToPage(arg0: number): void;
            }
            type JobAttributes = java.lang.Cloneable & JobAttributes_S & JobAttributes$;
            interface JobAttributes$DefaultSelectionType_S {
                readonly ALL: JobAttributes$DefaultSelectionType;
                readonly RANGE: JobAttributes$DefaultSelectionType;
                readonly SELECTION: JobAttributes$DefaultSelectionType;
            }
            type JobAttributes$DefaultSelectionType_ST = __AttributeValue_S & JobAttributes$DefaultSelectionType_S;
            interface JobAttributes$DefaultSelectionType_C extends JobAttributes$DefaultSelectionType_ST {
                new (): JobAttributes$DefaultSelectionType;
            }
            interface JobAttributes$DefaultSelectionType$ {
            }
            type JobAttributes$DefaultSelectionType = __AttributeValue & JobAttributes$DefaultSelectionType_S & JobAttributes$DefaultSelectionType$;
            interface JobAttributes$DestinationType_S {
                readonly FILE: JobAttributes$DestinationType;
                readonly PRINTER: JobAttributes$DestinationType;
            }
            type JobAttributes$DestinationType_ST = __AttributeValue_S & JobAttributes$DestinationType_S;
            interface JobAttributes$DestinationType_C extends JobAttributes$DestinationType_ST {
                new (): JobAttributes$DestinationType;
            }
            interface JobAttributes$DestinationType$ {
            }
            type JobAttributes$DestinationType = __AttributeValue & JobAttributes$DestinationType_S & JobAttributes$DestinationType$;
            interface JobAttributes$DialogType_S {
                readonly COMMON: JobAttributes$DialogType;
                readonly NATIVE: JobAttributes$DialogType;
                readonly NONE: JobAttributes$DialogType;
            }
            type JobAttributes$DialogType_ST = __AttributeValue_S & JobAttributes$DialogType_S;
            interface JobAttributes$DialogType_C extends JobAttributes$DialogType_ST {
                new (): JobAttributes$DialogType;
            }
            interface JobAttributes$DialogType$ {
            }
            type JobAttributes$DialogType = __AttributeValue & JobAttributes$DialogType_S & JobAttributes$DialogType$;
            interface JobAttributes$MultipleDocumentHandlingType_S {
                readonly SEPARATE_DOCUMENTS_COLLATED_COPIES: JobAttributes$MultipleDocumentHandlingType;
                readonly SEPARATE_DOCUMENTS_UNCOLLATED_COPIES: JobAttributes$MultipleDocumentHandlingType;
            }
            type JobAttributes$MultipleDocumentHandlingType_ST = __AttributeValue_S & JobAttributes$MultipleDocumentHandlingType_S;
            interface JobAttributes$MultipleDocumentHandlingType_C extends JobAttributes$MultipleDocumentHandlingType_ST {
                new (): JobAttributes$MultipleDocumentHandlingType;
            }
            interface JobAttributes$MultipleDocumentHandlingType$ {
            }
            type JobAttributes$MultipleDocumentHandlingType = __AttributeValue & JobAttributes$MultipleDocumentHandlingType_S & JobAttributes$MultipleDocumentHandlingType$;
            interface JobAttributes$SidesType_S {
                readonly ONE_SIDED: JobAttributes$SidesType;
                readonly TWO_SIDED_LONG_EDGE: JobAttributes$SidesType;
                readonly TWO_SIDED_SHORT_EDGE: JobAttributes$SidesType;
            }
            type JobAttributes$SidesType_ST = __AttributeValue_S & JobAttributes$SidesType_S;
            interface JobAttributes$SidesType_C extends JobAttributes$SidesType_ST {
                new (): JobAttributes$SidesType;
            }
            interface JobAttributes$SidesType$ {
            }
            type JobAttributes$SidesType = __AttributeValue & JobAttributes$SidesType_S & JobAttributes$SidesType$;
            interface LayoutManager_S {
            }
            interface LayoutManager$ {
                addLayoutComponent(arg0: string, arg1: Component): void;
                layoutContainer(arg0: Container): void;
                minimumLayoutSize(arg0: Container): Dimension;
                preferredLayoutSize(arg0: Container): Dimension;
                removeLayoutComponent(arg0: Component): void;
            }
            type LayoutManager = LayoutManager_S & LayoutManager$;
            interface Menu_S {
            }
            type Menu_ST = MenuItem_S & javax.accessibility.Accessible_S & MenuContainer_S & Menu_S;
            interface Menu_C extends Menu_ST {
                new (): Menu;
                new (arg0: string): Menu;
                new (arg0: string, arg1: boolean): Menu;
            }
            interface Menu$ {
                add(arg0: MenuItem): MenuItem;
                add(arg0: string): void;
                addSeparator(): void;
                getItem(arg0: number): MenuItem;
                getItemCount(): number;
                insert(arg0: MenuItem, arg1: number): void;
                insert(arg0: string, arg1: number): void;
                insertSeparator(arg0: number): void;
                isTearOff(): boolean;
                remove(arg0: number): void;
                removeAll(): void;
            }
            type Menu = MenuItem & MenuContainer & javax.accessibility.Accessible & Menu_S & Menu$;
            interface MenuBar_S {
            }
            type MenuBar_ST = javax.accessibility.Accessible_S & MenuComponent_S & MenuContainer_S & MenuBar_S;
            interface MenuBar_C extends MenuBar_ST {
                new (): MenuBar;
            }
            interface MenuBar$ {
                add(arg0: Menu): Menu;
                addNotify(): void;
                deleteShortcut(arg0: MenuShortcut): void;
                getHelpMenu(): Menu;
                getMenu(arg0: number): Menu;
                getMenuCount(): number;
                getShortcutMenuItem(arg0: MenuShortcut): MenuItem;
                remove(arg0: number): void;
                setHelpMenu(arg0: Menu): void;
                shortcuts(): java.util.Enumeration;
            }
            type MenuBar = MenuComponent & MenuContainer & javax.accessibility.Accessible & MenuBar_S & MenuBar$;
            interface MenuComponent_S {
            }
            type MenuComponent_ST = java.io.Serializable_S & MenuComponent_S;
            interface MenuComponent_C extends MenuComponent_ST {
                new (): MenuComponent;
            }
            interface MenuComponent$ {
                dispatchEvent(arg0: AWTEvent): void;
                getAccessibleContext(): javax.accessibility.AccessibleContext;
                getFont(): Font;
                getName(): string;
                getParent(): MenuContainer;
                removeNotify(): void;
                setFont(arg0: Font): void;
                setName(arg0: string): void;
            }
            type MenuComponent = java.io.Serializable & MenuComponent_S & MenuComponent$;
            interface MenuContainer_S {
            }
            interface MenuContainer$ {
                getFont(): Font;
                remove(arg0: MenuComponent): void;
            }
            type MenuContainer = MenuContainer_S & MenuContainer$;
            interface MenuItem_S {
            }
            type MenuItem_ST = javax.accessibility.Accessible_S & MenuComponent_S & MenuItem_S;
            interface MenuItem_C extends MenuItem_ST {
                new (): MenuItem;
                new (arg0: string): MenuItem;
                new (arg0: string, arg1: MenuShortcut): MenuItem;
            }
            interface MenuItem$ {
                addActionListener(arg0: java.awt.event.ActionListener): void;
                addNotify(): void;
                deleteShortcut(): void;
                getActionCommand(): string;
                getActionListeners(): java.awt.event.ActionListener[];
                getLabel(): string;
                getListeners(arg0: java.lang.Class): java.util.EventListener[];
                getShortcut(): MenuShortcut;
                isEnabled(): boolean;
                paramString(): string;
                removeActionListener(arg0: java.awt.event.ActionListener): void;
                setActionCommand(arg0: string): void;
                setEnabled(arg0: boolean): void;
                setLabel(arg0: string): void;
                setShortcut(arg0: MenuShortcut): void;
            }
            type MenuItem = MenuComponent & javax.accessibility.Accessible & MenuItem_S & MenuItem$;
            interface MenuShortcut_S {
            }
            type MenuShortcut_ST = java.io.Serializable_S & MenuShortcut_S;
            interface MenuShortcut_C extends MenuShortcut_ST {
                new (arg0: number): MenuShortcut;
                new (arg0: number, arg1: boolean): MenuShortcut;
            }
            interface MenuShortcut$ {
                equals(arg0: MenuShortcut): boolean;
                getKey(): number;
                usesShiftModifier(): boolean;
            }
            type MenuShortcut = java.io.Serializable & MenuShortcut_S & MenuShortcut$;
            interface PageAttributes_S {
            }
            type PageAttributes_ST = java.lang.Cloneable_S & PageAttributes_S;
            interface PageAttributes_C extends PageAttributes_ST {
                new (): PageAttributes;
                new (arg0: PageAttributes): PageAttributes;
                new (arg0: PageAttributes$ColorType, arg1: PageAttributes$MediaType, arg2: PageAttributes$OrientationRequestedType, arg3: PageAttributes$OriginType, arg4: PageAttributes$PrintQualityType, arg5: number[]): PageAttributes;
            }
            interface PageAttributes$ {
                clone(): any;
                getColor(): PageAttributes$ColorType;
                getMedia(): PageAttributes$MediaType;
                getOrientationRequested(): PageAttributes$OrientationRequestedType;
                getOrigin(): PageAttributes$OriginType;
                getPrintQuality(): PageAttributes$PrintQualityType;
                getPrinterResolution(): number[];
                set(arg0: PageAttributes): void;
                setColor(arg0: PageAttributes$ColorType): void;
                setMedia(arg0: PageAttributes$MediaType): void;
                setMediaToDefault(): void;
                setOrientationRequested(arg0: number): void;
                setOrientationRequested(arg0: PageAttributes$OrientationRequestedType): void;
                setOrientationRequestedToDefault(): void;
                setOrigin(arg0: PageAttributes$OriginType): void;
                setPrintQuality(arg0: number): void;
                setPrintQuality(arg0: PageAttributes$PrintQualityType): void;
                setPrintQualityToDefault(): void;
                setPrinterResolution(arg0: number[]): void;
                setPrinterResolution(arg0: number): void;
                setPrinterResolutionToDefault(): void;
            }
            type PageAttributes = java.lang.Cloneable & PageAttributes_S & PageAttributes$;
            interface PageAttributes$ColorType_S {
                readonly COLOR: PageAttributes$ColorType;
                readonly MONOCHROME: PageAttributes$ColorType;
            }
            type PageAttributes$ColorType_ST = __AttributeValue_S & PageAttributes$ColorType_S;
            interface PageAttributes$ColorType_C extends PageAttributes$ColorType_ST {
                new (): PageAttributes$ColorType;
            }
            interface PageAttributes$ColorType$ {
            }
            type PageAttributes$ColorType = __AttributeValue & PageAttributes$ColorType_S & PageAttributes$ColorType$;
            interface PageAttributes$MediaType_S {
                readonly A: PageAttributes$MediaType;
                readonly A0: PageAttributes$MediaType;
                readonly A1: PageAttributes$MediaType;
                readonly A10: PageAttributes$MediaType;
                readonly A2: PageAttributes$MediaType;
                readonly A3: PageAttributes$MediaType;
                readonly A4: PageAttributes$MediaType;
                readonly A5: PageAttributes$MediaType;
                readonly A6: PageAttributes$MediaType;
                readonly A7: PageAttributes$MediaType;
                readonly A8: PageAttributes$MediaType;
                readonly A9: PageAttributes$MediaType;
                readonly B: PageAttributes$MediaType;
                readonly B0: PageAttributes$MediaType;
                readonly B1: PageAttributes$MediaType;
                readonly B10: PageAttributes$MediaType;
                readonly B2: PageAttributes$MediaType;
                readonly B3: PageAttributes$MediaType;
                readonly B4: PageAttributes$MediaType;
                readonly B5: PageAttributes$MediaType;
                readonly B6: PageAttributes$MediaType;
                readonly B7: PageAttributes$MediaType;
                readonly B8: PageAttributes$MediaType;
                readonly B9: PageAttributes$MediaType;
                readonly C: PageAttributes$MediaType;
                readonly C0: PageAttributes$MediaType;
                readonly C1: PageAttributes$MediaType;
                readonly C10: PageAttributes$MediaType;
                readonly C2: PageAttributes$MediaType;
                readonly C3: PageAttributes$MediaType;
                readonly C4: PageAttributes$MediaType;
                readonly C5: PageAttributes$MediaType;
                readonly C6: PageAttributes$MediaType;
                readonly C7: PageAttributes$MediaType;
                readonly C8: PageAttributes$MediaType;
                readonly C9: PageAttributes$MediaType;
                readonly D: PageAttributes$MediaType;
                readonly E: PageAttributes$MediaType;
                readonly ENV_10: PageAttributes$MediaType;
                readonly ENV_10X13: PageAttributes$MediaType;
                readonly ENV_10X14: PageAttributes$MediaType;
                readonly ENV_10X15: PageAttributes$MediaType;
                readonly ENV_11: PageAttributes$MediaType;
                readonly ENV_12: PageAttributes$MediaType;
                readonly ENV_14: PageAttributes$MediaType;
                readonly ENV_6X9: PageAttributes$MediaType;
                readonly ENV_7X9: PageAttributes$MediaType;
                readonly ENV_9: PageAttributes$MediaType;
                readonly ENV_9X11: PageAttributes$MediaType;
                readonly ENV_9X12: PageAttributes$MediaType;
                readonly ENV_INVITE: PageAttributes$MediaType;
                readonly ENV_ITALY: PageAttributes$MediaType;
                readonly ENV_MONARCH: PageAttributes$MediaType;
                readonly ENV_PERSONAL: PageAttributes$MediaType;
                readonly EXECUTIVE: PageAttributes$MediaType;
                readonly FOLIO: PageAttributes$MediaType;
                readonly INVITE: PageAttributes$MediaType;
                readonly INVITE_ENVELOPE: PageAttributes$MediaType;
                readonly INVOICE: PageAttributes$MediaType;
                readonly ISO_2A0: PageAttributes$MediaType;
                readonly ISO_4A0: PageAttributes$MediaType;
                readonly ISO_A0: PageAttributes$MediaType;
                readonly ISO_A1: PageAttributes$MediaType;
                readonly ISO_A10: PageAttributes$MediaType;
                readonly ISO_A2: PageAttributes$MediaType;
                readonly ISO_A3: PageAttributes$MediaType;
                readonly ISO_A4: PageAttributes$MediaType;
                readonly ISO_A5: PageAttributes$MediaType;
                readonly ISO_A6: PageAttributes$MediaType;
                readonly ISO_A7: PageAttributes$MediaType;
                readonly ISO_A8: PageAttributes$MediaType;
                readonly ISO_A9: PageAttributes$MediaType;
                readonly ISO_B0: PageAttributes$MediaType;
                readonly ISO_B1: PageAttributes$MediaType;
                readonly ISO_B10: PageAttributes$MediaType;
                readonly ISO_B2: PageAttributes$MediaType;
                readonly ISO_B3: PageAttributes$MediaType;
                readonly ISO_B4: PageAttributes$MediaType;
                readonly ISO_B4_ENVELOPE: PageAttributes$MediaType;
                readonly ISO_B5: PageAttributes$MediaType;
                readonly ISO_B5_ENVELOPE: PageAttributes$MediaType;
                readonly ISO_B6: PageAttributes$MediaType;
                readonly ISO_B7: PageAttributes$MediaType;
                readonly ISO_B8: PageAttributes$MediaType;
                readonly ISO_B9: PageAttributes$MediaType;
                readonly ISO_C0: PageAttributes$MediaType;
                readonly ISO_C0_ENVELOPE: PageAttributes$MediaType;
                readonly ISO_C1: PageAttributes$MediaType;
                readonly ISO_C10: PageAttributes$MediaType;
                readonly ISO_C10_ENVELOPE: PageAttributes$MediaType;
                readonly ISO_C1_ENVELOPE: PageAttributes$MediaType;
                readonly ISO_C2: PageAttributes$MediaType;
                readonly ISO_C2_ENVELOPE: PageAttributes$MediaType;
                readonly ISO_C3: PageAttributes$MediaType;
                readonly ISO_C3_ENVELOPE: PageAttributes$MediaType;
                readonly ISO_C4: PageAttributes$MediaType;
                readonly ISO_C4_ENVELOPE: PageAttributes$MediaType;
                readonly ISO_C5: PageAttributes$MediaType;
                readonly ISO_C5_ENVELOPE: PageAttributes$MediaType;
                readonly ISO_C6: PageAttributes$MediaType;
                readonly ISO_C6_ENVELOPE: PageAttributes$MediaType;
                readonly ISO_C7: PageAttributes$MediaType;
                readonly ISO_C7_ENVELOPE: PageAttributes$MediaType;
                readonly ISO_C8: PageAttributes$MediaType;
                readonly ISO_C8_ENVELOPE: PageAttributes$MediaType;
                readonly ISO_C9: PageAttributes$MediaType;
                readonly ISO_C9_ENVELOPE: PageAttributes$MediaType;
                readonly ISO_DESIGNATED_LONG: PageAttributes$MediaType;
                readonly ISO_DESIGNATED_LONG_ENVELOPE: PageAttributes$MediaType;
                readonly ITALY: PageAttributes$MediaType;
                readonly ITALY_ENVELOPE: PageAttributes$MediaType;
                readonly JIS_B0: PageAttributes$MediaType;
                readonly JIS_B1: PageAttributes$MediaType;
                readonly JIS_B10: PageAttributes$MediaType;
                readonly JIS_B2: PageAttributes$MediaType;
                readonly JIS_B3: PageAttributes$MediaType;
                readonly JIS_B4: PageAttributes$MediaType;
                readonly JIS_B5: PageAttributes$MediaType;
                readonly JIS_B6: PageAttributes$MediaType;
                readonly JIS_B7: PageAttributes$MediaType;
                readonly JIS_B8: PageAttributes$MediaType;
                readonly JIS_B9: PageAttributes$MediaType;
                readonly LEDGER: PageAttributes$MediaType;
                readonly LEGAL: PageAttributes$MediaType;
                readonly LETTER: PageAttributes$MediaType;
                readonly MONARCH: PageAttributes$MediaType;
                readonly MONARCH_ENVELOPE: PageAttributes$MediaType;
                readonly NA_10X13_ENVELOPE: PageAttributes$MediaType;
                readonly NA_10X14_ENVELOPE: PageAttributes$MediaType;
                readonly NA_10X15_ENVELOPE: PageAttributes$MediaType;
                readonly NA_6X9_ENVELOPE: PageAttributes$MediaType;
                readonly NA_7X9_ENVELOPE: PageAttributes$MediaType;
                readonly NA_9X11_ENVELOPE: PageAttributes$MediaType;
                readonly NA_9X12_ENVELOPE: PageAttributes$MediaType;
                readonly NA_LEGAL: PageAttributes$MediaType;
                readonly NA_LETTER: PageAttributes$MediaType;
                readonly NA_NUMBER_10_ENVELOPE: PageAttributes$MediaType;
                readonly NA_NUMBER_11_ENVELOPE: PageAttributes$MediaType;
                readonly NA_NUMBER_12_ENVELOPE: PageAttributes$MediaType;
                readonly NA_NUMBER_14_ENVELOPE: PageAttributes$MediaType;
                readonly NA_NUMBER_9_ENVELOPE: PageAttributes$MediaType;
                readonly NOTE: PageAttributes$MediaType;
                readonly PERSONAL: PageAttributes$MediaType;
                readonly PERSONAL_ENVELOPE: PageAttributes$MediaType;
                readonly QUARTO: PageAttributes$MediaType;
                readonly STATEMENT: PageAttributes$MediaType;
                readonly TABLOID: PageAttributes$MediaType;
            }
            type PageAttributes$MediaType_ST = __AttributeValue_S & PageAttributes$MediaType_S;
            interface PageAttributes$MediaType_C extends PageAttributes$MediaType_ST {
                new (): PageAttributes$MediaType;
            }
            interface PageAttributes$MediaType$ {
            }
            type PageAttributes$MediaType = __AttributeValue & PageAttributes$MediaType_S & PageAttributes$MediaType$;
            interface PageAttributes$OrientationRequestedType_S {
                readonly LANDSCAPE: PageAttributes$OrientationRequestedType;
                readonly PORTRAIT: PageAttributes$OrientationRequestedType;
            }
            type PageAttributes$OrientationRequestedType_ST = __AttributeValue_S & PageAttributes$OrientationRequestedType_S;
            interface PageAttributes$OrientationRequestedType_C extends PageAttributes$OrientationRequestedType_ST {
                new (): PageAttributes$OrientationRequestedType;
            }
            interface PageAttributes$OrientationRequestedType$ {
            }
            type PageAttributes$OrientationRequestedType = __AttributeValue & PageAttributes$OrientationRequestedType_S & PageAttributes$OrientationRequestedType$;
            interface PageAttributes$OriginType_S {
                readonly PHYSICAL: PageAttributes$OriginType;
                readonly PRINTABLE: PageAttributes$OriginType;
            }
            type PageAttributes$OriginType_ST = __AttributeValue_S & PageAttributes$OriginType_S;
            interface PageAttributes$OriginType_C extends PageAttributes$OriginType_ST {
                new (): PageAttributes$OriginType;
            }
            interface PageAttributes$OriginType$ {
            }
            type PageAttributes$OriginType = __AttributeValue & PageAttributes$OriginType_S & PageAttributes$OriginType$;
            interface PageAttributes$PrintQualityType_S {
                readonly DRAFT: PageAttributes$PrintQualityType;
                readonly HIGH: PageAttributes$PrintQualityType;
                readonly NORMAL: PageAttributes$PrintQualityType;
            }
            type PageAttributes$PrintQualityType_ST = __AttributeValue_S & PageAttributes$PrintQualityType_S;
            interface PageAttributes$PrintQualityType_C extends PageAttributes$PrintQualityType_ST {
                new (): PageAttributes$PrintQualityType;
            }
            interface PageAttributes$PrintQualityType$ {
            }
            type PageAttributes$PrintQualityType = __AttributeValue & PageAttributes$PrintQualityType_S & PageAttributes$PrintQualityType$;
            interface Paint_S {
            }
            interface Paint$ {
                createContext(arg0: java.awt.image.ColorModel, arg1: Rectangle, arg2: java.awt.geom.Rectangle2D, arg3: java.awt.geom.AffineTransform, arg4: RenderingHints): PaintContext;
            }
            type Paint = Transparency & Paint_S & Paint$;
            interface PaintContext_S {
            }
            interface PaintContext$ {
                dispose(): void;
                getColorModel(): java.awt.image.ColorModel;
                getRaster(arg0: number, arg1: number, arg2: number, arg3: number): java.awt.image.Raster;
            }
            type PaintContext = PaintContext_S & PaintContext$;
            interface Point_S {
            }
            type Point_ST = java.awt.geom.Point2D_S & java.io.Serializable_S & Point_S;
            interface Point_C extends Point_ST {
                new (): Point;
                new (arg0: Point): Point;
                new (arg0: number, arg1: number): Point;
            }
            interface Point$ {
                x: number;
                y: number;
                getLocation(): this;
                move(arg0: number, arg1: number): void;
                setLocation(arg0: Point): void;
                setLocation(arg0: number, arg1: number): void;
                translate(arg0: number, arg1: number): void;
            }
            type Point = java.awt.geom.Point2D & java.io.Serializable & Point_S & Point$;
            interface Polygon_S {
            }
            type Polygon_ST = java.io.Serializable_S & Shape_S & Polygon_S;
            interface Polygon_C extends Polygon_ST {
                new (): Polygon;
                new (arg0: number[], arg1: number[], arg2: number): Polygon;
            }
            interface Polygon$ {
                npoints: number;
                xpoints: number[];
                ypoints: number[];
                addPoint(arg0: number, arg1: number): void;
                contains(arg0: Point): boolean;
                contains(arg0: number, arg1: number): boolean;
                invalidate(): void;
                reset(): void;
                translate(arg0: number, arg1: number): void;
            }
            type Polygon = Shape & java.io.Serializable & Polygon_S & Polygon$;
            interface PopupMenu_S {
            }
            type PopupMenu_ST = Menu_S & PopupMenu_S;
            interface PopupMenu_C extends PopupMenu_ST {
                new (): PopupMenu;
                new (arg0: string): PopupMenu;
            }
            interface PopupMenu$ {
                show(arg0: Component, arg1: number, arg2: number): void;
            }
            type PopupMenu = Menu & PopupMenu_S & PopupMenu$;
            interface PrintJob_S {
            }
            interface PrintJob_C extends PrintJob_S {
                new (): PrintJob;
            }
            interface PrintJob$ {
                end(): void;
                finalize(): void;
                getGraphics(): Graphics;
                getPageDimension(): Dimension;
                getPageResolution(): number;
                lastPageFirst(): boolean;
            }
            type PrintJob = PrintJob_S & PrintJob$;
            interface Rectangle_S {
            }
            type Rectangle_ST = java.io.Serializable_S & Shape_S & java.awt.geom.Rectangle2D_S & Rectangle_S;
            interface Rectangle_C extends Rectangle_ST {
                new (): Rectangle;
                new (arg0: Dimension): Rectangle;
                new (arg0: Point): Rectangle;
                new (arg0: Rectangle): Rectangle;
                new (arg0: number, arg1: number): Rectangle;
                new (arg0: Point, arg1: Dimension): Rectangle;
                new (arg0: number, arg1: number, arg2: number, arg3: number): Rectangle;
            }
            interface Rectangle$ {
                height: number;
                width: number;
                x: number;
                y: number;
                add(arg0: Rectangle): void;
                add(arg0: Point): void;
                add(arg0: number, arg1: number): void;
                contains(arg0: Point): boolean;
                contains(arg0: Rectangle): boolean;
                contains(arg0: number, arg1: number): boolean;
                contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
                getLocation(): Point;
                getSize(): Dimension;
                grow(arg0: number, arg1: number): void;
                intersection(arg0: Rectangle): this;
                intersects(arg0: Rectangle): boolean;
                setBounds(arg0: Rectangle): void;
                setBounds(arg0: number, arg1: number, arg2: number, arg3: number): void;
                setLocation(arg0: Point): void;
                setLocation(arg0: number, arg1: number): void;
                setSize(arg0: Dimension): void;
                setSize(arg0: number, arg1: number): void;
                translate(arg0: number, arg1: number): void;
                union(arg0: Rectangle): this;
            }
            type Rectangle = java.awt.geom.Rectangle2D & Shape & java.io.Serializable & Rectangle_S & Rectangle$;
            interface RenderingHints_S {
                readonly KEY_ALPHA_INTERPOLATION: RenderingHints$Key;
                readonly KEY_ANTIALIASING: RenderingHints$Key;
                readonly KEY_COLOR_RENDERING: RenderingHints$Key;
                readonly KEY_DITHERING: RenderingHints$Key;
                readonly KEY_FRACTIONALMETRICS: RenderingHints$Key;
                readonly KEY_INTERPOLATION: RenderingHints$Key;
                readonly KEY_RENDERING: RenderingHints$Key;
                readonly KEY_STROKE_CONTROL: RenderingHints$Key;
                readonly KEY_TEXT_ANTIALIASING: RenderingHints$Key;
                readonly KEY_TEXT_LCD_CONTRAST: RenderingHints$Key;
                readonly VALUE_ALPHA_INTERPOLATION_DEFAULT: any;
                readonly VALUE_ALPHA_INTERPOLATION_QUALITY: any;
                readonly VALUE_ALPHA_INTERPOLATION_SPEED: any;
                readonly VALUE_ANTIALIAS_DEFAULT: any;
                readonly VALUE_ANTIALIAS_OFF: any;
                readonly VALUE_ANTIALIAS_ON: any;
                readonly VALUE_COLOR_RENDER_DEFAULT: any;
                readonly VALUE_COLOR_RENDER_QUALITY: any;
                readonly VALUE_COLOR_RENDER_SPEED: any;
                readonly VALUE_DITHER_DEFAULT: any;
                readonly VALUE_DITHER_DISABLE: any;
                readonly VALUE_DITHER_ENABLE: any;
                readonly VALUE_FRACTIONALMETRICS_DEFAULT: any;
                readonly VALUE_FRACTIONALMETRICS_OFF: any;
                readonly VALUE_FRACTIONALMETRICS_ON: any;
                readonly VALUE_INTERPOLATION_BICUBIC: any;
                readonly VALUE_INTERPOLATION_BILINEAR: any;
                readonly VALUE_INTERPOLATION_NEAREST_NEIGHBOR: any;
                readonly VALUE_RENDER_DEFAULT: any;
                readonly VALUE_RENDER_QUALITY: any;
                readonly VALUE_RENDER_SPEED: any;
                readonly VALUE_STROKE_DEFAULT: any;
                readonly VALUE_STROKE_NORMALIZE: any;
                readonly VALUE_STROKE_PURE: any;
                readonly VALUE_TEXT_ANTIALIAS_DEFAULT: any;
                readonly VALUE_TEXT_ANTIALIAS_GASP: any;
                readonly VALUE_TEXT_ANTIALIAS_LCD_HBGR: any;
                readonly VALUE_TEXT_ANTIALIAS_LCD_HRGB: any;
                readonly VALUE_TEXT_ANTIALIAS_LCD_VBGR: any;
                readonly VALUE_TEXT_ANTIALIAS_LCD_VRGB: any;
                readonly VALUE_TEXT_ANTIALIAS_OFF: any;
                readonly VALUE_TEXT_ANTIALIAS_ON: any;
            }
            type RenderingHints_ST = java.util.Map_S & java.lang.Cloneable_S & RenderingHints_S;
            interface RenderingHints_C extends RenderingHints_ST {
                new (arg0: java.util.Map): RenderingHints;
                new (arg0: RenderingHints$Key, arg1: any): RenderingHints;
            }
            interface RenderingHints$ {
                add(arg0: RenderingHints): void;
                clone(): any;
            }
            type RenderingHints = java.util.Map & java.lang.Cloneable & RenderingHints_S & RenderingHints$;
            interface RenderingHints$Key_S {
            }
            interface RenderingHints$Key_C extends RenderingHints$Key_S {
            }
            interface RenderingHints$Key$ {
                isCompatibleValue(arg0: any): boolean;
            }
            type RenderingHints$Key = RenderingHints$Key_S & RenderingHints$Key$;
            interface SecondaryLoop_S {
            }
            interface SecondaryLoop$ {
                enter(): boolean;
                exit(): boolean;
            }
            type SecondaryLoop = SecondaryLoop_S & SecondaryLoop$;
            interface Shape_S {
            }
            interface Shape$ {
                contains(arg0: java.awt.geom.Point2D): boolean;
                contains(arg0: java.awt.geom.Rectangle2D): boolean;
                contains(arg0: number, arg1: number): boolean;
                contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
                getBounds(): Rectangle;
                getBounds2D(): java.awt.geom.Rectangle2D;
                getPathIterator(arg0: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
                getPathIterator(arg0: java.awt.geom.AffineTransform, arg1: number): java.awt.geom.PathIterator;
                intersects(arg0: java.awt.geom.Rectangle2D): boolean;
                intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
            }
            type Shape = Shape_S & Shape$;
            interface Stroke_S {
            }
            interface Stroke$ {
                createStrokedShape(arg0: Shape): Shape;
            }
            type Stroke = Stroke_S & Stroke$;
            interface Toolkit_S {
                getDefaultToolkit(): Toolkit;
                getProperty(arg0: string, arg1: string): string;
            }
            interface Toolkit_C extends Toolkit_S {
                new (): Toolkit;
            }
            interface Toolkit$ {
                addAWTEventListener(arg0: java.awt.event.AWTEventListener, arg1: long): void;
                addPropertyChangeListener(arg0: string, arg1: java.beans.PropertyChangeListener): void;
                areExtraMouseButtonsEnabled(): boolean;
                beep(): void;
                checkImage(arg0: Image, arg1: number, arg2: number, arg3: java.awt.image.ImageObserver): number;
                createCustomCursor(arg0: Image, arg1: Point, arg2: string): Cursor;
                createDragGestureRecognizer(arg0: java.lang.Class, arg1: java.awt.dnd.DragSource, arg2: Component, arg3: number, arg4: java.awt.dnd.DragGestureListener): java.awt.dnd.DragGestureRecognizer;
                createDragSourceContextPeer(arg0: java.awt.dnd.DragGestureEvent): java.awt.dnd.peer.DragSourceContextPeer;
                createImage(arg0: number[]): Image;
                createImage(arg0: java.awt.image.ImageProducer): Image;
                createImage(arg0: java.net.URL): Image;
                createImage(arg0: string): Image;
                createImage(arg0: number[], arg1: number, arg2: number): Image;
                getAWTEventListeners(): java.awt.event.AWTEventListener[];
                getAWTEventListeners(arg0: long): java.awt.event.AWTEventListener[];
                getBestCursorSize(arg0: number, arg1: number): Dimension;
                getColorModel(): java.awt.image.ColorModel;
                getDesktopProperty(arg0: string): any;
                getImage(arg0: java.net.URL): Image;
                getImage(arg0: string): Image;
                getLockingKeyState(arg0: number): boolean;
                getMaximumCursorColors(): number;
                getMenuShortcutKeyMask(): number;
                getPrintJob(arg0: Frame, arg1: string, arg2: java.util.Properties): PrintJob;
                getPrintJob(arg0: Frame, arg1: string, arg2: JobAttributes, arg3: PageAttributes): PrintJob;
                getPropertyChangeListeners(): java.beans.PropertyChangeListener[];
                getPropertyChangeListeners(arg0: string): java.beans.PropertyChangeListener[];
                getScreenInsets(arg0: GraphicsConfiguration): Insets;
                getScreenResolution(): number;
                getScreenSize(): Dimension;
                getSystemClipboard(): java.awt.datatransfer.Clipboard;
                getSystemEventQueue(): EventQueue;
                getSystemSelection(): java.awt.datatransfer.Clipboard;
                isAlwaysOnTopSupported(): boolean;
                isDynamicLayoutActive(): boolean;
                isFrameStateSupported(arg0: number): boolean;
                isModalExclusionTypeSupported(arg0: Dialog$ModalExclusionType): boolean;
                isModalityTypeSupported(arg0: Dialog$ModalityType): boolean;
                mapInputMethodHighlight(arg0: java.awt.im.InputMethodHighlight): java.util.Map;
                prepareImage(arg0: Image, arg1: number, arg2: number, arg3: java.awt.image.ImageObserver): boolean;
                removeAWTEventListener(arg0: java.awt.event.AWTEventListener): void;
                removePropertyChangeListener(arg0: string, arg1: java.beans.PropertyChangeListener): void;
                setDynamicLayout(arg0: boolean): void;
                setLockingKeyState(arg0: number, arg1: boolean): void;
                sync(): void;
            }
            type Toolkit = Toolkit_S & Toolkit$;
            interface Transparency_S {
                readonly BITMASK: number;
                readonly OPAQUE: number;
                readonly TRANSLUCENT: number;
            }
            interface Transparency$ {
                getTransparency(): number;
            }
            type Transparency = Transparency_S & Transparency$;
            interface Window_S {
                getOwnerlessWindows(): Window[];
                getWindows(): Window[];
            }
            type Window_ST = javax.accessibility.Accessible_S & Container_S & Window_S;
            interface Window_C extends Window_ST {
                new (arg0: Frame): Window;
                new (arg0: Window): Window;
                new (arg0: Window, arg1: GraphicsConfiguration): Window;
            }
            interface Window$ {
                addWindowFocusListener(arg0: java.awt.event.WindowFocusListener): void;
                addWindowListener(arg0: java.awt.event.WindowListener): void;
                addWindowStateListener(arg0: java.awt.event.WindowStateListener): void;
                createBufferStrategy(arg0: number): void;
                createBufferStrategy(arg0: number, arg1: BufferCapabilities): void;
                dispose(): void;
                getBufferStrategy(): java.awt.image.BufferStrategy;
                getFocusOwner(): Component;
                getFocusableWindowState(): boolean;
                getIconImages(): java.util.List;
                getModalExclusionType(): Dialog$ModalExclusionType;
                getMostRecentFocusOwner(): Component;
                getOpacity(): number;
                getOwnedWindows(): Window[];
                getOwner(): this;
                getShape(): Shape;
                getType(): Window$Type;
                getWarningString(): string;
                getWindowFocusListeners(): java.awt.event.WindowFocusListener[];
                getWindowListeners(): java.awt.event.WindowListener[];
                getWindowStateListeners(): java.awt.event.WindowStateListener[];
                isActive(): boolean;
                isAlwaysOnTop(): boolean;
                isAlwaysOnTopSupported(): boolean;
                isAutoRequestFocus(): boolean;
                isFocusableWindow(): boolean;
                isFocused(): boolean;
                isLocationByPlatform(): boolean;
                pack(): void;
                removeWindowFocusListener(arg0: java.awt.event.WindowFocusListener): void;
                removeWindowListener(arg0: java.awt.event.WindowListener): void;
                removeWindowStateListener(arg0: java.awt.event.WindowStateListener): void;
                setAlwaysOnTop(arg0: boolean): void;
                setAutoRequestFocus(arg0: boolean): void;
                setFocusableWindowState(arg0: boolean): void;
                setIconImage(arg0: Image): void;
                setIconImages(arg0: java.util.List): void;
                setLocationByPlatform(arg0: boolean): void;
                setLocationRelativeTo(arg0: Component): void;
                setModalExclusionType(arg0: Dialog$ModalExclusionType): void;
                setOpacity(arg0: number): void;
                setShape(arg0: Shape): void;
                setType(arg0: Window$Type): void;
                toBack(): void;
                toFront(): void;
            }
            type Window = Container & javax.accessibility.Accessible & Window_S & Window$;
            enum Window$Type {
                NORMAL,
                UTILITY,
                POPUP
            }
            interface __AttributeValue_S {
            }
            interface __AttributeValue_C extends __AttributeValue_S {
            }
            interface __AttributeValue$ {
            }
            type __AttributeValue = __AttributeValue_S & __AttributeValue$;
        }
        namespace java.awt.color {
            interface ColorSpace_S {
                readonly CS_CIEXYZ: number;
                readonly CS_GRAY: number;
                readonly CS_LINEAR_RGB: number;
                readonly CS_PYCC: number;
                readonly CS_sRGB: number;
                readonly TYPE_2CLR: number;
                readonly TYPE_3CLR: number;
                readonly TYPE_4CLR: number;
                readonly TYPE_5CLR: number;
                readonly TYPE_6CLR: number;
                readonly TYPE_7CLR: number;
                readonly TYPE_8CLR: number;
                readonly TYPE_9CLR: number;
                readonly TYPE_ACLR: number;
                readonly TYPE_BCLR: number;
                readonly TYPE_CCLR: number;
                readonly TYPE_CMY: number;
                readonly TYPE_CMYK: number;
                readonly TYPE_DCLR: number;
                readonly TYPE_ECLR: number;
                readonly TYPE_FCLR: number;
                readonly TYPE_GRAY: number;
                readonly TYPE_HLS: number;
                readonly TYPE_HSV: number;
                readonly TYPE_Lab: number;
                readonly TYPE_Luv: number;
                readonly TYPE_RGB: number;
                readonly TYPE_XYZ: number;
                readonly TYPE_YCbCr: number;
                readonly TYPE_Yxy: number;
                getInstance(arg0: number): ColorSpace;
            }
            type ColorSpace_ST = java.io.Serializable_S & ColorSpace_S;
            interface ColorSpace_C extends ColorSpace_ST {
            }
            interface ColorSpace$ {
                fromCIEXYZ(arg0: number[]): number[];
                fromRGB(arg0: number[]): number[];
                getMaxValue(arg0: number): number;
                getMinValue(arg0: number): number;
                getName(arg0: number): string;
                getNumComponents(): number;
                getType(): number;
                isCS_sRGB(): boolean;
                toCIEXYZ(arg0: number[]): number[];
                toRGB(arg0: number[]): number[];
            }
            type ColorSpace = java.io.Serializable & ColorSpace_S & ColorSpace$;
        }
        namespace java.awt.datatransfer {
            interface Clipboard_S {
            }
            interface Clipboard_C extends Clipboard_S {
                new (arg0: string): Clipboard;
            }
            interface Clipboard$ {
                addFlavorListener(arg0: FlavorListener): void;
                getAvailableDataFlavors(): DataFlavor[];
                getContents(arg0: any): Transferable;
                getData(arg0: DataFlavor): any;
                getFlavorListeners(): FlavorListener[];
                getName(): string;
                isDataFlavorAvailable(arg0: DataFlavor): boolean;
                removeFlavorListener(arg0: FlavorListener): void;
                setContents(arg0: Transferable, arg1: ClipboardOwner): void;
            }
            type Clipboard = Clipboard_S & Clipboard$;
            interface ClipboardOwner_S {
            }
            interface ClipboardOwner$ {
                lostOwnership(arg0: Clipboard, arg1: Transferable): void;
            }
            type ClipboardOwner = ClipboardOwner_S & ClipboardOwner$;
            interface DataFlavor_S {
                allHtmlFlavor: DataFlavor;
                fragmentHtmlFlavor: DataFlavor;
                readonly imageFlavor: DataFlavor;
                readonly javaFileListFlavor: DataFlavor;
                readonly javaJVMLocalObjectMimeType: string;
                readonly javaRemoteObjectMimeType: string;
                readonly javaSerializedObjectMimeType: string;
                selectionHtmlFlavor: DataFlavor;
                readonly stringFlavor: DataFlavor;
                getTextPlainUnicodeFlavor(): DataFlavor;
                selectBestTextFlavor(arg0: DataFlavor[]): DataFlavor;
            }
            type DataFlavor_ST = java.io.Externalizable_S & java.lang.Cloneable_S & DataFlavor_S;
            interface DataFlavor_C extends DataFlavor_ST {
                new (): DataFlavor;
                new (arg0: string): DataFlavor;
                new (arg0: java.lang.Class, arg1: string): DataFlavor;
                new (arg0: string, arg1: string): DataFlavor;
                new (arg0: string, arg1: string, arg2: java.lang.ClassLoader): DataFlavor;
            }
            interface DataFlavor$ {
                clone(): any;
                equals(arg0: DataFlavor): boolean;
                getDefaultRepresentationClass(): java.lang.Class;
                getDefaultRepresentationClassAsString(): string;
                getHumanPresentableName(): string;
                getMimeType(): string;
                getParameter(arg0: string): string;
                getPrimaryType(): string;
                getReaderForText(arg0: Transferable): java.io.Reader;
                getRepresentationClass(): java.lang.Class;
                getSubType(): string;
                isFlavorJavaFileListType(): boolean;
                isFlavorRemoteObjectType(): boolean;
                isFlavorSerializedObjectType(): boolean;
                isFlavorTextType(): boolean;
                isMimeTypeEqual(arg0: DataFlavor): boolean;
                isMimeTypeEqual(arg0: string): boolean;
                isMimeTypeSerializedObject(): boolean;
                isRepresentationClassByteBuffer(): boolean;
                isRepresentationClassCharBuffer(): boolean;
                isRepresentationClassInputStream(): boolean;
                isRepresentationClassReader(): boolean;
                isRepresentationClassRemote(): boolean;
                isRepresentationClassSerializable(): boolean;
                match(arg0: DataFlavor): boolean;
                setHumanPresentableName(arg0: string): void;
            }
            type DataFlavor = java.io.Externalizable & java.lang.Cloneable & DataFlavor_S & DataFlavor$;
            interface FlavorEvent_S {
            }
            type FlavorEvent_ST = java.util.EventObject_S & FlavorEvent_S;
            interface FlavorEvent_C extends FlavorEvent_ST {
                new (arg0: Clipboard): FlavorEvent;
            }
            interface FlavorEvent$ {
            }
            type FlavorEvent = java.util.EventObject & FlavorEvent_S & FlavorEvent$;
            interface FlavorListener_S {
            }
            interface FlavorListener$ {
                flavorsChanged(arg0: FlavorEvent): void;
            }
            type FlavorListener = java.util.EventListener & FlavorListener_S & FlavorListener$;
            interface FlavorMap_S {
            }
            interface FlavorMap$ {
                getFlavorsForNatives(arg0: string[]): java.util.Map;
                getNativesForFlavors(arg0: DataFlavor[]): java.util.Map;
            }
            type FlavorMap = FlavorMap_S & FlavorMap$;
            interface Transferable_S {
            }
            interface Transferable$ {
                getTransferData(arg0: DataFlavor): any;
                getTransferDataFlavors(): DataFlavor[];
                isDataFlavorSupported(arg0: DataFlavor): boolean;
            }
            type Transferable = Transferable_S & Transferable$;
        }
        namespace java.awt.dnd {
            interface DragGestureEvent_S {
            }
            type DragGestureEvent_ST = java.util.EventObject_S & DragGestureEvent_S;
            interface DragGestureEvent_C extends DragGestureEvent_ST {
                new (arg0: DragGestureRecognizer, arg1: number, arg2: Point, arg3: java.util.List): DragGestureEvent;
            }
            interface DragGestureEvent$ {
                getComponent(): Component;
                getDragAction(): number;
                getDragOrigin(): Point;
                getDragSource(): DragSource;
                getSourceAsDragGestureRecognizer(): DragGestureRecognizer;
                getTriggerEvent(): java.awt.event.InputEvent;
                iterator(): java.util.Iterator;
                startDrag(arg0: Cursor, arg1: java.awt.datatransfer.Transferable): void;
                startDrag(arg0: Cursor, arg1: java.awt.datatransfer.Transferable, arg2: DragSourceListener): void;
                startDrag(arg0: Cursor, arg1: Image, arg2: Point, arg3: java.awt.datatransfer.Transferable, arg4: DragSourceListener): void;
                toArray(): any[];
                toArray(arg0: any[]): any[];
            }
            type DragGestureEvent = java.util.EventObject & DragGestureEvent_S & DragGestureEvent$;
            interface DragGestureListener_S {
            }
            interface DragGestureListener$ {
                dragGestureRecognized(arg0: DragGestureEvent): void;
            }
            type DragGestureListener = java.util.EventListener & DragGestureListener_S & DragGestureListener$;
            interface DragGestureRecognizer_S {
            }
            type DragGestureRecognizer_ST = java.io.Serializable_S & DragGestureRecognizer_S;
            interface DragGestureRecognizer_C extends DragGestureRecognizer_ST {
            }
            interface DragGestureRecognizer$ {
                addDragGestureListener(arg0: DragGestureListener): void;
                getComponent(): Component;
                getDragSource(): DragSource;
                getSourceActions(): number;
                getTriggerEvent(): java.awt.event.InputEvent;
                removeDragGestureListener(arg0: DragGestureListener): void;
                resetRecognizer(): void;
                setComponent(arg0: Component): void;
                setSourceActions(arg0: number): void;
            }
            type DragGestureRecognizer = java.io.Serializable & DragGestureRecognizer_S & DragGestureRecognizer$;
            interface DragSource_S {
                readonly DefaultCopyDrop: Cursor;
                readonly DefaultCopyNoDrop: Cursor;
                readonly DefaultLinkDrop: Cursor;
                readonly DefaultLinkNoDrop: Cursor;
                readonly DefaultMoveDrop: Cursor;
                readonly DefaultMoveNoDrop: Cursor;
                getDefaultDragSource(): DragSource;
                getDragThreshold(): number;
                isDragImageSupported(): boolean;
            }
            type DragSource_ST = java.io.Serializable_S & DragSource_S;
            interface DragSource_C extends DragSource_ST {
                new (): DragSource;
            }
            interface DragSource$ {
                addDragSourceListener(arg0: DragSourceListener): void;
                addDragSourceMotionListener(arg0: DragSourceMotionListener): void;
                createDefaultDragGestureRecognizer(arg0: Component, arg1: number, arg2: DragGestureListener): DragGestureRecognizer;
                createDragGestureRecognizer(arg0: java.lang.Class, arg1: Component, arg2: number, arg3: DragGestureListener): DragGestureRecognizer;
                getDragSourceListeners(): DragSourceListener[];
                getDragSourceMotionListeners(): DragSourceMotionListener[];
                getFlavorMap(): java.awt.datatransfer.FlavorMap;
                getListeners(arg0: java.lang.Class): java.util.EventListener[];
                removeDragSourceListener(arg0: DragSourceListener): void;
                removeDragSourceMotionListener(arg0: DragSourceMotionListener): void;
                startDrag(arg0: DragGestureEvent, arg1: Cursor, arg2: java.awt.datatransfer.Transferable, arg3: DragSourceListener): void;
                startDrag(arg0: DragGestureEvent, arg1: Cursor, arg2: java.awt.datatransfer.Transferable, arg3: DragSourceListener, arg4: java.awt.datatransfer.FlavorMap): void;
                startDrag(arg0: DragGestureEvent, arg1: Cursor, arg2: Image, arg3: Point, arg4: java.awt.datatransfer.Transferable, arg5: DragSourceListener): void;
                startDrag(arg0: DragGestureEvent, arg1: Cursor, arg2: Image, arg3: Point, arg4: java.awt.datatransfer.Transferable, arg5: DragSourceListener, arg6: java.awt.datatransfer.FlavorMap): void;
            }
            type DragSource = java.io.Serializable & DragSource_S & DragSource$;
            interface DragSourceContext_S {
            }
            type DragSourceContext_ST = DragSourceMotionListener_S & DragSourceListener_S & java.io.Serializable_S & DragSourceContext_S;
            interface DragSourceContext_C extends DragSourceContext_ST {
                new (arg0: java.awt.dnd.peer.DragSourceContextPeer, arg1: DragGestureEvent, arg2: Cursor, arg3: Image, arg4: Point, arg5: java.awt.datatransfer.Transferable, arg6: DragSourceListener): DragSourceContext;
            }
            interface DragSourceContext$ {
                addDragSourceListener(arg0: DragSourceListener): void;
                getComponent(): Component;
                getCursor(): Cursor;
                getDragSource(): DragSource;
                getSourceActions(): number;
                getTransferable(): java.awt.datatransfer.Transferable;
                getTrigger(): DragGestureEvent;
                removeDragSourceListener(arg0: DragSourceListener): void;
                setCursor(arg0: Cursor): void;
                transferablesFlavorsChanged(): void;
            }
            type DragSourceContext = DragSourceListener & DragSourceMotionListener & java.io.Serializable & DragSourceContext_S & DragSourceContext$;
            interface DragSourceDragEvent_S {
            }
            type DragSourceDragEvent_ST = DragSourceEvent_S & DragSourceDragEvent_S;
            interface DragSourceDragEvent_C extends DragSourceDragEvent_ST {
                new (arg0: DragSourceContext, arg1: number, arg2: number, arg3: number): DragSourceDragEvent;
                new (arg0: DragSourceContext, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): DragSourceDragEvent;
            }
            interface DragSourceDragEvent$ {
                getDropAction(): number;
                getGestureModifiers(): number;
                getGestureModifiersEx(): number;
                getTargetActions(): number;
                getUserAction(): number;
            }
            type DragSourceDragEvent = DragSourceEvent & DragSourceDragEvent_S & DragSourceDragEvent$;
            interface DragSourceDropEvent_S {
            }
            type DragSourceDropEvent_ST = DragSourceEvent_S & DragSourceDropEvent_S;
            interface DragSourceDropEvent_C extends DragSourceDropEvent_ST {
                new (arg0: DragSourceContext): DragSourceDropEvent;
                new (arg0: DragSourceContext, arg1: number, arg2: boolean): DragSourceDropEvent;
                new (arg0: DragSourceContext, arg1: number, arg2: boolean, arg3: number, arg4: number): DragSourceDropEvent;
            }
            interface DragSourceDropEvent$ {
                getDropAction(): number;
                getDropSuccess(): boolean;
            }
            type DragSourceDropEvent = DragSourceEvent & DragSourceDropEvent_S & DragSourceDropEvent$;
            interface DragSourceEvent_S {
            }
            type DragSourceEvent_ST = java.util.EventObject_S & DragSourceEvent_S;
            interface DragSourceEvent_C extends DragSourceEvent_ST {
                new (arg0: DragSourceContext): DragSourceEvent;
                new (arg0: DragSourceContext, arg1: number, arg2: number): DragSourceEvent;
            }
            interface DragSourceEvent$ {
                getDragSourceContext(): DragSourceContext;
                getLocation(): Point;
                getX(): number;
                getY(): number;
            }
            type DragSourceEvent = java.util.EventObject & DragSourceEvent_S & DragSourceEvent$;
            interface DragSourceListener_S {
            }
            interface DragSourceListener$ {
                dragDropEnd(arg0: DragSourceDropEvent): void;
                dragEnter(arg0: DragSourceDragEvent): void;
                dragExit(arg0: DragSourceEvent): void;
                dragOver(arg0: DragSourceDragEvent): void;
                dropActionChanged(arg0: DragSourceDragEvent): void;
            }
            type DragSourceListener = java.util.EventListener & DragSourceListener_S & DragSourceListener$;
            interface DragSourceMotionListener_S {
            }
            interface DragSourceMotionListener$ {
                dragMouseMoved(arg0: DragSourceDragEvent): void;
            }
            type DragSourceMotionListener = java.util.EventListener & DragSourceMotionListener_S & DragSourceMotionListener$;
            interface DropTarget_S {
            }
            type DropTarget_ST = DropTargetListener_S & java.io.Serializable_S & DropTarget_S;
            interface DropTarget_C extends DropTarget_ST {
                new (): DropTarget;
                new (arg0: Component, arg1: DropTargetListener): DropTarget;
                new (arg0: Component, arg1: number, arg2: DropTargetListener): DropTarget;
                new (arg0: Component, arg1: number, arg2: DropTargetListener, arg3: boolean): DropTarget;
                new (arg0: Component, arg1: number, arg2: DropTargetListener, arg3: boolean, arg4: java.awt.datatransfer.FlavorMap): DropTarget;
            }
            interface DropTarget$ {
                addDropTargetListener(arg0: DropTargetListener): void;
                addNotify(arg0: java.awt.peer.ComponentPeer): void;
                getComponent(): Component;
                getDefaultActions(): number;
                getDropTargetContext(): DropTargetContext;
                getFlavorMap(): java.awt.datatransfer.FlavorMap;
                isActive(): boolean;
                removeDropTargetListener(arg0: DropTargetListener): void;
                removeNotify(arg0: java.awt.peer.ComponentPeer): void;
                setActive(arg0: boolean): void;
                setComponent(arg0: Component): void;
                setDefaultActions(arg0: number): void;
                setFlavorMap(arg0: java.awt.datatransfer.FlavorMap): void;
            }
            type DropTarget = DropTargetListener & java.io.Serializable & DropTarget_S & DropTarget$;
            interface DropTargetContext_S {
            }
            type DropTargetContext_ST = java.io.Serializable_S & DropTargetContext_S;
            interface DropTargetContext_C extends DropTargetContext_ST {
                new (): DropTargetContext;
            }
            interface DropTargetContext$ {
                addNotify(arg0: java.awt.dnd.peer.DropTargetContextPeer): void;
                dropComplete(arg0: boolean): void;
                getComponent(): Component;
                getDropTarget(): DropTarget;
                removeNotify(): void;
            }
            type DropTargetContext = java.io.Serializable & DropTargetContext_S & DropTargetContext$;
            interface DropTargetDragEvent_S {
            }
            type DropTargetDragEvent_ST = DropTargetEvent_S & DropTargetDragEvent_S;
            interface DropTargetDragEvent_C extends DropTargetDragEvent_ST {
                new (arg0: DropTargetContext, arg1: Point, arg2: number, arg3: number): DropTargetDragEvent;
            }
            interface DropTargetDragEvent$ {
                acceptDrag(arg0: number): void;
                getCurrentDataFlavors(): java.awt.datatransfer.DataFlavor[];
                getCurrentDataFlavorsAsList(): java.util.List;
                getDropAction(): number;
                getLocation(): Point;
                getSourceActions(): number;
                getTransferable(): java.awt.datatransfer.Transferable;
                isDataFlavorSupported(arg0: java.awt.datatransfer.DataFlavor): boolean;
                rejectDrag(): void;
            }
            type DropTargetDragEvent = DropTargetEvent & DropTargetDragEvent_S & DropTargetDragEvent$;
            interface DropTargetDropEvent_S {
            }
            type DropTargetDropEvent_ST = DropTargetEvent_S & DropTargetDropEvent_S;
            interface DropTargetDropEvent_C extends DropTargetDropEvent_ST {
                new (arg0: DropTargetContext, arg1: Point, arg2: number, arg3: number): DropTargetDropEvent;
                new (arg0: DropTargetContext, arg1: Point, arg2: number, arg3: number, arg4: boolean): DropTargetDropEvent;
            }
            interface DropTargetDropEvent$ {
                acceptDrop(arg0: number): void;
                dropComplete(arg0: boolean): void;
                getCurrentDataFlavors(): java.awt.datatransfer.DataFlavor[];
                getCurrentDataFlavorsAsList(): java.util.List;
                getDropAction(): number;
                getLocation(): Point;
                getSourceActions(): number;
                getTransferable(): java.awt.datatransfer.Transferable;
                isDataFlavorSupported(arg0: java.awt.datatransfer.DataFlavor): boolean;
                isLocalTransfer(): boolean;
                rejectDrop(): void;
            }
            type DropTargetDropEvent = DropTargetEvent & DropTargetDropEvent_S & DropTargetDropEvent$;
            interface DropTargetEvent_S {
            }
            type DropTargetEvent_ST = java.util.EventObject_S & DropTargetEvent_S;
            interface DropTargetEvent_C extends DropTargetEvent_ST {
                new (arg0: DropTargetContext): DropTargetEvent;
            }
            interface DropTargetEvent$ {
                getDropTargetContext(): DropTargetContext;
            }
            type DropTargetEvent = java.util.EventObject & DropTargetEvent_S & DropTargetEvent$;
            interface DropTargetListener_S {
            }
            interface DropTargetListener$ {
                dragEnter(arg0: DropTargetDragEvent): void;
                dragExit(arg0: DropTargetEvent): void;
                dragOver(arg0: DropTargetDragEvent): void;
                drop(arg0: DropTargetDropEvent): void;
                dropActionChanged(arg0: DropTargetDragEvent): void;
            }
            type DropTargetListener = java.util.EventListener & DropTargetListener_S & DropTargetListener$;
        }
        namespace java.awt.dnd.peer {
            interface DragSourceContextPeer_S {
            }
            interface DragSourceContextPeer$ {
                getCursor(): Cursor;
                setCursor(arg0: Cursor): void;
                startDrag(arg0: DragSourceContext, arg1: Cursor, arg2: Image, arg3: Point): void;
                transferablesFlavorsChanged(): void;
            }
            type DragSourceContextPeer = DragSourceContextPeer_S & DragSourceContextPeer$;
            interface DropTargetContextPeer_S {
            }
            interface DropTargetContextPeer$ {
                acceptDrag(arg0: number): void;
                acceptDrop(arg0: number): void;
                dropComplete(arg0: boolean): void;
                getDropTarget(): DropTarget;
                getTargetActions(): number;
                getTransferDataFlavors(): java.awt.datatransfer.DataFlavor[];
                getTransferable(): java.awt.datatransfer.Transferable;
                isTransferableJVMLocal(): boolean;
                rejectDrag(): void;
                rejectDrop(): void;
                setTargetActions(arg0: number): void;
            }
            type DropTargetContextPeer = DropTargetContextPeer_S & DropTargetContextPeer$;
        }
        namespace java.awt.event {
            interface AWTEventListener_S {
            }
            interface AWTEventListener$ {
                eventDispatched(arg0: AWTEvent): void;
            }
            type AWTEventListener = java.util.EventListener & AWTEventListener_S & AWTEventListener$;
            interface ActionEvent_S {
                readonly ACTION_FIRST: number;
                readonly ACTION_LAST: number;
                readonly ACTION_PERFORMED: number;
                readonly ALT_MASK: number;
                readonly CTRL_MASK: number;
                readonly META_MASK: number;
                readonly SHIFT_MASK: number;
            }
            type ActionEvent_ST = AWTEvent_S & ActionEvent_S;
            interface ActionEvent_C extends ActionEvent_ST {
                new (arg0: any, arg1: number, arg2: string): ActionEvent;
                new (arg0: any, arg1: number, arg2: string, arg3: number): ActionEvent;
                new (arg0: any, arg1: number, arg2: string, arg3: long, arg4: number): ActionEvent;
            }
            interface ActionEvent$ {
                getActionCommand(): string;
                getModifiers(): number;
                getWhen(): long;
            }
            type ActionEvent = AWTEvent & ActionEvent_S & ActionEvent$;
            interface ActionListener_S {
            }
            interface ActionListener$ {
                actionPerformed(arg0: ActionEvent): void;
            }
            type ActionListener = java.util.EventListener & ActionListener_S & ActionListener$;
            interface ComponentEvent_S {
                readonly COMPONENT_FIRST: number;
                readonly COMPONENT_HIDDEN: number;
                readonly COMPONENT_LAST: number;
                readonly COMPONENT_MOVED: number;
                readonly COMPONENT_RESIZED: number;
                readonly COMPONENT_SHOWN: number;
            }
            type ComponentEvent_ST = AWTEvent_S & ComponentEvent_S;
            interface ComponentEvent_C extends ComponentEvent_ST {
                new (arg0: Component, arg1: number): ComponentEvent;
            }
            interface ComponentEvent$ {
                getComponent(): Component;
            }
            type ComponentEvent = AWTEvent & ComponentEvent_S & ComponentEvent$;
            interface ComponentListener_S {
            }
            interface ComponentListener$ {
                componentHidden(arg0: ComponentEvent): void;
                componentMoved(arg0: ComponentEvent): void;
                componentResized(arg0: ComponentEvent): void;
                componentShown(arg0: ComponentEvent): void;
            }
            type ComponentListener = java.util.EventListener & ComponentListener_S & ComponentListener$;
            interface ContainerEvent_S {
                readonly COMPONENT_ADDED: number;
                readonly COMPONENT_REMOVED: number;
                readonly CONTAINER_FIRST: number;
                readonly CONTAINER_LAST: number;
            }
            type ContainerEvent_ST = ComponentEvent_S & ContainerEvent_S;
            interface ContainerEvent_C extends ContainerEvent_ST {
                new (arg0: Component, arg1: number, arg2: Component): ContainerEvent;
            }
            interface ContainerEvent$ {
                getChild(): Component;
                getContainer(): Container;
            }
            type ContainerEvent = ComponentEvent & ContainerEvent_S & ContainerEvent$;
            interface ContainerListener_S {
            }
            interface ContainerListener$ {
                componentAdded(arg0: ContainerEvent): void;
                componentRemoved(arg0: ContainerEvent): void;
            }
            type ContainerListener = java.util.EventListener & ContainerListener_S & ContainerListener$;
            interface FocusEvent_S {
                readonly FOCUS_FIRST: number;
                readonly FOCUS_GAINED: number;
                readonly FOCUS_LAST: number;
                readonly FOCUS_LOST: number;
            }
            type FocusEvent_ST = ComponentEvent_S & FocusEvent_S;
            interface FocusEvent_C extends FocusEvent_ST {
                new (arg0: Component, arg1: number): FocusEvent;
                new (arg0: Component, arg1: number, arg2: boolean): FocusEvent;
                new (arg0: Component, arg1: number, arg2: boolean, arg3: Component): FocusEvent;
            }
            interface FocusEvent$ {
                getOppositeComponent(): Component;
                isTemporary(): boolean;
            }
            type FocusEvent = ComponentEvent & FocusEvent_S & FocusEvent$;
            interface FocusListener_S {
            }
            interface FocusListener$ {
                focusGained(arg0: FocusEvent): void;
                focusLost(arg0: FocusEvent): void;
            }
            type FocusListener = java.util.EventListener & FocusListener_S & FocusListener$;
            interface HierarchyBoundsListener_S {
            }
            interface HierarchyBoundsListener$ {
                ancestorMoved(arg0: HierarchyEvent): void;
                ancestorResized(arg0: HierarchyEvent): void;
            }
            type HierarchyBoundsListener = java.util.EventListener & HierarchyBoundsListener_S & HierarchyBoundsListener$;
            interface HierarchyEvent_S {
                readonly ANCESTOR_MOVED: number;
                readonly ANCESTOR_RESIZED: number;
                readonly DISPLAYABILITY_CHANGED: number;
                readonly HIERARCHY_CHANGED: number;
                readonly HIERARCHY_FIRST: number;
                readonly HIERARCHY_LAST: number;
                readonly PARENT_CHANGED: number;
                readonly SHOWING_CHANGED: number;
            }
            type HierarchyEvent_ST = AWTEvent_S & HierarchyEvent_S;
            interface HierarchyEvent_C extends HierarchyEvent_ST {
                new (arg0: Component, arg1: number, arg2: Component, arg3: Container): HierarchyEvent;
                new (arg0: Component, arg1: number, arg2: Component, arg3: Container, arg4: long): HierarchyEvent;
            }
            interface HierarchyEvent$ {
                getChangeFlags(): long;
                getChanged(): Component;
                getChangedParent(): Container;
                getComponent(): Component;
            }
            type HierarchyEvent = AWTEvent & HierarchyEvent_S & HierarchyEvent$;
            interface HierarchyListener_S {
            }
            interface HierarchyListener$ {
                hierarchyChanged(arg0: HierarchyEvent): void;
            }
            type HierarchyListener = java.util.EventListener & HierarchyListener_S & HierarchyListener$;
            interface InputEvent_S {
                readonly ALT_DOWN_MASK: number;
                readonly ALT_GRAPH_DOWN_MASK: number;
                readonly ALT_GRAPH_MASK: number;
                readonly ALT_MASK: number;
                readonly BUTTON1_DOWN_MASK: number;
                readonly BUTTON1_MASK: number;
                readonly BUTTON2_DOWN_MASK: number;
                readonly BUTTON2_MASK: number;
                readonly BUTTON3_DOWN_MASK: number;
                readonly BUTTON3_MASK: number;
                readonly CTRL_DOWN_MASK: number;
                readonly CTRL_MASK: number;
                readonly META_DOWN_MASK: number;
                readonly META_MASK: number;
                readonly SHIFT_DOWN_MASK: number;
                readonly SHIFT_MASK: number;
                getMaskForButton(arg0: number): number;
                getModifiersExText(arg0: number): string;
            }
            type InputEvent_ST = ComponentEvent_S & InputEvent_S;
            interface InputEvent_C extends InputEvent_ST {
            }
            interface InputEvent$ {
                consume(): void;
                getModifiers(): number;
                getModifiersEx(): number;
                getWhen(): long;
                isAltDown(): boolean;
                isAltGraphDown(): boolean;
                isConsumed(): boolean;
                isControlDown(): boolean;
                isMetaDown(): boolean;
                isShiftDown(): boolean;
            }
            type InputEvent = ComponentEvent & InputEvent_S & InputEvent$;
            interface InputMethodEvent_S {
                readonly CARET_POSITION_CHANGED: number;
                readonly INPUT_METHOD_FIRST: number;
                readonly INPUT_METHOD_LAST: number;
                readonly INPUT_METHOD_TEXT_CHANGED: number;
            }
            type InputMethodEvent_ST = AWTEvent_S & InputMethodEvent_S;
            interface InputMethodEvent_C extends InputMethodEvent_ST {
                new (arg0: Component, arg1: number, arg2: java.awt.font.TextHitInfo, arg3: java.awt.font.TextHitInfo): InputMethodEvent;
                new (arg0: Component, arg1: number, arg2: java.text.AttributedCharacterIterator, arg3: number, arg4: java.awt.font.TextHitInfo, arg5: java.awt.font.TextHitInfo): InputMethodEvent;
                new (arg0: Component, arg1: number, arg2: long, arg3: java.text.AttributedCharacterIterator, arg4: number, arg5: java.awt.font.TextHitInfo, arg6: java.awt.font.TextHitInfo): InputMethodEvent;
            }
            interface InputMethodEvent$ {
                consume(): void;
                getCaret(): java.awt.font.TextHitInfo;
                getCommittedCharacterCount(): number;
                getText(): java.text.AttributedCharacterIterator;
                getVisiblePosition(): java.awt.font.TextHitInfo;
                getWhen(): long;
                isConsumed(): boolean;
            }
            type InputMethodEvent = AWTEvent & InputMethodEvent_S & InputMethodEvent$;
            interface InputMethodListener_S {
            }
            interface InputMethodListener$ {
                caretPositionChanged(arg0: InputMethodEvent): void;
                inputMethodTextChanged(arg0: InputMethodEvent): void;
            }
            type InputMethodListener = java.util.EventListener & InputMethodListener_S & InputMethodListener$;
            interface KeyEvent_S {
                readonly CHAR_UNDEFINED: string;
                readonly KEY_FIRST: number;
                readonly KEY_LAST: number;
                readonly KEY_LOCATION_LEFT: number;
                readonly KEY_LOCATION_NUMPAD: number;
                readonly KEY_LOCATION_RIGHT: number;
                readonly KEY_LOCATION_STANDARD: number;
                readonly KEY_LOCATION_UNKNOWN: number;
                readonly KEY_PRESSED: number;
                readonly KEY_RELEASED: number;
                readonly KEY_TYPED: number;
                readonly VK_0: number;
                readonly VK_1: number;
                readonly VK_2: number;
                readonly VK_3: number;
                readonly VK_4: number;
                readonly VK_5: number;
                readonly VK_6: number;
                readonly VK_7: number;
                readonly VK_8: number;
                readonly VK_9: number;
                readonly VK_A: number;
                readonly VK_ACCEPT: number;
                readonly VK_ADD: number;
                readonly VK_AGAIN: number;
                readonly VK_ALL_CANDIDATES: number;
                readonly VK_ALPHANUMERIC: number;
                readonly VK_ALT: number;
                readonly VK_ALT_GRAPH: number;
                readonly VK_AMPERSAND: number;
                readonly VK_ASTERISK: number;
                readonly VK_AT: number;
                readonly VK_B: number;
                readonly VK_BACK_QUOTE: number;
                readonly VK_BACK_SLASH: number;
                readonly VK_BACK_SPACE: number;
                readonly VK_BEGIN: number;
                readonly VK_BRACELEFT: number;
                readonly VK_BRACERIGHT: number;
                readonly VK_C: number;
                readonly VK_CANCEL: number;
                readonly VK_CAPS_LOCK: number;
                readonly VK_CIRCUMFLEX: number;
                readonly VK_CLEAR: number;
                readonly VK_CLOSE_BRACKET: number;
                readonly VK_CODE_INPUT: number;
                readonly VK_COLON: number;
                readonly VK_COMMA: number;
                readonly VK_COMPOSE: number;
                readonly VK_CONTEXT_MENU: number;
                readonly VK_CONTROL: number;
                readonly VK_CONVERT: number;
                readonly VK_COPY: number;
                readonly VK_CUT: number;
                readonly VK_D: number;
                readonly VK_DEAD_ABOVEDOT: number;
                readonly VK_DEAD_ABOVERING: number;
                readonly VK_DEAD_ACUTE: number;
                readonly VK_DEAD_BREVE: number;
                readonly VK_DEAD_CARON: number;
                readonly VK_DEAD_CEDILLA: number;
                readonly VK_DEAD_CIRCUMFLEX: number;
                readonly VK_DEAD_DIAERESIS: number;
                readonly VK_DEAD_DOUBLEACUTE: number;
                readonly VK_DEAD_GRAVE: number;
                readonly VK_DEAD_IOTA: number;
                readonly VK_DEAD_MACRON: number;
                readonly VK_DEAD_OGONEK: number;
                readonly VK_DEAD_SEMIVOICED_SOUND: number;
                readonly VK_DEAD_TILDE: number;
                readonly VK_DEAD_VOICED_SOUND: number;
                readonly VK_DECIMAL: number;
                readonly VK_DELETE: number;
                readonly VK_DIVIDE: number;
                readonly VK_DOLLAR: number;
                readonly VK_DOWN: number;
                readonly VK_E: number;
                readonly VK_END: number;
                readonly VK_ENTER: number;
                readonly VK_EQUALS: number;
                readonly VK_ESCAPE: number;
                readonly VK_EURO_SIGN: number;
                readonly VK_EXCLAMATION_MARK: number;
                readonly VK_F: number;
                readonly VK_F1: number;
                readonly VK_F10: number;
                readonly VK_F11: number;
                readonly VK_F12: number;
                readonly VK_F13: number;
                readonly VK_F14: number;
                readonly VK_F15: number;
                readonly VK_F16: number;
                readonly VK_F17: number;
                readonly VK_F18: number;
                readonly VK_F19: number;
                readonly VK_F2: number;
                readonly VK_F20: number;
                readonly VK_F21: number;
                readonly VK_F22: number;
                readonly VK_F23: number;
                readonly VK_F24: number;
                readonly VK_F3: number;
                readonly VK_F4: number;
                readonly VK_F5: number;
                readonly VK_F6: number;
                readonly VK_F7: number;
                readonly VK_F8: number;
                readonly VK_F9: number;
                readonly VK_FINAL: number;
                readonly VK_FIND: number;
                readonly VK_FULL_WIDTH: number;
                readonly VK_G: number;
                readonly VK_GREATER: number;
                readonly VK_H: number;
                readonly VK_HALF_WIDTH: number;
                readonly VK_HELP: number;
                readonly VK_HIRAGANA: number;
                readonly VK_HOME: number;
                readonly VK_I: number;
                readonly VK_INPUT_METHOD_ON_OFF: number;
                readonly VK_INSERT: number;
                readonly VK_INVERTED_EXCLAMATION_MARK: number;
                readonly VK_J: number;
                readonly VK_JAPANESE_HIRAGANA: number;
                readonly VK_JAPANESE_KATAKANA: number;
                readonly VK_JAPANESE_ROMAN: number;
                readonly VK_K: number;
                readonly VK_KANA: number;
                readonly VK_KANA_LOCK: number;
                readonly VK_KANJI: number;
                readonly VK_KATAKANA: number;
                readonly VK_KP_DOWN: number;
                readonly VK_KP_LEFT: number;
                readonly VK_KP_RIGHT: number;
                readonly VK_KP_UP: number;
                readonly VK_L: number;
                readonly VK_LEFT: number;
                readonly VK_LEFT_PARENTHESIS: number;
                readonly VK_LESS: number;
                readonly VK_M: number;
                readonly VK_META: number;
                readonly VK_MINUS: number;
                readonly VK_MODECHANGE: number;
                readonly VK_MULTIPLY: number;
                readonly VK_N: number;
                readonly VK_NONCONVERT: number;
                readonly VK_NUMBER_SIGN: number;
                readonly VK_NUMPAD0: number;
                readonly VK_NUMPAD1: number;
                readonly VK_NUMPAD2: number;
                readonly VK_NUMPAD3: number;
                readonly VK_NUMPAD4: number;
                readonly VK_NUMPAD5: number;
                readonly VK_NUMPAD6: number;
                readonly VK_NUMPAD7: number;
                readonly VK_NUMPAD8: number;
                readonly VK_NUMPAD9: number;
                readonly VK_NUM_LOCK: number;
                readonly VK_O: number;
                readonly VK_OPEN_BRACKET: number;
                readonly VK_P: number;
                readonly VK_PAGE_DOWN: number;
                readonly VK_PAGE_UP: number;
                readonly VK_PASTE: number;
                readonly VK_PAUSE: number;
                readonly VK_PERIOD: number;
                readonly VK_PLUS: number;
                readonly VK_PREVIOUS_CANDIDATE: number;
                readonly VK_PRINTSCREEN: number;
                readonly VK_PROPS: number;
                readonly VK_Q: number;
                readonly VK_QUOTE: number;
                readonly VK_QUOTEDBL: number;
                readonly VK_R: number;
                readonly VK_RIGHT: number;
                readonly VK_RIGHT_PARENTHESIS: number;
                readonly VK_ROMAN_CHARACTERS: number;
                readonly VK_S: number;
                readonly VK_SCROLL_LOCK: number;
                readonly VK_SEMICOLON: number;
                readonly VK_SEPARATER: number;
                readonly VK_SEPARATOR: number;
                readonly VK_SHIFT: number;
                readonly VK_SLASH: number;
                readonly VK_SPACE: number;
                readonly VK_STOP: number;
                readonly VK_SUBTRACT: number;
                readonly VK_T: number;
                readonly VK_TAB: number;
                readonly VK_U: number;
                readonly VK_UNDEFINED: number;
                readonly VK_UNDERSCORE: number;
                readonly VK_UNDO: number;
                readonly VK_UP: number;
                readonly VK_V: number;
                readonly VK_W: number;
                readonly VK_WINDOWS: number;
                readonly VK_X: number;
                readonly VK_Y: number;
                readonly VK_Z: number;
                getExtendedKeyCodeForChar(arg0: number): number;
                getKeyModifiersText(arg0: number): string;
                getKeyText(arg0: number): string;
            }
            type KeyEvent_ST = InputEvent_S & KeyEvent_S;
            interface KeyEvent_C extends KeyEvent_ST {
                new (arg0: Component, arg1: number, arg2: long, arg3: number, arg4: number, arg5: string): KeyEvent;
                new (arg0: Component, arg1: number, arg2: long, arg3: number, arg4: number, arg5: string, arg6: number): KeyEvent;
            }
            interface KeyEvent$ {
                getExtendedKeyCode(): number;
                getKeyChar(): string;
                getKeyCode(): number;
                getKeyLocation(): number;
                isActionKey(): boolean;
                setKeyChar(arg0: string): void;
                setKeyCode(arg0: number): void;
            }
            type KeyEvent = InputEvent & KeyEvent_S & KeyEvent$;
            interface KeyListener_S {
            }
            interface KeyListener$ {
                keyPressed(arg0: KeyEvent): void;
                keyReleased(arg0: KeyEvent): void;
                keyTyped(arg0: KeyEvent): void;
            }
            type KeyListener = java.util.EventListener & KeyListener_S & KeyListener$;
            interface MouseEvent_S {
                readonly BUTTON1: number;
                readonly BUTTON2: number;
                readonly BUTTON3: number;
                readonly MOUSE_CLICKED: number;
                readonly MOUSE_DRAGGED: number;
                readonly MOUSE_ENTERED: number;
                readonly MOUSE_EXITED: number;
                readonly MOUSE_FIRST: number;
                readonly MOUSE_LAST: number;
                readonly MOUSE_MOVED: number;
                readonly MOUSE_PRESSED: number;
                readonly MOUSE_RELEASED: number;
                readonly MOUSE_WHEEL: number;
                readonly NOBUTTON: number;
                getMouseModifiersText(arg0: number): string;
            }
            type MouseEvent_ST = InputEvent_S & MouseEvent_S;
            interface MouseEvent_C extends MouseEvent_ST {
                new (arg0: Component, arg1: number, arg2: long, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean): MouseEvent;
                new (arg0: Component, arg1: number, arg2: long, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number): MouseEvent;
                new (arg0: Component, arg1: number, arg2: long, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number): MouseEvent;
            }
            interface MouseEvent$ {
                getButton(): number;
                getClickCount(): number;
                getLocationOnScreen(): Point;
                getPoint(): Point;
                getX(): number;
                getXOnScreen(): number;
                getY(): number;
                getYOnScreen(): number;
                isPopupTrigger(): boolean;
                translatePoint(arg0: number, arg1: number): void;
            }
            type MouseEvent = InputEvent & MouseEvent_S & MouseEvent$;
            interface MouseListener_S {
            }
            interface MouseListener$ {
                mouseClicked(arg0: MouseEvent): void;
                mouseEntered(arg0: MouseEvent): void;
                mouseExited(arg0: MouseEvent): void;
                mousePressed(arg0: MouseEvent): void;
                mouseReleased(arg0: MouseEvent): void;
            }
            type MouseListener = java.util.EventListener & MouseListener_S & MouseListener$;
            interface MouseMotionListener_S {
            }
            interface MouseMotionListener$ {
                mouseDragged(arg0: MouseEvent): void;
                mouseMoved(arg0: MouseEvent): void;
            }
            type MouseMotionListener = java.util.EventListener & MouseMotionListener_S & MouseMotionListener$;
            interface MouseWheelEvent_S {
                readonly WHEEL_BLOCK_SCROLL: number;
                readonly WHEEL_UNIT_SCROLL: number;
            }
            type MouseWheelEvent_ST = MouseEvent_S & MouseWheelEvent_S;
            interface MouseWheelEvent_C extends MouseWheelEvent_ST {
                new (arg0: Component, arg1: number, arg2: long, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number, arg9: number, arg10: number): MouseWheelEvent;
                new (arg0: Component, arg1: number, arg2: long, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number, arg11: number, arg12: number): MouseWheelEvent;
                new (arg0: Component, arg1: number, arg2: long, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number, arg11: number, arg12: number, arg13: number): MouseWheelEvent;
            }
            interface MouseWheelEvent$ {
                getPreciseWheelRotation(): number;
                getScrollAmount(): number;
                getScrollType(): number;
                getUnitsToScroll(): number;
                getWheelRotation(): number;
            }
            type MouseWheelEvent = MouseEvent & MouseWheelEvent_S & MouseWheelEvent$;
            interface MouseWheelListener_S {
            }
            interface MouseWheelListener$ {
                mouseWheelMoved(arg0: MouseWheelEvent): void;
            }
            type MouseWheelListener = java.util.EventListener & MouseWheelListener_S & MouseWheelListener$;
            interface PaintEvent_S {
                readonly PAINT: number;
                readonly PAINT_FIRST: number;
                readonly PAINT_LAST: number;
                readonly UPDATE: number;
            }
            type PaintEvent_ST = ComponentEvent_S & PaintEvent_S;
            interface PaintEvent_C extends PaintEvent_ST {
                new (arg0: Component, arg1: number, arg2: Rectangle): PaintEvent;
            }
            interface PaintEvent$ {
                getUpdateRect(): Rectangle;
                setUpdateRect(arg0: Rectangle): void;
            }
            type PaintEvent = ComponentEvent & PaintEvent_S & PaintEvent$;
            interface WindowEvent_S {
                readonly WINDOW_ACTIVATED: number;
                readonly WINDOW_CLOSED: number;
                readonly WINDOW_CLOSING: number;
                readonly WINDOW_DEACTIVATED: number;
                readonly WINDOW_DEICONIFIED: number;
                readonly WINDOW_FIRST: number;
                readonly WINDOW_GAINED_FOCUS: number;
                readonly WINDOW_ICONIFIED: number;
                readonly WINDOW_LAST: number;
                readonly WINDOW_LOST_FOCUS: number;
                readonly WINDOW_OPENED: number;
                readonly WINDOW_STATE_CHANGED: number;
            }
            type WindowEvent_ST = ComponentEvent_S & WindowEvent_S;
            interface WindowEvent_C extends WindowEvent_ST {
                new (arg0: Window, arg1: number): WindowEvent;
                new (arg0: Window, arg1: number, arg2: Window): WindowEvent;
                new (arg0: Window, arg1: number, arg2: number, arg3: number): WindowEvent;
                new (arg0: Window, arg1: number, arg2: Window, arg3: number, arg4: number): WindowEvent;
            }
            interface WindowEvent$ {
                getNewState(): number;
                getOldState(): number;
                getOppositeWindow(): Window;
                getWindow(): Window;
            }
            type WindowEvent = ComponentEvent & WindowEvent_S & WindowEvent$;
            interface WindowFocusListener_S {
            }
            interface WindowFocusListener$ {
                windowGainedFocus(arg0: WindowEvent): void;
                windowLostFocus(arg0: WindowEvent): void;
            }
            type WindowFocusListener = java.util.EventListener & WindowFocusListener_S & WindowFocusListener$;
            interface WindowListener_S {
            }
            interface WindowListener$ {
                windowActivated(arg0: WindowEvent): void;
                windowClosed(arg0: WindowEvent): void;
                windowClosing(arg0: WindowEvent): void;
                windowDeactivated(arg0: WindowEvent): void;
                windowDeiconified(arg0: WindowEvent): void;
                windowIconified(arg0: WindowEvent): void;
                windowOpened(arg0: WindowEvent): void;
            }
            type WindowListener = java.util.EventListener & WindowListener_S & WindowListener$;
            interface WindowStateListener_S {
            }
            interface WindowStateListener$ {
                windowStateChanged(arg0: WindowEvent): void;
            }
            type WindowStateListener = java.util.EventListener & WindowStateListener_S & WindowStateListener$;
        }
        namespace java.awt.font {
            interface FontRenderContext_S {
            }
            interface FontRenderContext_C extends FontRenderContext_S {
                new (arg0: java.awt.geom.AffineTransform, arg1: any, arg2: any): FontRenderContext;
                new (arg0: java.awt.geom.AffineTransform, arg1: boolean, arg2: boolean): FontRenderContext;
            }
            interface FontRenderContext$ {
                equals(arg0: FontRenderContext): boolean;
                getAntiAliasingHint(): any;
                getFractionalMetricsHint(): any;
                getTransform(): java.awt.geom.AffineTransform;
                getTransformType(): number;
                isAntiAliased(): boolean;
                isTransformed(): boolean;
                usesFractionalMetrics(): boolean;
            }
            type FontRenderContext = FontRenderContext_S & FontRenderContext$;
            interface GlyphJustificationInfo_S {
                readonly PRIORITY_INTERCHAR: number;
                readonly PRIORITY_KASHIDA: number;
                readonly PRIORITY_NONE: number;
                readonly PRIORITY_WHITESPACE: number;
            }
            interface GlyphJustificationInfo_C extends GlyphJustificationInfo_S {
                new (arg0: number, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: number, arg7: number, arg8: number): GlyphJustificationInfo;
            }
            interface GlyphJustificationInfo$ {
                readonly growAbsorb: boolean;
                readonly growLeftLimit: number;
                readonly growPriority: number;
                readonly growRightLimit: number;
                readonly shrinkAbsorb: boolean;
                readonly shrinkLeftLimit: number;
                readonly shrinkPriority: number;
                readonly shrinkRightLimit: number;
                readonly weight: number;
            }
            type GlyphJustificationInfo = GlyphJustificationInfo_S & GlyphJustificationInfo$;
            interface GlyphMetrics_S {
                readonly COMBINING: number;
                readonly COMPONENT: number;
                readonly LIGATURE: number;
                readonly STANDARD: number;
                readonly WHITESPACE: number;
            }
            interface GlyphMetrics_C extends GlyphMetrics_S {
                new (arg0: number, arg1: java.awt.geom.Rectangle2D, arg2: number): GlyphMetrics;
                new (arg0: boolean, arg1: number, arg2: number, arg3: java.awt.geom.Rectangle2D, arg4: number): GlyphMetrics;
            }
            interface GlyphMetrics$ {
                getAdvance(): number;
                getAdvanceX(): number;
                getAdvanceY(): number;
                getBounds2D(): java.awt.geom.Rectangle2D;
                getLSB(): number;
                getRSB(): number;
                getType(): number;
                isCombining(): boolean;
                isComponent(): boolean;
                isLigature(): boolean;
                isStandard(): boolean;
                isWhitespace(): boolean;
            }
            type GlyphMetrics = GlyphMetrics_S & GlyphMetrics$;
            interface GlyphVector_S {
                readonly FLAG_COMPLEX_GLYPHS: number;
                readonly FLAG_HAS_POSITION_ADJUSTMENTS: number;
                readonly FLAG_HAS_TRANSFORMS: number;
                readonly FLAG_MASK: number;
                readonly FLAG_RUN_RTL: number;
            }
            type GlyphVector_ST = java.lang.Cloneable_S & GlyphVector_S;
            interface GlyphVector_C extends GlyphVector_ST {
                new (): GlyphVector;
            }
            interface GlyphVector$ {
                equals(arg0: GlyphVector): boolean;
                getFont(): Font;
                getFontRenderContext(): FontRenderContext;
                getGlyphCharIndex(arg0: number): number;
                getGlyphCharIndices(arg0: number, arg1: number, arg2: number[]): number[];
                getGlyphCode(arg0: number): number;
                getGlyphCodes(arg0: number, arg1: number, arg2: number[]): number[];
                getGlyphJustificationInfo(arg0: number): GlyphJustificationInfo;
                getGlyphLogicalBounds(arg0: number): Shape;
                getGlyphMetrics(arg0: number): GlyphMetrics;
                getGlyphOutline(arg0: number): Shape;
                getGlyphOutline(arg0: number, arg1: number, arg2: number): Shape;
                getGlyphPixelBounds(arg0: number, arg1: FontRenderContext, arg2: number, arg3: number): Rectangle;
                getGlyphPosition(arg0: number): java.awt.geom.Point2D;
                getGlyphPositions(arg0: number, arg1: number, arg2: number[]): number[];
                getGlyphTransform(arg0: number): java.awt.geom.AffineTransform;
                getGlyphVisualBounds(arg0: number): Shape;
                getLayoutFlags(): number;
                getLogicalBounds(): java.awt.geom.Rectangle2D;
                getNumGlyphs(): number;
                getOutline(): Shape;
                getOutline(arg0: number, arg1: number): Shape;
                getPixelBounds(arg0: FontRenderContext, arg1: number, arg2: number): Rectangle;
                getVisualBounds(): java.awt.geom.Rectangle2D;
                performDefaultLayout(): void;
                setGlyphPosition(arg0: number, arg1: java.awt.geom.Point2D): void;
                setGlyphTransform(arg0: number, arg1: java.awt.geom.AffineTransform): void;
            }
            type GlyphVector = java.lang.Cloneable & GlyphVector_S & GlyphVector$;
            interface LineMetrics_S {
            }
            interface LineMetrics_C extends LineMetrics_S {
                new (): LineMetrics;
            }
            interface LineMetrics$ {
                getAscent(): number;
                getBaselineIndex(): number;
                getBaselineOffsets(): number[];
                getDescent(): number;
                getHeight(): number;
                getLeading(): number;
                getNumChars(): number;
                getStrikethroughOffset(): number;
                getStrikethroughThickness(): number;
                getUnderlineOffset(): number;
                getUnderlineThickness(): number;
            }
            type LineMetrics = LineMetrics_S & LineMetrics$;
            interface TextHitInfo_S {
                afterOffset(arg0: number): TextHitInfo;
                beforeOffset(arg0: number): TextHitInfo;
                leading(arg0: number): TextHitInfo;
                trailing(arg0: number): TextHitInfo;
            }
            interface TextHitInfo_C extends TextHitInfo_S {
                new (): TextHitInfo;
            }
            interface TextHitInfo$ {
                equals(arg0: TextHitInfo): boolean;
                getCharIndex(): number;
                getInsertionIndex(): number;
                getOffsetHit(arg0: number): this;
                getOtherHit(): this;
                isLeadingEdge(): boolean;
            }
            type TextHitInfo = TextHitInfo_S & TextHitInfo$;
        }
        namespace java.awt.geom {
            interface AffineTransform_S {
                readonly TYPE_FLIP: number;
                readonly TYPE_GENERAL_ROTATION: number;
                readonly TYPE_GENERAL_SCALE: number;
                readonly TYPE_GENERAL_TRANSFORM: number;
                readonly TYPE_IDENTITY: number;
                readonly TYPE_MASK_ROTATION: number;
                readonly TYPE_MASK_SCALE: number;
                readonly TYPE_QUADRANT_ROTATION: number;
                readonly TYPE_TRANSLATION: number;
                readonly TYPE_UNIFORM_SCALE: number;
                getQuadrantRotateInstance(arg0: number): AffineTransform;
                getQuadrantRotateInstance(arg0: number, arg1: number, arg2: number): AffineTransform;
                getRotateInstance(arg0: number): AffineTransform;
                getRotateInstance(arg0: number, arg1: number): AffineTransform;
                getRotateInstance(arg0: number, arg1: number, arg2: number): AffineTransform;
                getRotateInstance(arg0: number, arg1: number, arg2: number, arg3: number): AffineTransform;
                getScaleInstance(arg0: number, arg1: number): AffineTransform;
                getShearInstance(arg0: number, arg1: number): AffineTransform;
                getTranslateInstance(arg0: number, arg1: number): AffineTransform;
            }
            type AffineTransform_ST = java.io.Serializable_S & java.lang.Cloneable_S & AffineTransform_S;
            interface AffineTransform_C extends AffineTransform_ST {
                new (): AffineTransform;
                new (arg0: number[]): AffineTransform;
                new (arg0: AffineTransform): AffineTransform;
                new (arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): AffineTransform;
            }
            interface AffineTransform$ {
                clone(): any;
                concatenate(arg0: AffineTransform): void;
                createInverse(): this;
                createTransformedShape(arg0: Shape): Shape;
                deltaTransform(arg0: Point2D, arg1: Point2D): Point2D;
                deltaTransform(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): void;
                getDeterminant(): number;
                getMatrix(arg0: number[]): void;
                getScaleX(): number;
                getScaleY(): number;
                getShearX(): number;
                getShearY(): number;
                getTranslateX(): number;
                getTranslateY(): number;
                getType(): number;
                inverseTransform(arg0: Point2D, arg1: Point2D): Point2D;
                inverseTransform(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): void;
                invert(): void;
                isIdentity(): boolean;
                preConcatenate(arg0: AffineTransform): void;
                quadrantRotate(arg0: number): void;
                quadrantRotate(arg0: number, arg1: number, arg2: number): void;
                rotate(arg0: number): void;
                rotate(arg0: number, arg1: number): void;
                rotate(arg0: number, arg1: number, arg2: number): void;
                rotate(arg0: number, arg1: number, arg2: number, arg3: number): void;
                scale(arg0: number, arg1: number): void;
                setToIdentity(): void;
                setToQuadrantRotation(arg0: number): void;
                setToQuadrantRotation(arg0: number, arg1: number, arg2: number): void;
                setToRotation(arg0: number): void;
                setToRotation(arg0: number, arg1: number): void;
                setToRotation(arg0: number, arg1: number, arg2: number): void;
                setToRotation(arg0: number, arg1: number, arg2: number, arg3: number): void;
                setToScale(arg0: number, arg1: number): void;
                setToShear(arg0: number, arg1: number): void;
                setToTranslation(arg0: number, arg1: number): void;
                setTransform(arg0: AffineTransform): void;
                setTransform(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
                shear(arg0: number, arg1: number): void;
                transform(arg0: Point2D, arg1: Point2D): Point2D;
                transform(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): void;
                transform(arg0: Point2D[], arg1: number, arg2: Point2D[], arg3: number, arg4: number): void;
                translate(arg0: number, arg1: number): void;
            }
            type AffineTransform = java.lang.Cloneable & java.io.Serializable & AffineTransform_S & AffineTransform$;
            interface Dimension2D_S {
            }
            type Dimension2D_ST = java.lang.Cloneable_S & Dimension2D_S;
            interface Dimension2D_C extends Dimension2D_ST {
            }
            interface Dimension2D$ {
                clone(): any;
                getHeight(): number;
                getWidth(): number;
                setSize(arg0: Dimension2D): void;
                setSize(arg0: number, arg1: number): void;
            }
            type Dimension2D = java.lang.Cloneable & Dimension2D_S & Dimension2D$;
            interface Line2D_S {
                linesIntersect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): boolean;
                ptLineDist(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
                ptLineDistSq(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
                ptSegDist(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
                ptSegDistSq(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
                relativeCCW(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
            }
            type Line2D_ST = Shape_S & java.lang.Cloneable_S & Line2D_S;
            interface Line2D_C extends Line2D_ST {
            }
            interface Line2D$ {
                clone(): any;
                getP1(): Point2D;
                getP2(): Point2D;
                getX1(): number;
                getX2(): number;
                getY1(): number;
                getY2(): number;
                intersectsLine(arg0: Line2D): boolean;
                intersectsLine(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
                ptLineDist(arg0: Point2D): number;
                ptLineDist(arg0: number, arg1: number): number;
                ptLineDistSq(arg0: Point2D): number;
                ptLineDistSq(arg0: number, arg1: number): number;
                ptSegDist(arg0: Point2D): number;
                ptSegDist(arg0: number, arg1: number): number;
                ptSegDistSq(arg0: Point2D): number;
                ptSegDistSq(arg0: number, arg1: number): number;
                relativeCCW(arg0: Point2D): number;
                relativeCCW(arg0: number, arg1: number): number;
                setLine(arg0: Line2D): void;
                setLine(arg0: Point2D, arg1: Point2D): void;
                setLine(arg0: number, arg1: number, arg2: number, arg3: number): void;
            }
            type Line2D = Shape & java.lang.Cloneable & Line2D_S & Line2D$;
            interface PathIterator_S {
                readonly SEG_CLOSE: number;
                readonly SEG_CUBICTO: number;
                readonly SEG_LINETO: number;
                readonly SEG_MOVETO: number;
                readonly SEG_QUADTO: number;
                readonly WIND_EVEN_ODD: number;
                readonly WIND_NON_ZERO: number;
            }
            interface PathIterator$ {
                currentSegment(arg0: number[]): number;
                getWindingRule(): number;
                isDone(): boolean;
                next(): void;
            }
            type PathIterator = PathIterator_S & PathIterator$;
            interface Point2D_S {
                distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
                distanceSq(arg0: number, arg1: number, arg2: number, arg3: number): number;
            }
            type Point2D_ST = java.lang.Cloneable_S & Point2D_S;
            interface Point2D_C extends Point2D_ST {
            }
            interface Point2D$ {
                clone(): any;
                distance(arg0: Point2D): number;
                distance(arg0: number, arg1: number): number;
                distanceSq(arg0: Point2D): number;
                distanceSq(arg0: number, arg1: number): number;
                getX(): number;
                getY(): number;
                setLocation(arg0: Point2D): void;
                setLocation(arg0: number, arg1: number): void;
            }
            type Point2D = java.lang.Cloneable & Point2D_S & Point2D$;
            interface Rectangle2D_S {
                readonly OUT_BOTTOM: number;
                readonly OUT_LEFT: number;
                readonly OUT_RIGHT: number;
                readonly OUT_TOP: number;
                intersect(arg0: Rectangle2D, arg1: Rectangle2D, arg2: Rectangle2D): void;
                union(arg0: Rectangle2D, arg1: Rectangle2D, arg2: Rectangle2D): void;
            }
            type Rectangle2D_ST = RectangularShape_S & Rectangle2D_S;
            interface Rectangle2D_C extends Rectangle2D_ST {
            }
            interface Rectangle2D$ {
                add(arg0: Point2D): void;
                add(arg0: Rectangle2D): void;
                add(arg0: number, arg1: number): void;
                createIntersection(arg0: Rectangle2D): this;
                createUnion(arg0: Rectangle2D): this;
                intersectsLine(arg0: Line2D): boolean;
                intersectsLine(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
                outcode(arg0: Point2D): number;
                outcode(arg0: number, arg1: number): number;
                setRect(arg0: Rectangle2D): void;
                setRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
            }
            type Rectangle2D = RectangularShape & Rectangle2D_S & Rectangle2D$;
            interface RectangularShape_S {
            }
            type RectangularShape_ST = Shape_S & java.lang.Cloneable_S & RectangularShape_S;
            interface RectangularShape_C extends RectangularShape_ST {
            }
            interface RectangularShape$ {
                clone(): any;
                getCenterX(): number;
                getCenterY(): number;
                getFrame(): Rectangle2D;
                getHeight(): number;
                getMaxX(): number;
                getMaxY(): number;
                getMinX(): number;
                getMinY(): number;
                getWidth(): number;
                getX(): number;
                getY(): number;
                isEmpty(): boolean;
                setFrame(arg0: Rectangle2D): void;
                setFrame(arg0: Point2D, arg1: Dimension2D): void;
                setFrame(arg0: number, arg1: number, arg2: number, arg3: number): void;
                setFrameFromCenter(arg0: Point2D, arg1: Point2D): void;
                setFrameFromCenter(arg0: number, arg1: number, arg2: number, arg3: number): void;
                setFrameFromDiagonal(arg0: Point2D, arg1: Point2D): void;
                setFrameFromDiagonal(arg0: number, arg1: number, arg2: number, arg3: number): void;
            }
            type RectangularShape = Shape & java.lang.Cloneable & RectangularShape_S & RectangularShape$;
        }
        namespace java.awt.im {
            interface InputContext_S {
                getInstance(): InputContext;
            }
            interface InputContext_C extends InputContext_S {
                new (): InputContext;
            }
            interface InputContext$ {
                dispatchEvent(arg0: AWTEvent): void;
                dispose(): void;
                endComposition(): void;
                getInputMethodControlObject(): any;
                getLocale(): java.util.Locale;
                isCompositionEnabled(): boolean;
                reconvert(): void;
                removeNotify(arg0: Component): void;
                selectInputMethod(arg0: java.util.Locale): boolean;
                setCharacterSubsets(arg0: java.lang.Character$Subset[]): void;
                setCompositionEnabled(arg0: boolean): void;
            }
            type InputContext = InputContext_S & InputContext$;
            interface InputMethodHighlight_S {
                readonly CONVERTED_TEXT: number;
                readonly RAW_TEXT: number;
                readonly SELECTED_CONVERTED_TEXT_HIGHLIGHT: InputMethodHighlight;
                readonly SELECTED_RAW_TEXT_HIGHLIGHT: InputMethodHighlight;
                readonly UNSELECTED_CONVERTED_TEXT_HIGHLIGHT: InputMethodHighlight;
                readonly UNSELECTED_RAW_TEXT_HIGHLIGHT: InputMethodHighlight;
            }
            interface InputMethodHighlight_C extends InputMethodHighlight_S {
                new (arg0: boolean, arg1: number): InputMethodHighlight;
                new (arg0: boolean, arg1: number, arg2: number): InputMethodHighlight;
                new (arg0: boolean, arg1: number, arg2: number, arg3: java.util.Map): InputMethodHighlight;
            }
            interface InputMethodHighlight$ {
                getState(): number;
                getStyle(): java.util.Map;
                getVariation(): number;
                isSelected(): boolean;
            }
            type InputMethodHighlight = InputMethodHighlight_S & InputMethodHighlight$;
            interface InputMethodRequests_S {
            }
            interface InputMethodRequests$ {
                cancelLatestCommittedText(arg0: java.text.AttributedCharacterIterator$Attribute[]): java.text.AttributedCharacterIterator;
                getCommittedText(arg0: number, arg1: number, arg2: java.text.AttributedCharacterIterator$Attribute[]): java.text.AttributedCharacterIterator;
                getCommittedTextLength(): number;
                getInsertPositionOffset(): number;
                getLocationOffset(arg0: number, arg1: number): java.awt.font.TextHitInfo;
                getSelectedText(arg0: java.text.AttributedCharacterIterator$Attribute[]): java.text.AttributedCharacterIterator;
                getTextLocation(arg0: java.awt.font.TextHitInfo): Rectangle;
            }
            type InputMethodRequests = InputMethodRequests_S & InputMethodRequests$;
        }
        namespace java.awt.image {
            interface BufferStrategy_S {
            }
            interface BufferStrategy_C extends BufferStrategy_S {
                new (): BufferStrategy;
            }
            interface BufferStrategy$ {
                contentsLost(): boolean;
                contentsRestored(): boolean;
                dispose(): void;
                getCapabilities(): BufferCapabilities;
                getDrawGraphics(): Graphics;
                show(): void;
            }
            type BufferStrategy = BufferStrategy_S & BufferStrategy$;
            interface BufferedImage_S {
                readonly TYPE_3BYTE_BGR: number;
                readonly TYPE_4BYTE_ABGR: number;
                readonly TYPE_4BYTE_ABGR_PRE: number;
                readonly TYPE_BYTE_BINARY: number;
                readonly TYPE_BYTE_GRAY: number;
                readonly TYPE_BYTE_INDEXED: number;
                readonly TYPE_CUSTOM: number;
                readonly TYPE_INT_ARGB: number;
                readonly TYPE_INT_ARGB_PRE: number;
                readonly TYPE_INT_BGR: number;
                readonly TYPE_INT_RGB: number;
                readonly TYPE_USHORT_555_RGB: number;
                readonly TYPE_USHORT_565_RGB: number;
                readonly TYPE_USHORT_GRAY: number;
            }
            type BufferedImage_ST = Image_S & Transparency_S & WritableRenderedImage_S & BufferedImage_S;
            interface BufferedImage_C extends BufferedImage_ST {
                new (arg0: number, arg1: number, arg2: number): BufferedImage;
                new (arg0: number, arg1: number, arg2: number, arg3: IndexColorModel): BufferedImage;
                new (arg0: ColorModel, arg1: WritableRaster, arg2: boolean, arg3: java.util.Hashtable): BufferedImage;
            }
            interface BufferedImage$ {
                coerceData(arg0: boolean): void;
                createGraphics(): Graphics2D;
                getAlphaRaster(): WritableRaster;
                getRGB(arg0: number, arg1: number): number;
                getRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number): number[];
                getRaster(): WritableRaster;
                getSubimage(arg0: number, arg1: number, arg2: number, arg3: number): this;
                getType(): number;
                isAlphaPremultiplied(): boolean;
                setRGB(arg0: number, arg1: number, arg2: number): void;
                setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number): void;
            }
            type BufferedImage = Image & WritableRenderedImage & Transparency & BufferedImage_S & BufferedImage$;
            interface BufferedImageOp_S {
            }
            interface BufferedImageOp$ {
                createCompatibleDestImage(arg0: BufferedImage, arg1: ColorModel): BufferedImage;
                filter(arg0: BufferedImage, arg1: BufferedImage): BufferedImage;
                getBounds2D(arg0: BufferedImage): java.awt.geom.Rectangle2D;
                getPoint2D(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D): java.awt.geom.Point2D;
                getRenderingHints(): RenderingHints;
            }
            type BufferedImageOp = BufferedImageOp_S & BufferedImageOp$;
            interface ColorModel_S {
                getRGBdefault(): ColorModel;
            }
            type ColorModel_ST = Transparency_S & ColorModel_S;
            interface ColorModel_C extends ColorModel_ST {
                new (arg0: number): ColorModel;
            }
            interface ColorModel$ {
                coerceData(arg0: WritableRaster, arg1: boolean): this;
                createCompatibleSampleModel(arg0: number, arg1: number): SampleModel;
                createCompatibleWritableRaster(arg0: number, arg1: number): WritableRaster;
                finalize(): void;
                getAlpha(arg0: any): number;
                getAlpha(arg0: number): number;
                getAlphaRaster(arg0: WritableRaster): WritableRaster;
                getBlue(arg0: any): number;
                getBlue(arg0: number): number;
                getColorSpace(): java.awt.color.ColorSpace;
                getComponentSize(): number[];
                getComponentSize(arg0: number): number;
                getComponents(arg0: any, arg1: number[], arg2: number): number[];
                getComponents(arg0: number, arg1: number[], arg2: number): number[];
                getDataElement(arg0: number[], arg1: number): number;
                getDataElements(arg0: number, arg1: any): any;
                getDataElements(arg0: number[], arg1: number, arg2: any): any;
                getGreen(arg0: any): number;
                getGreen(arg0: number): number;
                getNormalizedComponents(arg0: any, arg1: number[], arg2: number): number[];
                getNormalizedComponents(arg0: number[], arg1: number, arg2: number[], arg3: number): number[];
                getNumColorComponents(): number;
                getNumComponents(): number;
                getPixelSize(): number;
                getRGB(arg0: any): number;
                getRGB(arg0: number): number;
                getRed(arg0: any): number;
                getRed(arg0: number): number;
                getTransferType(): number;
                getUnnormalizedComponents(arg0: number[], arg1: number, arg2: number[], arg3: number): number[];
                hasAlpha(): boolean;
                isAlphaPremultiplied(): boolean;
                isCompatibleRaster(arg0: Raster): boolean;
                isCompatibleSampleModel(arg0: SampleModel): boolean;
            }
            type ColorModel = Transparency & ColorModel_S & ColorModel$;
            interface DataBuffer_S {
                readonly TYPE_BYTE: number;
                readonly TYPE_DOUBLE: number;
                readonly TYPE_FLOAT: number;
                readonly TYPE_INT: number;
                readonly TYPE_SHORT: number;
                readonly TYPE_UNDEFINED: number;
                readonly TYPE_USHORT: number;
                getDataTypeSize(arg0: number): number;
            }
            interface DataBuffer_C extends DataBuffer_S {
            }
            interface DataBuffer$ {
                getDataType(): number;
                getElem(arg0: number): number;
                getElem(arg0: number, arg1: number): number;
                getElemDouble(arg0: number): number;
                getElemDouble(arg0: number, arg1: number): number;
                getElemFloat(arg0: number): number;
                getElemFloat(arg0: number, arg1: number): number;
                getNumBanks(): number;
                getOffset(): number;
                getOffsets(): number[];
                getSize(): number;
                setElem(arg0: number, arg1: number): void;
                setElem(arg0: number, arg1: number, arg2: number): void;
                setElemDouble(arg0: number, arg1: number): void;
                setElemDouble(arg0: number, arg1: number, arg2: number): void;
                setElemFloat(arg0: number, arg1: number): void;
                setElemFloat(arg0: number, arg1: number, arg2: number): void;
            }
            type DataBuffer = DataBuffer_S & DataBuffer$;
            interface ImageConsumer_S {
                readonly COMPLETESCANLINES: number;
                readonly IMAGEABORTED: number;
                readonly IMAGEERROR: number;
                readonly RANDOMPIXELORDER: number;
                readonly SINGLEFRAME: number;
                readonly SINGLEFRAMEDONE: number;
                readonly SINGLEPASS: number;
                readonly STATICIMAGEDONE: number;
                readonly TOPDOWNLEFTRIGHT: number;
            }
            interface ImageConsumer$ {
                imageComplete(arg0: number): void;
                setColorModel(arg0: ColorModel): void;
                setDimensions(arg0: number, arg1: number): void;
                setHints(arg0: number): void;
                setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ColorModel, arg5: number[], arg6: number, arg7: number): void;
                setProperties(arg0: java.util.Hashtable): void;
            }
            type ImageConsumer = ImageConsumer_S & ImageConsumer$;
            interface ImageObserver_S {
                readonly ABORT: number;
                readonly ALLBITS: number;
                readonly ERROR: number;
                readonly FRAMEBITS: number;
                readonly HEIGHT: number;
                readonly PROPERTIES: number;
                readonly SOMEBITS: number;
                readonly WIDTH: number;
            }
            interface ImageObserver$ {
                imageUpdate(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
            }
            type ImageObserver = ImageObserver_S & ImageObserver$;
            interface ImageProducer_S {
            }
            interface ImageProducer$ {
                addConsumer(arg0: ImageConsumer): void;
                isConsumer(arg0: ImageConsumer): boolean;
                removeConsumer(arg0: ImageConsumer): void;
                requestTopDownLeftRightResend(arg0: ImageConsumer): void;
                startProduction(arg0: ImageConsumer): void;
            }
            type ImageProducer = ImageProducer_S & ImageProducer$;
            interface IndexColorModel_S {
            }
            type IndexColorModel_ST = ColorModel_S & IndexColorModel_S;
            interface IndexColorModel_C extends IndexColorModel_ST {
                new (arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean): IndexColorModel;
                new (arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[]): IndexColorModel;
                new (arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[], arg5: number[]): IndexColorModel;
                new (arg0: number, arg1: number, arg2: number[], arg3: number, arg4: number, arg5: java.math.BigInteger): IndexColorModel;
                new (arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[], arg5: number): IndexColorModel;
                new (arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean, arg5: number): IndexColorModel;
                new (arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean, arg5: number, arg6: number): IndexColorModel;
            }
            interface IndexColorModel$ {
                convertToIntDiscrete(arg0: Raster, arg1: boolean): BufferedImage;
                getAlphas(arg0: number[]): void;
                getBlues(arg0: number[]): void;
                getGreens(arg0: number[]): void;
                getMapSize(): number;
                getRGBs(arg0: number[]): void;
                getReds(arg0: number[]): void;
                getTransparentPixel(): number;
                getValidPixels(): java.math.BigInteger;
                isValid(): boolean;
                isValid(arg0: number): boolean;
            }
            type IndexColorModel = ColorModel & IndexColorModel_S & IndexColorModel$;
            interface Raster_S {
                createBandedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Point): WritableRaster;
                createBandedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number[], arg6: Point): WritableRaster;
                createBandedRaster(arg0: DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number[], arg6: Point): WritableRaster;
                createInterleavedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Point): WritableRaster;
                createInterleavedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: Point): WritableRaster;
                createInterleavedRaster(arg0: DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: Point): WritableRaster;
                createPackedRaster(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Point): WritableRaster;
                createPackedRaster(arg0: DataBuffer, arg1: number, arg2: number, arg3: number, arg4: Point): WritableRaster;
                createPackedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Point): WritableRaster;
                createPackedRaster(arg0: DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: Point): WritableRaster;
                createRaster(arg0: SampleModel, arg1: DataBuffer, arg2: Point): Raster;
                createWritableRaster(arg0: SampleModel, arg1: Point): WritableRaster;
                createWritableRaster(arg0: SampleModel, arg1: DataBuffer, arg2: Point): WritableRaster;
            }
            interface Raster_C extends Raster_S {
                new (): Raster;
            }
            interface Raster$ {
                createChild(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number[]): this;
                createCompatibleWritableRaster(): WritableRaster;
                createCompatibleWritableRaster(arg0: Rectangle): WritableRaster;
                createCompatibleWritableRaster(arg0: number, arg1: number): WritableRaster;
                createCompatibleWritableRaster(arg0: number, arg1: number, arg2: number, arg3: number): WritableRaster;
                createTranslatedChild(arg0: number, arg1: number): this;
                getBounds(): Rectangle;
                getDataBuffer(): DataBuffer;
                getDataElements(arg0: number, arg1: number, arg2: any): any;
                getDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: any): any;
                getHeight(): number;
                getMinX(): number;
                getMinY(): number;
                getNumBands(): number;
                getNumDataElements(): number;
                getParent(): this;
                getPixel(arg0: number, arg1: number, arg2: number[]): number[];
                getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[];
                getSample(arg0: number, arg1: number, arg2: number): number;
                getSampleDouble(arg0: number, arg1: number, arg2: number): number;
                getSampleFloat(arg0: number, arg1: number, arg2: number): number;
                getSampleModel(): SampleModel;
                getSampleModelTranslateX(): number;
                getSampleModelTranslateY(): number;
                getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[];
                getTransferType(): number;
                getWidth(): number;
            }
            type Raster = Raster_S & Raster$;
            interface RenderedImage_S {
            }
            interface RenderedImage$ {
                copyData(arg0: WritableRaster): WritableRaster;
                getColorModel(): ColorModel;
                getData(): Raster;
                getData(arg0: Rectangle): Raster;
                getHeight(): number;
                getMinTileX(): number;
                getMinTileY(): number;
                getMinX(): number;
                getMinY(): number;
                getNumXTiles(): number;
                getNumYTiles(): number;
                getProperty(arg0: string): any;
                getPropertyNames(): string[];
                getSampleModel(): SampleModel;
                getSources(): java.util.Vector;
                getTile(arg0: number, arg1: number): Raster;
                getTileGridXOffset(): number;
                getTileGridYOffset(): number;
                getTileHeight(): number;
                getTileWidth(): number;
                getWidth(): number;
            }
            type RenderedImage = RenderedImage_S & RenderedImage$;
            interface SampleModel_S {
            }
            interface SampleModel_C extends SampleModel_S {
                new (arg0: number, arg1: number, arg2: number, arg3: number): SampleModel;
            }
            interface SampleModel$ {
                createCompatibleSampleModel(arg0: number, arg1: number): this;
                createDataBuffer(): DataBuffer;
                createSubsetSampleModel(arg0: number[]): this;
                getDataElements(arg0: number, arg1: number, arg2: any, arg3: DataBuffer): any;
                getDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: any, arg5: DataBuffer): any;
                getDataType(): number;
                getHeight(): number;
                getNumBands(): number;
                getNumDataElements(): number;
                getPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): number[];
                getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): number[];
                getSample(arg0: number, arg1: number, arg2: number, arg3: DataBuffer): number;
                getSampleDouble(arg0: number, arg1: number, arg2: number, arg3: DataBuffer): number;
                getSampleFloat(arg0: number, arg1: number, arg2: number, arg3: DataBuffer): number;
                getSampleSize(): number[];
                getSampleSize(arg0: number): number;
                getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): number[];
                getTransferType(): number;
                getWidth(): number;
                setDataElements(arg0: number, arg1: number, arg2: any, arg3: DataBuffer): void;
                setDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: any, arg5: DataBuffer): void;
                setPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): void;
                setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): void;
                setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: DataBuffer): void;
                setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): void;
            }
            type SampleModel = SampleModel_S & SampleModel$;
            interface TileObserver_S {
            }
            interface TileObserver$ {
                tileUpdate(arg0: WritableRenderedImage, arg1: number, arg2: number, arg3: boolean): void;
            }
            type TileObserver = TileObserver_S & TileObserver$;
            interface VolatileImage_S {
                readonly IMAGE_INCOMPATIBLE: number;
                readonly IMAGE_OK: number;
                readonly IMAGE_RESTORED: number;
            }
            type VolatileImage_ST = Image_S & Transparency_S & VolatileImage_S;
            interface VolatileImage_C extends VolatileImage_ST {
                new (): VolatileImage;
            }
            interface VolatileImage$ {
                contentsLost(): boolean;
                createGraphics(): Graphics2D;
                getCapabilities(): ImageCapabilities;
                getHeight(): number;
                getSnapshot(): BufferedImage;
                getWidth(): number;
                validate(arg0: GraphicsConfiguration): number;
            }
            type VolatileImage = Image & Transparency & VolatileImage_S & VolatileImage$;
            interface WritableRaster_S {
            }
            type WritableRaster_ST = Raster_S & WritableRaster_S;
            interface WritableRaster_C extends WritableRaster_ST {
                new (): WritableRaster;
            }
            interface WritableRaster$ {
                createWritableChild(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number[]): this;
                createWritableTranslatedChild(arg0: number, arg1: number): this;
                getWritableParent(): this;
                setDataElements(arg0: number, arg1: number, arg2: any): void;
                setDataElements(arg0: number, arg1: number, arg2: Raster): void;
                setDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: any): void;
                setPixel(arg0: number, arg1: number, arg2: number[]): void;
                setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void;
                setRect(arg0: Raster): void;
                setRect(arg0: number, arg1: number, arg2: Raster): void;
                setSample(arg0: number, arg1: number, arg2: number, arg3: number): void;
                setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;
            }
            type WritableRaster = Raster & WritableRaster_S & WritableRaster$;
            interface WritableRenderedImage_S {
            }
            interface WritableRenderedImage$ {
                addTileObserver(arg0: TileObserver): void;
                getWritableTile(arg0: number, arg1: number): WritableRaster;
                getWritableTileIndices(): Point[];
                hasTileWriters(): boolean;
                isTileWritable(arg0: number, arg1: number): boolean;
                releaseWritableTile(arg0: number, arg1: number): void;
                removeTileObserver(arg0: TileObserver): void;
                setData(arg0: Raster): void;
            }
            type WritableRenderedImage = RenderedImage & WritableRenderedImage_S & WritableRenderedImage$;
        }
        namespace java.awt.image.renderable {
            interface RenderContext_S {
            }
            type RenderContext_ST = java.lang.Cloneable_S & RenderContext_S;
            interface RenderContext_C extends RenderContext_ST {
                new (arg0: java.awt.geom.AffineTransform): RenderContext;
                new (arg0: java.awt.geom.AffineTransform, arg1: Shape): RenderContext;
                new (arg0: java.awt.geom.AffineTransform, arg1: RenderingHints): RenderContext;
                new (arg0: java.awt.geom.AffineTransform, arg1: Shape, arg2: RenderingHints): RenderContext;
            }
            interface RenderContext$ {
                clone(): any;
                concatenateTransform(arg0: java.awt.geom.AffineTransform): void;
                getAreaOfInterest(): Shape;
                getRenderingHints(): RenderingHints;
                getTransform(): java.awt.geom.AffineTransform;
                preConcatenateTransform(arg0: java.awt.geom.AffineTransform): void;
                setAreaOfInterest(arg0: Shape): void;
                setRenderingHints(arg0: RenderingHints): void;
                setTransform(arg0: java.awt.geom.AffineTransform): void;
            }
            type RenderContext = java.lang.Cloneable & RenderContext_S & RenderContext$;
            interface RenderableImage_S {
                readonly HINTS_OBSERVED: string;
            }
            interface RenderableImage$ {
                createDefaultRendering(): RenderedImage;
                createRendering(arg0: RenderContext): RenderedImage;
                createScaledRendering(arg0: number, arg1: number, arg2: RenderingHints): RenderedImage;
                getHeight(): number;
                getMinX(): number;
                getMinY(): number;
                getProperty(arg0: string): any;
                getPropertyNames(): string[];
                getSources(): java.util.Vector;
                getWidth(): number;
                isDynamic(): boolean;
            }
            type RenderableImage = RenderableImage_S & RenderableImage$;
        }
        namespace java.awt.peer {
            interface ComponentPeer_S {
                readonly DEFAULT_OPERATION: number;
                readonly NO_EMBEDDED_CHECK: number;
                readonly RESET_OPERATION: number;
                readonly SET_BOUNDS: number;
                readonly SET_CLIENT_SIZE: number;
                readonly SET_LOCATION: number;
                readonly SET_SIZE: number;
            }
            interface ComponentPeer$ {
                applyShape(arg0: sun.java2d.pipe.Region): void;
                canDetermineObscurity(): boolean;
                checkImage(arg0: Image, arg1: number, arg2: number, arg3: java.awt.image.ImageObserver): number;
                coalescePaintEvent(arg0: java.awt.event.PaintEvent): void;
                createBuffers(arg0: number, arg1: BufferCapabilities): void;
                createImage(arg0: java.awt.image.ImageProducer): Image;
                createImage(arg0: number, arg1: number): Image;
                createVolatileImage(arg0: number, arg1: number): java.awt.image.VolatileImage;
                destroyBuffers(): void;
                dispose(): void;
                flip(arg0: number, arg1: number, arg2: number, arg3: number, arg4: BufferCapabilities$FlipContents): void;
                getBackBuffer(): Image;
                getColorModel(): java.awt.image.ColorModel;
                getFontMetrics(arg0: Font): FontMetrics;
                getGraphics(): Graphics;
                getGraphicsConfiguration(): GraphicsConfiguration;
                getLocationOnScreen(): Point;
                getMinimumSize(): Dimension;
                getPreferredSize(): Dimension;
                handleEvent(arg0: AWTEvent): void;
                handlesWheelScrolling(): boolean;
                isFocusable(): boolean;
                isObscured(): boolean;
                isReparentSupported(): boolean;
                layout(): void;
                paint(arg0: Graphics): void;
                prepareImage(arg0: Image, arg1: number, arg2: number, arg3: java.awt.image.ImageObserver): boolean;
                print(arg0: Graphics): void;
                reparent(arg0: ContainerPeer): void;
                requestFocus(arg0: Component, arg1: boolean, arg2: boolean, arg3: long, arg4: sun.awt.CausedFocusEvent$Cause): boolean;
                setBackground(arg0: Color): void;
                setBounds(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
                setEnabled(arg0: boolean): void;
                setFont(arg0: Font): void;
                setForeground(arg0: Color): void;
                setVisible(arg0: boolean): void;
                setZOrder(arg0: ComponentPeer): void;
                updateCursorImmediately(): void;
                updateGraphicsData(arg0: GraphicsConfiguration): boolean;
            }
            type ComponentPeer = ComponentPeer_S & ComponentPeer$;
            interface ContainerPeer_S {
            }
            interface ContainerPeer$ {
                beginLayout(): void;
                beginValidate(): void;
                endLayout(): void;
                endValidate(): void;
                getInsets(): Insets;
            }
            type ContainerPeer = ComponentPeer & ContainerPeer_S & ContainerPeer$;
        }
        namespace java.beans {
            interface FeatureDescriptor_S {
            }
            interface FeatureDescriptor_C extends FeatureDescriptor_S {
                new (): FeatureDescriptor;
            }
            interface FeatureDescriptor$ {
                attributeNames(): java.util.Enumeration;
                getDisplayName(): string;
                getName(): string;
                getShortDescription(): string;
                getValue(arg0: string): any;
                isExpert(): boolean;
                isHidden(): boolean;
                isPreferred(): boolean;
                setDisplayName(arg0: string): void;
                setExpert(arg0: boolean): void;
                setHidden(arg0: boolean): void;
                setName(arg0: string): void;
                setPreferred(arg0: boolean): void;
                setShortDescription(arg0: string): void;
                setValue(arg0: string, arg1: any): void;
            }
            type FeatureDescriptor = FeatureDescriptor_S & FeatureDescriptor$;
            interface PropertyChangeEvent_S {
            }
            type PropertyChangeEvent_ST = java.util.EventObject_S & PropertyChangeEvent_S;
            interface PropertyChangeEvent_C extends PropertyChangeEvent_ST {
                new (arg0: any, arg1: string, arg2: any, arg3: any): PropertyChangeEvent;
            }
            interface PropertyChangeEvent$ {
                getNewValue(): any;
                getOldValue(): any;
                getPropagationId(): any;
                getPropertyName(): string;
                setPropagationId(arg0: any): void;
            }
            type PropertyChangeEvent = java.util.EventObject & PropertyChangeEvent_S & PropertyChangeEvent$;
            interface PropertyChangeListener_S {
            }
            interface PropertyChangeListener$ {
                propertyChange(arg0: PropertyChangeEvent): void;
            }
            type PropertyChangeListener = java.util.EventListener & PropertyChangeListener_S & PropertyChangeListener$;
            interface PropertyDescriptor_S {
            }
            type PropertyDescriptor_ST = FeatureDescriptor_S & PropertyDescriptor_S;
            interface PropertyDescriptor_C extends PropertyDescriptor_ST {
                new (arg0: string, arg1: java.lang.Class): PropertyDescriptor;
                new (arg0: string, arg1: java.lang.reflect.Method, arg2: java.lang.reflect.Method): PropertyDescriptor;
                new (arg0: string, arg1: java.lang.Class, arg2: string, arg3: string): PropertyDescriptor;
            }
            interface PropertyDescriptor$ {
                createPropertyEditor(arg0: any): PropertyEditor;
                getPropertyEditorClass(): java.lang.Class;
                getPropertyType(): java.lang.Class;
                getReadMethod(): java.lang.reflect.Method;
                getWriteMethod(): java.lang.reflect.Method;
                isBound(): boolean;
                isConstrained(): boolean;
                setBound(arg0: boolean): void;
                setConstrained(arg0: boolean): void;
                setPropertyEditorClass(arg0: java.lang.Class): void;
                setReadMethod(arg0: java.lang.reflect.Method): void;
                setWriteMethod(arg0: java.lang.reflect.Method): void;
            }
            type PropertyDescriptor = FeatureDescriptor & PropertyDescriptor_S & PropertyDescriptor$;
            interface PropertyEditor_S {
            }
            interface PropertyEditor$ {
                addPropertyChangeListener(arg0: PropertyChangeListener): void;
                getAsText(): string;
                getCustomEditor(): java.awt.Component;
                getJavaInitializationString(): string;
                getTags(): string[];
                getValue(): any;
                isPaintable(): boolean;
                paintValue(arg0: java.awt.Graphics, arg1: java.awt.Rectangle): void;
                removePropertyChangeListener(arg0: PropertyChangeListener): void;
                setAsText(arg0: string): void;
                setValue(arg0: any): void;
                supportsCustomEditor(): boolean;
            }
            type PropertyEditor = PropertyEditor_S & PropertyEditor$;
        }
        namespace java.io {
            interface BufferedReader_S {
            }
            type BufferedReader_ST = Reader_S & BufferedReader_S;
            interface BufferedReader_C extends BufferedReader_ST {
                new (arg0: Reader): BufferedReader;
                new (arg0: Reader, arg1: number): BufferedReader;
            }
            interface BufferedReader$ {
                lines(): java.util.stream.Stream;
                readLine(): string;
            }
            type BufferedReader = Reader & BufferedReader_S & BufferedReader$;
            interface ByteArrayOutputStream_S {
            }
            type ByteArrayOutputStream_ST = OutputStream_S & ByteArrayOutputStream_S;
            interface ByteArrayOutputStream_C extends ByteArrayOutputStream_ST {
                new (): ByteArrayOutputStream;
                new (arg0: number): ByteArrayOutputStream;
            }
            interface ByteArrayOutputStream$ {
                reset(): void;
                size(): number;
                toByteArray(): number[];
                toString(arg0: string): string;
                writeTo(arg0: OutputStream): void;
            }
            type ByteArrayOutputStream = OutputStream & ByteArrayOutputStream_S & ByteArrayOutputStream$;
            interface Closeable_S {
            }
            interface Closeable$ {
            }
            type Closeable = java.lang.AutoCloseable & Closeable_S & Closeable$;
            interface DataInput_S {
            }
            interface DataInput$ {
                readBoolean(): boolean;
                readByte(): number;
                readChar(): string;
                readDouble(): number;
                readFloat(): number;
                readFully(arg0: number[]): void;
                readFully(arg0: number[], arg1: number, arg2: number): void;
                readInt(): number;
                readLine(): string;
                readLong(): long;
                readShort(): number;
                readUTF(): string;
                readUnsignedByte(): number;
                readUnsignedShort(): number;
                skipBytes(arg0: number): number;
            }
            type DataInput = DataInput_S & DataInput$;
            interface DataInputStream_S {
                readUTF(arg0: DataInput): string;
            }
            type DataInputStream_ST = FilterInputStream_S & DataInput_S & DataInputStream_S;
            interface DataInputStream_C extends DataInputStream_ST {
                new (arg0: InputStream): DataInputStream;
            }
            interface DataInputStream$ {
            }
            type DataInputStream = FilterInputStream & DataInput & DataInputStream_S & DataInputStream$;
            interface DataOutput_S {
            }
            interface DataOutput$ {
                write(arg0: number[]): void;
                write(arg0: number): void;
                write(arg0: number[], arg1: number, arg2: number): void;
                writeBoolean(arg0: boolean): void;
                writeByte(arg0: number): void;
                writeBytes(arg0: string): void;
                writeChar(arg0: number): void;
                writeChars(arg0: string): void;
                writeDouble(arg0: number): void;
                writeFloat(arg0: number): void;
                writeInt(arg0: number): void;
                writeLong(arg0: long): void;
                writeShort(arg0: number): void;
                writeUTF(arg0: string): void;
            }
            type DataOutput = DataOutput_S & DataOutput$;
            interface DataOutputStream_S {
            }
            type DataOutputStream_ST = FilterOutputStream_S & DataOutput_S & DataOutputStream_S;
            interface DataOutputStream_C extends DataOutputStream_ST {
                new (arg0: OutputStream): DataOutputStream;
            }
            interface DataOutputStream$ {
                size(): number;
            }
            type DataOutputStream = FilterOutputStream & DataOutput & DataOutputStream_S & DataOutputStream$;
            interface Externalizable_S {
            }
            interface Externalizable$ {
                readExternal(arg0: ObjectInput): void;
                writeExternal(arg0: ObjectOutput): void;
            }
            type Externalizable = Serializable & Externalizable_S & Externalizable$;
            interface File_S {
                readonly pathSeparator: string;
                readonly pathSeparatorChar: string;
                readonly separator: string;
                readonly separatorChar: string;
                createTempFile(arg0: string, arg1: string): File;
                createTempFile(arg0: string, arg1: string, arg2: File): File;
                listRoots(): File[];
            }
            type File_ST = java.lang.Comparable_S & Serializable_S & File_S;
            interface File_C extends File_ST {
            }
            interface File$ {
                canExecute(): boolean;
                canRead(): boolean;
                canWrite(): boolean;
                compareTo(arg0: File): number;
                createNewFile(): boolean;
                delete(): boolean;
                deleteOnExit(): void;
                exists(): boolean;
                getAbsoluteFile(): this;
                getAbsolutePath(): string;
                getCanonicalFile(): this;
                getCanonicalPath(): string;
                getFreeSpace(): long;
                getName(): string;
                getParent(): string;
                getParentFile(): this;
                getPath(): string;
                getTotalSpace(): long;
                getUsableSpace(): long;
                isAbsolute(): boolean;
                isDirectory(): boolean;
                isFile(): boolean;
                isHidden(): boolean;
                lastModified(): long;
                length(): long;
                list(): string[];
                list(arg0: FilenameFilter): string[];
                listFiles(): File[];
                listFiles(arg0: FilenameFilter): File[];
                listFiles(arg0: FileFilter): File[];
                mkdir(): boolean;
                mkdirs(): boolean;
                renameTo(arg0: File): boolean;
                setExecutable(arg0: boolean): boolean;
                setExecutable(arg0: boolean, arg1: boolean): boolean;
                setLastModified(arg0: long): boolean;
                setReadOnly(): boolean;
                setReadable(arg0: boolean): boolean;
                setReadable(arg0: boolean, arg1: boolean): boolean;
                setWritable(arg0: boolean): boolean;
                setWritable(arg0: boolean, arg1: boolean): boolean;
                toPath(): java.nio.file.Path;
                toURI(): java.net.URI;
            }
            type File = Serializable & java.lang.Comparable & File_S & File$;
            interface FileFilter_S {
            }
            interface FileFilter$ {
                accept(arg0: File): boolean;
            }
            type FileFilter = FileFilter_S & FileFilter$;
            interface FilenameFilter_S {
            }
            interface FilenameFilter$ {
                accept(arg0: File, arg1: string): boolean;
            }
            type FilenameFilter = FilenameFilter_S & FilenameFilter$;
            interface FilterInputStream_S {
            }
            type FilterInputStream_ST = InputStream_S & FilterInputStream_S;
            interface FilterInputStream_C extends FilterInputStream_ST {
                new (): FilterInputStream;
            }
            interface FilterInputStream$ {
            }
            type FilterInputStream = InputStream & FilterInputStream_S & FilterInputStream$;
            interface FilterOutputStream_S {
            }
            type FilterOutputStream_ST = OutputStream_S & FilterOutputStream_S;
            interface FilterOutputStream_C extends FilterOutputStream_ST {
                new (arg0: OutputStream): FilterOutputStream;
            }
            interface FilterOutputStream$ {
            }
            type FilterOutputStream = OutputStream & FilterOutputStream_S & FilterOutputStream$;
            interface Flushable_S {
            }
            interface Flushable$ {
                flush(): void;
            }
            type Flushable = Flushable_S & Flushable$;
            interface IOException_S {
            }
            type IOException_ST = java.lang.Exception_S & IOException_S;
            interface IOException_C extends IOException_ST {
                new (): IOException;
                new (arg0: java.lang.Throwable): IOException;
                new (arg0: string): IOException;
                new (arg0: string, arg1: java.lang.Throwable): IOException;
            }
            interface IOException$ {
            }
            type IOException = java.lang.Exception & IOException_S & IOException$;
            interface InputStream_S {
            }
            type InputStream_ST = Closeable_S & InputStream_S;
            interface InputStream_C extends InputStream_ST {
                new (): InputStream;
            }
            interface InputStream$ {
                available(): number;
                mark(arg0: number): void;
                markSupported(): boolean;
                read(): number;
                read(arg0: number[]): number;
                read(arg0: number[], arg1: number, arg2: number): number;
                reset(): void;
                skip(arg0: long): long;
            }
            type InputStream = Closeable & InputStream_S & InputStream$;
            interface ObjectInput_S {
            }
            interface ObjectInput$ {
                available(): number;
                read(): number;
                read(arg0: number[]): number;
                read(arg0: number[], arg1: number, arg2: number): number;
                readObject(): any;
                skip(arg0: long): long;
            }
            type ObjectInput = DataInput & java.lang.AutoCloseable & ObjectInput_S & ObjectInput$;
            interface ObjectOutput_S {
            }
            interface ObjectOutput$ {
                flush(): void;
                writeObject(arg0: any): void;
            }
            type ObjectOutput = DataOutput & java.lang.AutoCloseable & ObjectOutput_S & ObjectOutput$;
            interface OutputStream_S {
            }
            type OutputStream_ST = Closeable_S & Flushable_S & OutputStream_S;
            interface OutputStream_C extends OutputStream_ST {
                new (): OutputStream;
            }
            interface OutputStream$ {
                write(arg0: number[]): void;
                write(arg0: number): void;
                write(arg0: number[], arg1: number, arg2: number): void;
            }
            type OutputStream = Closeable & Flushable & OutputStream_S & OutputStream$;
            interface PrintStream_S {
            }
            type PrintStream_ST = java.lang.Appendable_S & FilterOutputStream_S & Closeable_S & PrintStream_S;
            interface PrintStream_C extends PrintStream_ST {
                new (arg0: OutputStream): PrintStream;
                new (arg0: string): PrintStream;
                new (arg0: File): PrintStream;
                new (arg0: OutputStream, arg1: boolean): PrintStream;
                new (arg0: string, arg1: string): PrintStream;
                new (arg0: File, arg1: string): PrintStream;
                new (arg0: OutputStream, arg1: boolean, arg2: string): PrintStream;
            }
            interface PrintStream$ {
                checkError(): boolean;
                format(arg0: string, ...arg1: any[]): this;
                format(arg0: java.util.Locale, arg1: string, ...arg2: any[]): this;
                print(arg0: any): void;
                print(arg0: string[]): void;
                print(arg0: long): void;
                print(arg0: boolean): void;
                print(arg0: number): void;
                print(arg0: string): void;
                printf(arg0: string, ...arg1: any[]): this;
                printf(arg0: java.util.Locale, arg1: string, ...arg2: any[]): this;
                println(): void;
                println(arg0: any): void;
                println(arg0: string[]): void;
                println(arg0: long): void;
                println(arg0: boolean): void;
                println(arg0: number): void;
                println(arg0: string): void;
            }
            type PrintStream = FilterOutputStream & java.lang.Appendable & Closeable & PrintStream_S & PrintStream$;
            interface PrintWriter_S {
            }
            type PrintWriter_ST = Writer_S & PrintWriter_S;
            interface PrintWriter_C extends PrintWriter_ST {
                new (arg0: string): PrintWriter;
                new (arg0: File): PrintWriter;
                new (arg0: Writer): PrintWriter;
                new (arg0: OutputStream): PrintWriter;
                new (arg0: OutputStream, arg1: boolean): PrintWriter;
                new (arg0: File, arg1: string): PrintWriter;
                new (arg0: string, arg1: string): PrintWriter;
                new (arg0: Writer, arg1: boolean): PrintWriter;
            }
            interface PrintWriter$ {
                checkError(): boolean;
                format(arg0: string, ...arg1: any[]): this;
                format(arg0: java.util.Locale, arg1: string, ...arg2: any[]): this;
                print(arg0: any): void;
                print(arg0: string[]): void;
                print(arg0: long): void;
                print(arg0: boolean): void;
                print(arg0: number): void;
                print(arg0: string): void;
                printf(arg0: string, ...arg1: any[]): this;
                printf(arg0: java.util.Locale, arg1: string, ...arg2: any[]): this;
                println(): void;
                println(arg0: any): void;
                println(arg0: string[]): void;
                println(arg0: long): void;
                println(arg0: boolean): void;
                println(arg0: number): void;
                println(arg0: string): void;
            }
            type PrintWriter = Writer & PrintWriter_S & PrintWriter$;
            interface Reader_S {
            }
            type Reader_ST = java.lang.Readable_S & Closeable_S & Reader_S;
            interface Reader_C extends Reader_ST {
            }
            interface Reader$ {
                mark(arg0: number): void;
                markSupported(): boolean;
                read(): number;
                read(arg0: string[]): number;
                read(arg0: string[], arg1: number, arg2: number): number;
                ready(): boolean;
                reset(): void;
                skip(arg0: long): long;
            }
            type Reader = java.lang.Readable & Closeable & Reader_S & Reader$;
            interface Serializable_S {
            }
            interface Serializable$ {
            }
            type Serializable = Serializable_S & Serializable$;
            interface Writer_S {
            }
            type Writer_ST = java.lang.Appendable_S & Closeable_S & Flushable_S & Writer_S;
            interface Writer_C extends Writer_ST {
            }
            interface Writer$ {
                write(arg0: string[]): void;
                write(arg0: number): void;
                write(arg0: string): void;
                write(arg0: string[], arg1: number, arg2: number): void;
                write(arg0: string, arg1: number, arg2: number): void;
            }
            type Writer = java.lang.Appendable & Closeable & Flushable & Writer_S & Writer$;
        }
        namespace java.lang {
            interface Appendable_S {
            }
            interface Appendable$ {
                append(arg0: CharSequence): this;
                append(arg0: string): this;
                append(arg0: CharSequence, arg1: number, arg2: number): this;
            }
            type Appendable = Appendable_S & Appendable$;
            interface AutoCloseable_S {
            }
            interface AutoCloseable$ {
                close(): void;
            }
            type AutoCloseable = AutoCloseable_S & AutoCloseable$;
            interface CharSequence_S {
            }
            interface CharSequence$ {
                charAt(arg0: number): string;
                chars(): java.util.stream.IntStream;
                codePoints(): java.util.stream.IntStream;
                length(): number;
                subSequence(arg0: number, arg1: number): this;
                toString(): string;
            }
            type CharSequence = CharSequence_S & CharSequence$;
            interface Character$Subset_S {
            }
            interface Character$Subset_C extends Character$Subset_S {
                new (): Character$Subset;
            }
            interface Character$Subset$ {
            }
            type Character$Subset = Character$Subset_S & Character$Subset$;
            interface Class_S {
            }
            type Class_ST = java.lang.reflect.GenericDeclaration_S & java.lang.reflect.AnnotatedElement_S & java.io.Serializable_S & java.lang.reflect.Type_S & Class_S;
            interface Class_C extends Class_ST {
                new (): Class;
            }
            interface Class$ {
                getName(): string;
                getPackage(): Package;
                getResourceAsStream(arg0: string): java.io.InputStream;
            }
            type Class = (java.io.Serializable & java.lang.reflect.GenericDeclaration & java.lang.reflect.Type & java.lang.reflect.AnnotatedElement & Class_S & Class$) | (new (...args: any[]) => any) | null | undefined | any;
            interface ClassLoader_S {
                getSystemResourceAsStream(arg0: string): java.io.InputStream;
            }
            interface ClassLoader_C extends ClassLoader_S {
            }
            interface ClassLoader$ {
                getParent(): this;
                getResourceAsStream(arg0: string): java.io.InputStream;
            }
            type ClassLoader = ClassLoader_S & ClassLoader$;
            interface Cloneable_S {
            }
            interface Cloneable$ {
            }
            type Cloneable = Cloneable_S & Cloneable$;
            interface Comparable_S {
            }
            interface Comparable$ {
                compareTo(arg0: any): number;
            }
            type Comparable = Comparable_S & Comparable$;
            interface Enum_S {
                valueOf(arg0: Class, arg1: string): Enum;
            }
            type Enum_ST = Comparable_S & java.io.Serializable_S & Enum_S;
            interface Enum_C extends Enum_ST {
            }
            interface Enum$ {
                compareTo(arg0: Enum): number;
                getDeclaringClass(): Class;
                name(): string;
                ordinal(): number;
            }
            type Enum = Comparable & java.io.Serializable & Enum_S & Enum$;
            interface Exception_S {
            }
            type Exception_ST = Throwable_S & Exception_S;
            interface Exception_C extends Exception_ST {
                new (): Exception;
                new (arg0: Throwable): Exception;
                new (arg0: string): Exception;
                new (arg0: string, arg1: Throwable): Exception;
            }
            interface Exception$ {
            }
            type Exception = Throwable & Exception_S & Exception$;
            interface Iterable_S {
            }
            interface Iterable$ {
                forEach(consumer: (t: any) => void): void;
                iterator(): java.util.Iterator;
                spliterator(): java.util.Spliterator;
            }
            type Iterable = Iterable_S & Iterable$;
            interface Long_S {
                readonly BYTES: number;
                readonly MAX_VALUE: long;
                readonly MIN_VALUE: long;
                readonly SIZE: number;
                readonly TYPE: Class;
                bitCount(arg0: long): number;
                compare(arg0: long, arg1: long): number;
                compareUnsigned(arg0: long, arg1: long): number;
                decode(arg0: string): long;
                divideUnsigned(arg0: long, arg1: long): long;
                getLong(arg0: string): long;
                getLong(arg0: string, arg1: long): long;
                hashCode(arg0: long): number;
                highestOneBit(arg0: long): long;
                lowestOneBit(arg0: long): long;
                max(arg0: long, arg1: long): long;
                min(arg0: long, arg1: long): long;
                numberOfLeadingZeros(arg0: long): number;
                numberOfTrailingZeros(arg0: long): number;
                parseLong(arg0: string): long;
                parseLong(arg0: string, arg1: number): long;
                parseUnsignedLong(arg0: string): long;
                parseUnsignedLong(arg0: string, arg1: number): long;
                remainderUnsigned(arg0: long, arg1: long): long;
                reverse(arg0: long): long;
                reverseBytes(arg0: long): long;
                rotateLeft(arg0: long, arg1: number): long;
                rotateRight(arg0: long, arg1: number): long;
                signum(arg0: long): number;
                sum(arg0: long, arg1: long): long;
                toBinaryString(arg0: long): string;
                toHexString(arg0: long): string;
                toOctalString(arg0: long): string;
                toString(arg0: long): string;
                toString(arg0: long, arg1: number): string;
                toUnsignedString(arg0: long): string;
                toUnsignedString(arg0: long, arg1: number): string;
                valueOf(arg0: long): long;
                valueOf(arg0: string): long;
                valueOf(arg0: string, arg1: number): long;
            }
            type Long_ST = Number_S & Comparable_S & Long_S;
            interface Long_C extends Long_ST {
                new (arg0: long): Long;
                new (arg0: string): Long;
            }
            interface Long$ {
                compareTo(arg0: long): number;
            }
            type Long = Number & Comparable & Long_S & Long$;
            interface Number_S {
            }
            type Number_ST = java.io.Serializable_S & Number_S;
            interface Number_C extends Number_ST {
                new (): Number;
            }
            interface Number$ {
                byteValue(): number;
                doubleValue(): number;
                floatValue(): number;
                intValue(): number;
                longValue(): long;
                shortValue(): number;
            }
            type Number = java.io.Serializable & Number_S & Number$;
            interface Package_S {
                getPackage(arg0: string): Package;
                getPackages(): Package[];
            }
            type Package_ST = java.lang.reflect.AnnotatedElement_S & Package_S;
            interface Package_C extends Package_ST {
                new (): Package;
            }
            interface Package$ {
                getImplementationTitle(): string;
                getImplementationVendor(): string;
                getImplementationVersion(): string;
                getName(): string;
                getSpecificationTitle(): string;
                getSpecificationVendor(): string;
                getSpecificationVersion(): string;
                isCompatibleWith(arg0: string): boolean;
                isSealed(): boolean;
                isSealed(arg0: java.net.URL): boolean;
            }
            type Package = java.lang.reflect.AnnotatedElement & Package_S & Package$;
            interface Readable_S {
            }
            interface Readable$ {
                read(arg0: java.nio.CharBuffer): number;
            }
            type Readable = Readable_S & Readable$;
            interface Runnable_S {
            }
            interface Runnable$ {
                run(): void;
            }
            type Runnable = Runnable_S & Runnable$;
            interface RuntimeException_S {
            }
            type RuntimeException_ST = Exception_S & RuntimeException_S;
            interface RuntimeException_C extends RuntimeException_ST {
                new (): RuntimeException;
                new (arg0: Throwable): RuntimeException;
                new (arg0: string): RuntimeException;
                new (arg0: string, arg1: Throwable): RuntimeException;
            }
            interface RuntimeException$ {
            }
            type RuntimeException = Exception & RuntimeException_S & RuntimeException$;
            interface StackTraceElement_S {
            }
            type StackTraceElement_ST = java.io.Serializable_S & StackTraceElement_S;
            interface StackTraceElement_C extends StackTraceElement_ST {
                new (arg0: string, arg1: string, arg2: string, arg3: number): StackTraceElement;
            }
            interface StackTraceElement$ {
                getClassName(): string;
                getFileName(): string;
                getLineNumber(): number;
                getMethodName(): string;
                isNativeMethod(): boolean;
            }
            type StackTraceElement = java.io.Serializable & StackTraceElement_S & StackTraceElement$;
            interface StringBuffer_S {
            }
            type StringBuffer_ST = CharSequence_S & java.io.Serializable_S & __AbstractStringBuilder_S & StringBuffer_S;
            interface StringBuffer_C extends StringBuffer_ST {
                new (): StringBuffer;
                new (arg0: CharSequence): StringBuffer;
                new (arg0: string): StringBuffer;
                new (arg0: number): StringBuffer;
            }
            interface StringBuffer$ {
            }
            type StringBuffer = __AbstractStringBuilder & java.io.Serializable & CharSequence & StringBuffer_S & StringBuffer$;
            interface StringBuilder_S {
            }
            type StringBuilder_ST = CharSequence_S & java.io.Serializable_S & __AbstractStringBuilder_S & StringBuilder_S;
            interface StringBuilder_C extends StringBuilder_ST {
                new (): StringBuilder;
                new (arg0: CharSequence): StringBuilder;
                new (arg0: string): StringBuilder;
                new (arg0: number): StringBuilder;
            }
            interface StringBuilder$ {
            }
            type StringBuilder = __AbstractStringBuilder & java.io.Serializable & CharSequence & StringBuilder_S & StringBuilder$;
            interface Throwable_S {
            }
            type Throwable_ST = java.io.Serializable_S & Throwable_S;
            interface Throwable_C extends Throwable_ST {
                new (): Throwable;
                new (arg0: Throwable): Throwable;
                new (arg0: string): Throwable;
                new (arg0: string, arg1: Throwable): Throwable;
            }
            interface Throwable$ {
                addSuppressed(arg0: Throwable): void;
                fillInStackTrace(): this;
                getCause(): this;
                getLocalizedMessage(): string;
                getMessage(): string;
                getStackTrace(): StackTraceElement[];
                getSuppressed(): Throwable[];
                initCause(arg0: Throwable): this;
                printStackTrace(): void;
                printStackTrace(arg0: java.io.PrintWriter): void;
                printStackTrace(arg0: java.io.PrintStream): void;
                setStackTrace(arg0: StackTraceElement[]): void;
            }
            type Throwable = java.io.Serializable & Throwable_S & Throwable$;
            interface __AbstractStringBuilder_S {
            }
            type __AbstractStringBuilder_ST = Appendable_S & CharSequence_S & __AbstractStringBuilder_S;
            interface __AbstractStringBuilder_C extends __AbstractStringBuilder_ST {
            }
            interface __AbstractStringBuilder$ {
                append(arg0: any): this;
                append(arg0: string[]): this;
                append(arg0: long): this;
                append(arg0: boolean): this;
                append(arg0: number): this;
                append(arg0: StringBuffer): this;
                append(arg0: string): this;
                append(arg0: string[], arg1: number, arg2: number): this;
                appendCodePoint(arg0: number): this;
                capacity(): number;
                codePointAt(arg0: number): number;
                codePointBefore(arg0: number): number;
                codePointCount(arg0: number, arg1: number): number;
                delete(arg0: number, arg1: number): this;
                deleteCharAt(arg0: number): this;
                ensureCapacity(arg0: number): void;
                getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
                indexOf(arg0: string): number;
                indexOf(arg0: string, arg1: number): number;
                insert(arg0: number, arg1: any): this;
                insert(arg0: number, arg1: string[]): this;
                insert(arg0: number, arg1: long): this;
                insert(arg0: number, arg1: boolean): this;
                insert(arg0: number, arg1: number): this;
                insert(arg0: number, arg1: CharSequence): this;
                insert(arg0: number, arg1: string): this;
                insert(arg0: number, arg1: string[], arg2: number, arg3: number): this;
                insert(arg0: number, arg1: CharSequence, arg2: number, arg3: number): this;
                lastIndexOf(arg0: string): number;
                lastIndexOf(arg0: string, arg1: number): number;
                offsetByCodePoints(arg0: number, arg1: number): number;
                replace(arg0: number, arg1: number, arg2: string): this;
                reverse(): this;
                setCharAt(arg0: number, arg1: string): void;
                setLength(arg0: number): void;
                substring(arg0: number): string;
                substring(arg0: number, arg1: number): string;
                trimToSize(): void;
            }
            type __AbstractStringBuilder = Appendable & CharSequence & __AbstractStringBuilder_S & __AbstractStringBuilder$;
        }
        namespace java.lang.annotation {
            interface Annotation_S {
            }
            interface Annotation$ {
                annotationType(): Class;
                equals(arg0: any): boolean;
                hashCode(): number;
                toString(): string;
            }
            type Annotation = Annotation_S & Annotation$;
        }
        namespace java.lang.ref {
            interface Reference_S {
            }
            interface Reference_C extends Reference_S {
            }
            interface Reference$ {
                clear(): void;
                enqueue(): boolean;
                get(): any;
                isEnqueued(): boolean;
            }
            type Reference = Reference_S & Reference$;
        }
        namespace java.lang.reflect {
            interface AccessibleObject_S {
                setAccessible(arg0: AccessibleObject[], arg1: boolean): void;
            }
            type AccessibleObject_ST = AnnotatedElement_S & AccessibleObject_S;
            interface AccessibleObject_C extends AccessibleObject_ST {
                new (): AccessibleObject;
            }
            interface AccessibleObject$ {
                isAccessible(): boolean;
                setAccessible(arg0: boolean): void;
            }
            type AccessibleObject = AnnotatedElement & AccessibleObject_S & AccessibleObject$;
            interface AnnotatedElement_S {
            }
            interface AnnotatedElement$ {
                getAnnotation(arg0: Class): java.lang.annotation.Annotation;
                getAnnotations(): java.lang.annotation.Annotation[];
                getAnnotationsByType(arg0: Class): java.lang.annotation.Annotation[];
                getDeclaredAnnotation(arg0: Class): java.lang.annotation.Annotation;
                getDeclaredAnnotations(): java.lang.annotation.Annotation[];
                getDeclaredAnnotationsByType(arg0: Class): java.lang.annotation.Annotation[];
                isAnnotationPresent(arg0: Class): boolean;
            }
            type AnnotatedElement = AnnotatedElement_S & AnnotatedElement$;
            interface AnnotatedType_S {
            }
            interface AnnotatedType$ {
                getType(): Type;
            }
            type AnnotatedType = AnnotatedElement & AnnotatedType_S & AnnotatedType$;
            interface Constructor_S {
            }
            type Constructor_ST = Executable_S & Constructor_S;
            interface Constructor_C extends Constructor_ST {
                new (): Constructor;
            }
            interface Constructor$ {
                newInstance(...arg0: any[]): any;
            }
            type Constructor = Executable & Constructor_S & Constructor$;
            interface Executable_S {
            }
            type Executable_ST = GenericDeclaration_S & AccessibleObject_S & Member_S & Executable_S;
            interface Executable_C extends Executable_ST {
            }
            interface Executable$ {
                getAnnotatedExceptionTypes(): AnnotatedType[];
                getAnnotatedParameterTypes(): AnnotatedType[];
                getAnnotatedReceiverType(): AnnotatedType;
                getAnnotatedReturnType(): AnnotatedType;
                getExceptionTypes(): Class[];
                getGenericExceptionTypes(): Type[];
                getGenericParameterTypes(): Type[];
                getParameterAnnotations(): java.lang.annotation.Annotation[][];
                getParameterCount(): number;
                getParameterTypes(): Class[];
                getParameters(): Parameter[];
                isVarArgs(): boolean;
                toGenericString(): string;
            }
            type Executable = AccessibleObject & Member & GenericDeclaration & Executable_S & Executable$;
            interface Field_S {
            }
            type Field_ST = AccessibleObject_S & Member_S & Field_S;
            interface Field_C extends Field_ST {
                new (): Field;
            }
            interface Field$ {
                get(arg0: any): any;
                getAnnotatedType(): AnnotatedType;
                getBoolean(arg0: any): boolean;
                getByte(arg0: any): number;
                getChar(arg0: any): string;
                getDouble(arg0: any): number;
                getFloat(arg0: any): number;
                getGenericType(): Type;
                getInt(arg0: any): number;
                getLong(arg0: any): long;
                getShort(arg0: any): number;
                getType(): Class;
                isEnumConstant(): boolean;
                set(arg0: any, arg1: any): void;
                setBoolean(arg0: any, arg1: boolean): void;
                setByte(arg0: any, arg1: number): void;
                setChar(arg0: any, arg1: string): void;
                setDouble(arg0: any, arg1: number): void;
                setFloat(arg0: any, arg1: number): void;
                setInt(arg0: any, arg1: number): void;
                setLong(arg0: any, arg1: long): void;
                setShort(arg0: any, arg1: number): void;
                toGenericString(): string;
            }
            type Field = AccessibleObject & Member & Field_S & Field$;
            interface GenericDeclaration_S {
            }
            interface GenericDeclaration$ {
                getTypeParameters(): TypeVariable[];
            }
            type GenericDeclaration = AnnotatedElement & GenericDeclaration_S & GenericDeclaration$;
            interface InvocationHandler_S {
            }
            interface InvocationHandler$ {
                invoke(arg0: any, arg1: Method, arg2: any[]): any;
            }
            type InvocationHandler = InvocationHandler_S & InvocationHandler$;
            interface Member_S {
                readonly DECLARED: number;
                readonly PUBLIC: number;
            }
            interface Member$ {
                getDeclaringClass(): Class;
                getModifiers(): number;
                getName(): string;
                isSynthetic(): boolean;
            }
            type Member = Member_S & Member$;
            interface Method_S {
            }
            type Method_ST = Executable_S & Method_S;
            interface Method_C extends Method_ST {
                new (): Method;
            }
            interface Method$ {
                getDefaultValue(): any;
                getGenericReturnType(): Type;
                getReturnType(): Class;
                invoke(arg0: any, ...arg1: any[]): any;
                isBridge(): boolean;
                isDefault(): boolean;
            }
            type Method = Executable & Method_S & Method$;
            interface Parameter_S {
            }
            type Parameter_ST = AnnotatedElement_S & Parameter_S;
            interface Parameter_C extends Parameter_ST {
                new (): Parameter;
            }
            interface Parameter$ {
                getAnnotatedType(): AnnotatedType;
                getDeclaringExecutable(): Executable;
                getModifiers(): number;
                getName(): string;
                getParameterizedType(): Type;
                getType(): Class;
                isImplicit(): boolean;
                isNamePresent(): boolean;
                isSynthetic(): boolean;
                isVarArgs(): boolean;
            }
            type Parameter = AnnotatedElement & Parameter_S & Parameter$;
            interface ParameterizedType_S {
            }
            interface ParameterizedType$ {
                getActualTypeArguments(): Type[];
                getOwnerType(): Type;
                getRawType(): Type;
            }
            type ParameterizedType = Type & ParameterizedType_S & ParameterizedType$;
            interface Type_S {
            }
            interface Type$ {
                getTypeName(): string;
            }
            type Type = Type_S & Type$;
            interface TypeVariable_S {
            }
            interface TypeVariable$ {
                getAnnotatedBounds(): AnnotatedType[];
                getBounds(): Type[];
                getGenericDeclaration(): GenericDeclaration;
                getName(): string;
            }
            type TypeVariable = Type & AnnotatedElement & TypeVariable_S & TypeVariable$;
        }
        namespace java.math {
            interface BigDecimal_S {
                readonly ONE: BigDecimal;
                readonly ROUND_CEILING: number;
                readonly ROUND_DOWN: number;
                readonly ROUND_FLOOR: number;
                readonly ROUND_HALF_DOWN: number;
                readonly ROUND_HALF_EVEN: number;
                readonly ROUND_HALF_UP: number;
                readonly ROUND_UNNECESSARY: number;
                readonly ROUND_UP: number;
                readonly TEN: BigDecimal;
                readonly ZERO: BigDecimal;
                valueOf(arg0: long): BigDecimal;
                valueOf(arg0: number): BigDecimal;
                valueOf(arg0: long, arg1: number): BigDecimal;
            }
            type BigDecimal_ST = java.lang.Number_S & java.lang.Comparable_S & BigDecimal_S;
            interface BigDecimal_C extends BigDecimal_ST {
                new (arg0: BigInteger): BigDecimal;
                new (arg0: number): BigDecimal;
                new (arg0: long): BigDecimal;
                new (arg0: string): BigDecimal;
                new (arg0: string[]): BigDecimal;
                new (arg0: BigInteger, arg1: number): BigDecimal;
                new (arg0: BigInteger, arg1: MathContext): BigDecimal;
                new (arg0: number, arg1: MathContext): BigDecimal;
                new (arg0: long, arg1: MathContext): BigDecimal;
                new (arg0: string, arg1: MathContext): BigDecimal;
                new (arg0: string[], arg1: MathContext): BigDecimal;
                new (arg0: BigInteger, arg1: number, arg2: MathContext): BigDecimal;
                new (arg0: string[], arg1: number, arg2: number): BigDecimal;
                new (arg0: string[], arg1: number, arg2: number, arg3: MathContext): BigDecimal;
            }
            interface BigDecimal$ {
                abs(): this;
                abs(arg0: MathContext): this;
                add(arg0: BigDecimal): this;
                add(arg0: BigDecimal, arg1: MathContext): this;
                byteValueExact(): number;
                compareTo(arg0: BigDecimal): number;
                divide(arg0: BigDecimal): this;
                divide(arg0: BigDecimal, arg1: MathContext): this;
                divide(arg0: BigDecimal, arg1: number): this;
                divide(arg0: BigDecimal, arg1: RoundingMode): this;
                divide(arg0: BigDecimal, arg1: number, arg2: RoundingMode): this;
                divide(arg0: BigDecimal, arg1: number, arg2: number): this;
                divideAndRemainder(arg0: BigDecimal): BigDecimal[];
                divideAndRemainder(arg0: BigDecimal, arg1: MathContext): BigDecimal[];
                divideToIntegralValue(arg0: BigDecimal): this;
                divideToIntegralValue(arg0: BigDecimal, arg1: MathContext): this;
                intValueExact(): number;
                longValueExact(): long;
                max(arg0: BigDecimal): this;
                min(arg0: BigDecimal): this;
                movePointLeft(arg0: number): this;
                movePointRight(arg0: number): this;
                multiply(arg0: BigDecimal): this;
                multiply(arg0: BigDecimal, arg1: MathContext): this;
                negate(): this;
                negate(arg0: MathContext): this;
                plus(): this;
                plus(arg0: MathContext): this;
                pow(arg0: number): this;
                pow(arg0: number, arg1: MathContext): this;
                precision(): number;
                remainder(arg0: BigDecimal): this;
                remainder(arg0: BigDecimal, arg1: MathContext): this;
                round(arg0: MathContext): this;
                scale(): number;
                scaleByPowerOfTen(arg0: number): this;
                setScale(arg0: number): this;
                setScale(arg0: number, arg1: number): this;
                setScale(arg0: number, arg1: RoundingMode): this;
                shortValueExact(): number;
                signum(): number;
                stripTrailingZeros(): this;
                subtract(arg0: BigDecimal): this;
                subtract(arg0: BigDecimal, arg1: MathContext): this;
                toBigInteger(): BigInteger;
                toBigIntegerExact(): BigInteger;
                toEngineeringString(): string;
                toPlainString(): string;
                ulp(): this;
                unscaledValue(): BigInteger;
            }
            type BigDecimal = java.lang.Number & java.lang.Comparable & BigDecimal_S & BigDecimal$;
            interface BigInteger_S {
                readonly ONE: BigInteger;
                readonly TEN: BigInteger;
                readonly ZERO: BigInteger;
                probablePrime(arg0: number, arg1: java.util.Random): BigInteger;
                valueOf(arg0: long): BigInteger;
            }
            type BigInteger_ST = java.lang.Number_S & java.lang.Comparable_S & BigInteger_S;
            interface BigInteger_C extends BigInteger_ST {
                new (arg0: string): BigInteger;
                new (arg0: number[]): BigInteger;
                new (arg0: number, arg1: java.util.Random): BigInteger;
                new (arg0: number, arg1: number[]): BigInteger;
                new (arg0: string, arg1: number): BigInteger;
                new (arg0: number, arg1: number, arg2: java.util.Random): BigInteger;
            }
            interface BigInteger$ {
                abs(): this;
                add(arg0: BigInteger): this;
                and(arg0: BigInteger): this;
                andNot(arg0: BigInteger): this;
                bitCount(): number;
                bitLength(): number;
                byteValueExact(): number;
                clearBit(arg0: number): this;
                compareTo(arg0: BigInteger): number;
                divide(arg0: BigInteger): this;
                divideAndRemainder(arg0: BigInteger): BigInteger[];
                flipBit(arg0: number): this;
                gcd(arg0: BigInteger): this;
                getLowestSetBit(): number;
                intValueExact(): number;
                isProbablePrime(arg0: number): boolean;
                longValueExact(): long;
                max(arg0: BigInteger): this;
                min(arg0: BigInteger): this;
                mod(arg0: BigInteger): this;
                modInverse(arg0: BigInteger): this;
                modPow(arg0: BigInteger, arg1: BigInteger): this;
                multiply(arg0: BigInteger): this;
                negate(): this;
                nextProbablePrime(): this;
                not(): this;
                or(arg0: BigInteger): this;
                pow(arg0: number): this;
                remainder(arg0: BigInteger): this;
                setBit(arg0: number): this;
                shiftLeft(arg0: number): this;
                shiftRight(arg0: number): this;
                shortValueExact(): number;
                signum(): number;
                subtract(arg0: BigInteger): this;
                testBit(arg0: number): boolean;
                toByteArray(): number[];
                toString(arg0: number): string;
                xor(arg0: BigInteger): this;
            }
            type BigInteger = java.lang.Number & java.lang.Comparable & BigInteger_S & BigInteger$;
            interface MathContext_S {
                readonly DECIMAL128: MathContext;
                readonly DECIMAL32: MathContext;
                readonly DECIMAL64: MathContext;
                readonly UNLIMITED: MathContext;
            }
            type MathContext_ST = java.io.Serializable_S & MathContext_S;
            interface MathContext_C extends MathContext_ST {
                new (arg0: string): MathContext;
                new (arg0: number): MathContext;
                new (arg0: number, arg1: RoundingMode): MathContext;
            }
            interface MathContext$ {
                getPrecision(): number;
                getRoundingMode(): RoundingMode;
            }
            type MathContext = java.io.Serializable & MathContext_S & MathContext$;
            enum RoundingMode {
                UP,
                DOWN,
                CEILING,
                FLOOR,
                HALF_UP,
                HALF_DOWN,
                HALF_EVEN,
                UNNECESSARY
            }
        }
        namespace java.net {
            interface ContentHandler_S {
            }
            interface ContentHandler_C extends ContentHandler_S {
                new (): ContentHandler;
            }
            interface ContentHandler$ {
                getContent(arg0: URLConnection): any;
                getContent(arg0: URLConnection, arg1: java.lang.Class[]): any;
            }
            type ContentHandler = ContentHandler_S & ContentHandler$;
            interface ContentHandlerFactory_S {
            }
            interface ContentHandlerFactory$ {
                createContentHandler(arg0: string): ContentHandler;
            }
            type ContentHandlerFactory = ContentHandlerFactory_S & ContentHandlerFactory$;
            interface FileNameMap_S {
            }
            interface FileNameMap$ {
                getContentTypeFor(arg0: string): string;
            }
            type FileNameMap = FileNameMap_S & FileNameMap$;
            interface Proxy_S {
                readonly NO_PROXY: Proxy;
            }
            interface Proxy_C extends Proxy_S {
                new (arg0: Proxy$Type, arg1: SocketAddress): Proxy;
            }
            interface Proxy$ {
                address(): SocketAddress;
                type(): Proxy$Type;
            }
            type Proxy = Proxy_S & Proxy$;
            enum Proxy$Type {
                DIRECT,
                HTTP,
                SOCKS
            }
            interface SocketAddress_S {
            }
            type SocketAddress_ST = java.io.Serializable_S & SocketAddress_S;
            interface SocketAddress_C extends SocketAddress_ST {
                new (): SocketAddress;
            }
            interface SocketAddress$ {
            }
            type SocketAddress = java.io.Serializable & SocketAddress_S & SocketAddress$;
            interface URI_S {
                create(arg0: string): URI;
            }
            type URI_ST = java.lang.Comparable_S & java.io.Serializable_S & URI_S;
            interface URI_C extends URI_ST {
            }
            interface URI$ {
                compareTo(arg0: URI): number;
                getAuthority(): string;
                getFragment(): string;
                getHost(): string;
                getPath(): string;
                getPort(): number;
                getQuery(): string;
                getRawAuthority(): string;
                getRawFragment(): string;
                getRawPath(): string;
                getRawQuery(): string;
                getRawSchemeSpecificPart(): string;
                getRawUserInfo(): string;
                getScheme(): string;
                getSchemeSpecificPart(): string;
                getUserInfo(): string;
                isAbsolute(): boolean;
                isOpaque(): boolean;
                normalize(): this;
                parseServerAuthority(): this;
                relativize(arg0: URI): this;
                resolve(arg0: URI): this;
                resolve(arg0: string): this;
                toASCIIString(): string;
                toURL(): URL;
            }
            type URI = java.lang.Comparable & java.io.Serializable & URI_S & URI$;
            interface URL_S {
                setURLStreamHandlerFactory(arg0: URLStreamHandlerFactory): void;
            }
            type URL_ST = java.io.Serializable_S & URL_S;
            interface URL_C extends URL_ST {
            }
            interface URL$ {
                getAuthority(): string;
                getContent(): any;
                getContent(arg0: java.lang.Class[]): any;
                getDefaultPort(): number;
                getFile(): string;
                getHost(): string;
                getPath(): string;
                getPort(): number;
                getProtocol(): string;
                getQuery(): string;
                getRef(): string;
                getUserInfo(): string;
                openConnection(): URLConnection;
                openConnection(arg0: Proxy): URLConnection;
                openStream(): java.io.InputStream;
                sameFile(arg0: URL): boolean;
                toExternalForm(): string;
                toURI(): URI;
            }
            type URL = java.io.Serializable & URL_S & URL$;
            interface URLConnection_S {
                getDefaultAllowUserInteraction(): boolean;
                getFileNameMap(): FileNameMap;
                guessContentTypeFromName(arg0: string): string;
                guessContentTypeFromStream(arg0: java.io.InputStream): string;
                setContentHandlerFactory(arg0: ContentHandlerFactory): void;
                setDefaultAllowUserInteraction(arg0: boolean): void;
                setFileNameMap(arg0: FileNameMap): void;
            }
            interface URLConnection_C extends URLConnection_S {
            }
            interface URLConnection$ {
                addRequestProperty(arg0: string, arg1: string): void;
                connect(): void;
                getAllowUserInteraction(): boolean;
                getConnectTimeout(): number;
                getContent(): any;
                getContent(arg0: java.lang.Class[]): any;
                getContentEncoding(): string;
                getContentLength(): number;
                getContentLengthLong(): long;
                getContentType(): string;
                getDate(): long;
                getDefaultUseCaches(): boolean;
                getDoInput(): boolean;
                getDoOutput(): boolean;
                getExpiration(): long;
                getHeaderField(arg0: number): string;
                getHeaderField(arg0: string): string;
                getHeaderFieldDate(arg0: string, arg1: long): long;
                getHeaderFieldInt(arg0: string, arg1: number): number;
                getHeaderFieldKey(arg0: number): string;
                getHeaderFieldLong(arg0: string, arg1: long): long;
                getHeaderFields(): java.util.Map;
                getIfModifiedSince(): long;
                getInputStream(): java.io.InputStream;
                getLastModified(): long;
                getOutputStream(): java.io.OutputStream;
                getPermission(): java.security.Permission;
                getReadTimeout(): number;
                getRequestProperties(): java.util.Map;
                getRequestProperty(arg0: string): string;
                getURL(): URL;
                getUseCaches(): boolean;
                setAllowUserInteraction(arg0: boolean): void;
                setConnectTimeout(arg0: number): void;
                setDefaultUseCaches(arg0: boolean): void;
                setDoInput(arg0: boolean): void;
                setDoOutput(arg0: boolean): void;
                setIfModifiedSince(arg0: long): void;
                setReadTimeout(arg0: number): void;
                setRequestProperty(arg0: string, arg1: string): void;
                setUseCaches(arg0: boolean): void;
            }
            type URLConnection = URLConnection_S & URLConnection$;
            interface URLStreamHandler_S {
            }
            interface URLStreamHandler_C extends URLStreamHandler_S {
                new (): URLStreamHandler;
            }
            interface URLStreamHandler$ {
            }
            type URLStreamHandler = URLStreamHandler_S & URLStreamHandler$;
            interface URLStreamHandlerFactory_S {
            }
            interface URLStreamHandlerFactory$ {
                createURLStreamHandler(arg0: string): URLStreamHandler;
            }
            type URLStreamHandlerFactory = URLStreamHandlerFactory_S & URLStreamHandlerFactory$;
        }
        namespace java.nio {
            interface Buffer_S {
            }
            interface Buffer_C extends Buffer_S {
            }
            interface Buffer$ {
                array(): any;
                arrayOffset(): number;
                capacity(): number;
                clear(): this;
                flip(): this;
                hasArray(): boolean;
                hasRemaining(): boolean;
                isDirect(): boolean;
                isReadOnly(): boolean;
                limit(): number;
                limit(arg0: number): this;
                mark(): this;
                position(): number;
                position(arg0: number): this;
                remaining(): number;
                reset(): this;
                rewind(): this;
            }
            type Buffer = Buffer_S & Buffer$;
            interface ByteBuffer_S {
                allocate(arg0: number): ByteBuffer;
                allocateDirect(arg0: number): ByteBuffer;
                wrap(arg0: number[]): ByteBuffer;
                wrap(arg0: number[], arg1: number, arg2: number): ByteBuffer;
            }
            type ByteBuffer_ST = java.lang.Comparable_S & Buffer_S & ByteBuffer_S;
            interface ByteBuffer_C extends ByteBuffer_ST {
            }
            interface ByteBuffer$ {
                asCharBuffer(): CharBuffer;
                asDoubleBuffer(): DoubleBuffer;
                asFloatBuffer(): FloatBuffer;
                asIntBuffer(): IntBuffer;
                asLongBuffer(): LongBuffer;
                asReadOnlyBuffer(): this;
                asShortBuffer(): ShortBuffer;
                compact(): this;
                compareTo(arg0: ByteBuffer): number;
                duplicate(): this;
                get(): number;
                get(arg0: number[]): this;
                get(arg0: number): number;
                get(arg0: number[], arg1: number, arg2: number): this;
                getChar(): string;
                getChar(arg0: number): string;
                getDouble(): number;
                getDouble(arg0: number): number;
                getFloat(): number;
                getFloat(arg0: number): number;
                getInt(): number;
                getInt(arg0: number): number;
                getLong(): long;
                getLong(arg0: number): long;
                getShort(): number;
                getShort(arg0: number): number;
                order(): ByteOrder;
                order(arg0: ByteOrder): this;
                put(arg0: number[]): this;
                put(arg0: number): this;
                put(arg0: ByteBuffer): this;
                put(arg0: number, arg1: number): this;
                put(arg0: number[], arg1: number, arg2: number): this;
                putChar(arg0: string): this;
                putChar(arg0: number, arg1: string): this;
                putDouble(arg0: number): this;
                putDouble(arg0: number, arg1: number): this;
                putFloat(arg0: number): this;
                putFloat(arg0: number, arg1: number): this;
                putInt(arg0: number): this;
                putInt(arg0: number, arg1: number): this;
                putLong(arg0: long): this;
                putLong(arg0: number, arg1: long): this;
                putShort(arg0: number): this;
                putShort(arg0: number, arg1: number): this;
                slice(): this;
            }
            type ByteBuffer = Buffer & java.lang.Comparable & ByteBuffer_S & ByteBuffer$;
            interface ByteOrder_S {
                readonly BIG_ENDIAN: ByteOrder;
                readonly LITTLE_ENDIAN: ByteOrder;
                nativeOrder(): ByteOrder;
            }
            interface ByteOrder_C extends ByteOrder_S {
                new (): ByteOrder;
            }
            interface ByteOrder$ {
            }
            type ByteOrder = ByteOrder_S & ByteOrder$;
            interface CharBuffer_S {
                allocate(arg0: number): CharBuffer;
                wrap(arg0: string[]): CharBuffer;
                wrap(arg0: java.lang.CharSequence): CharBuffer;
                wrap(arg0: string[], arg1: number, arg2: number): CharBuffer;
                wrap(arg0: java.lang.CharSequence, arg1: number, arg2: number): CharBuffer;
            }
            type CharBuffer_ST = java.lang.Appendable_S & java.lang.Readable_S & java.lang.CharSequence_S & java.lang.Comparable_S & Buffer_S & CharBuffer_S;
            interface CharBuffer_C extends CharBuffer_ST {
            }
            interface CharBuffer$ {
                asReadOnlyBuffer(): this;
                compact(): this;
                compareTo(arg0: CharBuffer): number;
                duplicate(): this;
                get(): string;
                get(arg0: string[]): this;
                get(arg0: number): string;
                get(arg0: string[], arg1: number, arg2: number): this;
                order(): ByteOrder;
                put(arg0: string[]): this;
                put(arg0: CharBuffer): this;
                put(arg0: string): this;
                put(arg0: number, arg1: string): this;
                put(arg0: string[], arg1: number, arg2: number): this;
                put(arg0: string, arg1: number, arg2: number): this;
                slice(): this;
            }
            type CharBuffer = Buffer & java.lang.Comparable & java.lang.Appendable & java.lang.CharSequence & java.lang.Readable & CharBuffer_S & CharBuffer$;
            interface DoubleBuffer_S {
                allocate(arg0: number): DoubleBuffer;
                wrap(arg0: number[]): DoubleBuffer;
                wrap(arg0: number[], arg1: number, arg2: number): DoubleBuffer;
            }
            type DoubleBuffer_ST = java.lang.Comparable_S & Buffer_S & DoubleBuffer_S;
            interface DoubleBuffer_C extends DoubleBuffer_ST {
            }
            interface DoubleBuffer$ {
                asReadOnlyBuffer(): this;
                compact(): this;
                compareTo(arg0: DoubleBuffer): number;
                duplicate(): this;
                get(): number;
                get(arg0: number[]): this;
                get(arg0: number): number;
                get(arg0: number[], arg1: number, arg2: number): this;
                order(): ByteOrder;
                put(arg0: number[]): this;
                put(arg0: number): this;
                put(arg0: DoubleBuffer): this;
                put(arg0: number, arg1: number): this;
                put(arg0: number[], arg1: number, arg2: number): this;
                slice(): this;
            }
            type DoubleBuffer = Buffer & java.lang.Comparable & DoubleBuffer_S & DoubleBuffer$;
            interface FloatBuffer_S {
                allocate(arg0: number): FloatBuffer;
                wrap(arg0: number[]): FloatBuffer;
                wrap(arg0: number[], arg1: number, arg2: number): FloatBuffer;
            }
            type FloatBuffer_ST = java.lang.Comparable_S & Buffer_S & FloatBuffer_S;
            interface FloatBuffer_C extends FloatBuffer_ST {
            }
            interface FloatBuffer$ {
                asReadOnlyBuffer(): this;
                compact(): this;
                compareTo(arg0: FloatBuffer): number;
                duplicate(): this;
                get(): number;
                get(arg0: number[]): this;
                get(arg0: number): number;
                get(arg0: number[], arg1: number, arg2: number): this;
                order(): ByteOrder;
                put(arg0: number[]): this;
                put(arg0: number): this;
                put(arg0: FloatBuffer): this;
                put(arg0: number, arg1: number): this;
                put(arg0: number[], arg1: number, arg2: number): this;
                slice(): this;
            }
            type FloatBuffer = Buffer & java.lang.Comparable & FloatBuffer_S & FloatBuffer$;
            interface IntBuffer_S {
                allocate(arg0: number): IntBuffer;
                wrap(arg0: number[]): IntBuffer;
                wrap(arg0: number[], arg1: number, arg2: number): IntBuffer;
            }
            type IntBuffer_ST = java.lang.Comparable_S & Buffer_S & IntBuffer_S;
            interface IntBuffer_C extends IntBuffer_ST {
            }
            interface IntBuffer$ {
                asReadOnlyBuffer(): this;
                compact(): this;
                compareTo(arg0: IntBuffer): number;
                duplicate(): this;
                get(): number;
                get(arg0: number[]): this;
                get(arg0: number): number;
                get(arg0: number[], arg1: number, arg2: number): this;
                order(): ByteOrder;
                put(arg0: number[]): this;
                put(arg0: number): this;
                put(arg0: IntBuffer): this;
                put(arg0: number, arg1: number): this;
                put(arg0: number[], arg1: number, arg2: number): this;
                slice(): this;
            }
            type IntBuffer = Buffer & java.lang.Comparable & IntBuffer_S & IntBuffer$;
            interface LongBuffer_S {
                allocate(arg0: number): LongBuffer;
                wrap(arg0: long[]): LongBuffer;
                wrap(arg0: long[], arg1: number, arg2: number): LongBuffer;
            }
            type LongBuffer_ST = java.lang.Comparable_S & Buffer_S & LongBuffer_S;
            interface LongBuffer_C extends LongBuffer_ST {
            }
            interface LongBuffer$ {
                asReadOnlyBuffer(): this;
                compact(): this;
                compareTo(arg0: LongBuffer): number;
                duplicate(): this;
                get(): long;
                get(arg0: long[]): this;
                get(arg0: number): long;
                get(arg0: long[], arg1: number, arg2: number): this;
                order(): ByteOrder;
                put(arg0: long[]): this;
                put(arg0: long): this;
                put(arg0: LongBuffer): this;
                put(arg0: number, arg1: long): this;
                put(arg0: long[], arg1: number, arg2: number): this;
                slice(): this;
            }
            type LongBuffer = Buffer & java.lang.Comparable & LongBuffer_S & LongBuffer$;
            interface MappedByteBuffer_S {
            }
            type MappedByteBuffer_ST = ByteBuffer_S & MappedByteBuffer_S;
            interface MappedByteBuffer_C extends MappedByteBuffer_ST {
            }
            interface MappedByteBuffer$ {
                force(): this;
                isLoaded(): boolean;
                load(): this;
            }
            type MappedByteBuffer = ByteBuffer & MappedByteBuffer_S & MappedByteBuffer$;
            interface ShortBuffer_S {
                allocate(arg0: number): ShortBuffer;
                wrap(arg0: number[]): ShortBuffer;
                wrap(arg0: number[], arg1: number, arg2: number): ShortBuffer;
            }
            type ShortBuffer_ST = java.lang.Comparable_S & Buffer_S & ShortBuffer_S;
            interface ShortBuffer_C extends ShortBuffer_ST {
            }
            interface ShortBuffer$ {
                asReadOnlyBuffer(): this;
                compact(): this;
                compareTo(arg0: ShortBuffer): number;
                duplicate(): this;
                get(): number;
                get(arg0: number[]): this;
                get(arg0: number): number;
                get(arg0: number[], arg1: number, arg2: number): this;
                order(): ByteOrder;
                put(arg0: number[]): this;
                put(arg0: number): this;
                put(arg0: ShortBuffer): this;
                put(arg0: number, arg1: number): this;
                put(arg0: number[], arg1: number, arg2: number): this;
                slice(): this;
            }
            type ShortBuffer = Buffer & java.lang.Comparable & ShortBuffer_S & ShortBuffer$;
        }
        namespace java.nio.channels {
            interface AsynchronousChannel_S {
            }
            interface AsynchronousChannel$ {
            }
            type AsynchronousChannel = Channel & AsynchronousChannel_S & AsynchronousChannel$;
            interface AsynchronousFileChannel_S {
                open(arg0: java.nio.file.Path, ...arg1: java.nio.file.OpenOption[]): AsynchronousFileChannel;
                open(arg0: java.nio.file.Path, arg1: java.util.Set, arg2: java.util.concurrent.ExecutorService, ...arg3: java.nio.file.attribute.FileAttribute[]): AsynchronousFileChannel;
            }
            type AsynchronousFileChannel_ST = AsynchronousChannel_S & AsynchronousFileChannel_S;
            interface AsynchronousFileChannel_C extends AsynchronousFileChannel_ST {
            }
            interface AsynchronousFileChannel$ {
                force(arg0: boolean): void;
                lock(): java.util.concurrent.Future;
                lock(arg0: any, arg1: CompletionHandler): void;
                lock(arg0: long, arg1: long, arg2: boolean): java.util.concurrent.Future;
                lock(arg0: long, arg1: long, arg2: boolean, arg3: any, arg4: CompletionHandler): void;
                read(arg0: ByteBuffer, arg1: long): java.util.concurrent.Future;
                read(arg0: ByteBuffer, arg1: long, arg2: any, arg3: CompletionHandler): void;
                size(): long;
                truncate(arg0: long): this;
                tryLock(): FileLock;
                tryLock(arg0: long, arg1: long, arg2: boolean): FileLock;
                write(arg0: ByteBuffer, arg1: long): java.util.concurrent.Future;
                write(arg0: ByteBuffer, arg1: long, arg2: any, arg3: CompletionHandler): void;
            }
            type AsynchronousFileChannel = AsynchronousChannel & AsynchronousFileChannel_S & AsynchronousFileChannel$;
            interface ByteChannel_S {
            }
            interface ByteChannel$ {
            }
            type ByteChannel = ReadableByteChannel & WritableByteChannel & ByteChannel_S & ByteChannel$;
            interface Channel_S {
            }
            interface Channel$ {
                isOpen(): boolean;
            }
            type Channel = java.io.Closeable & Channel_S & Channel$;
            interface CompletionHandler_S {
            }
            interface CompletionHandler$ {
                completed(arg0: any, arg1: any): void;
                failed(arg0: java.lang.Throwable, arg1: any): void;
            }
            type CompletionHandler = CompletionHandler_S & CompletionHandler$;
            interface FileChannel_S {
                open(arg0: java.nio.file.Path, ...arg1: java.nio.file.OpenOption[]): FileChannel;
                open(arg0: java.nio.file.Path, arg1: java.util.Set, ...arg2: java.nio.file.attribute.FileAttribute[]): FileChannel;
            }
            type FileChannel_ST = GatheringByteChannel_S & java.nio.channels.spi.AbstractInterruptibleChannel_S & ScatteringByteChannel_S & SeekableByteChannel_S & FileChannel_S;
            interface FileChannel_C extends FileChannel_ST {
            }
            interface FileChannel$ {
                force(arg0: boolean): void;
                lock(): FileLock;
                lock(arg0: long, arg1: long, arg2: boolean): FileLock;
                map(arg0: FileChannel$MapMode, arg1: long, arg2: long): MappedByteBuffer;
                read(arg0: ByteBuffer, arg1: long): number;
                transferFrom(arg0: ReadableByteChannel, arg1: long, arg2: long): long;
                transferTo(arg0: long, arg1: long, arg2: WritableByteChannel): long;
                tryLock(): FileLock;
                tryLock(arg0: long, arg1: long, arg2: boolean): FileLock;
                write(arg0: ByteBuffer, arg1: long): number;
            }
            type FileChannel = java.nio.channels.spi.AbstractInterruptibleChannel & SeekableByteChannel & GatheringByteChannel & ScatteringByteChannel & FileChannel_S & FileChannel$;
            interface FileChannel$MapMode_S {
                readonly PRIVATE: FileChannel$MapMode;
                readonly READ_ONLY: FileChannel$MapMode;
                readonly READ_WRITE: FileChannel$MapMode;
            }
            interface FileChannel$MapMode_C extends FileChannel$MapMode_S {
                new (): FileChannel$MapMode;
            }
            interface FileChannel$MapMode$ {
            }
            type FileChannel$MapMode = FileChannel$MapMode_S & FileChannel$MapMode$;
            interface FileLock_S {
            }
            type FileLock_ST = java.lang.AutoCloseable_S & FileLock_S;
            interface FileLock_C extends FileLock_ST {
            }
            interface FileLock$ {
                acquiredBy(): Channel;
                channel(): FileChannel;
                isShared(): boolean;
                isValid(): boolean;
                overlaps(arg0: long, arg1: long): boolean;
                position(): long;
                release(): void;
                size(): long;
            }
            type FileLock = java.lang.AutoCloseable & FileLock_S & FileLock$;
            interface GatheringByteChannel_S {
            }
            interface GatheringByteChannel$ {
                write(arg0: ByteBuffer[]): long;
                write(arg0: ByteBuffer[], arg1: number, arg2: number): long;
            }
            type GatheringByteChannel = WritableByteChannel & GatheringByteChannel_S & GatheringByteChannel$;
            interface InterruptibleChannel_S {
            }
            interface InterruptibleChannel$ {
            }
            type InterruptibleChannel = Channel & InterruptibleChannel_S & InterruptibleChannel$;
            interface ReadableByteChannel_S {
            }
            interface ReadableByteChannel$ {
                read(arg0: ByteBuffer): number;
            }
            type ReadableByteChannel = Channel & ReadableByteChannel_S & ReadableByteChannel$;
            interface ScatteringByteChannel_S {
            }
            interface ScatteringByteChannel$ {
                read(arg0: ByteBuffer[]): long;
                read(arg0: ByteBuffer[], arg1: number, arg2: number): long;
            }
            type ScatteringByteChannel = ReadableByteChannel & ScatteringByteChannel_S & ScatteringByteChannel$;
            interface SeekableByteChannel_S {
            }
            interface SeekableByteChannel$ {
                position(): long;
                position(arg0: long): this;
                size(): long;
                truncate(arg0: long): this;
            }
            type SeekableByteChannel = ByteChannel & SeekableByteChannel_S & SeekableByteChannel$;
            interface WritableByteChannel_S {
            }
            interface WritableByteChannel$ {
                write(arg0: ByteBuffer): number;
            }
            type WritableByteChannel = Channel & WritableByteChannel_S & WritableByteChannel$;
        }
        namespace java.nio.channels.spi {
            interface AbstractInterruptibleChannel_S {
            }
            type AbstractInterruptibleChannel_ST = Channel_S & InterruptibleChannel_S & AbstractInterruptibleChannel_S;
            interface AbstractInterruptibleChannel_C extends AbstractInterruptibleChannel_ST {
            }
            interface AbstractInterruptibleChannel$ {
            }
            type AbstractInterruptibleChannel = Channel & InterruptibleChannel & AbstractInterruptibleChannel_S & AbstractInterruptibleChannel$;
        }
        namespace java.nio.charset {
            interface Charset_S {
                availableCharsets(): java.util.SortedMap;
                defaultCharset(): Charset;
                forName(arg0: string): Charset;
                isSupported(arg0: string): boolean;
            }
            type Charset_ST = java.lang.Comparable_S & Charset_S;
            interface Charset_C extends Charset_ST {
            }
            interface Charset$ {
                aliases(): java.util.Set;
                canEncode(): boolean;
                compareTo(arg0: Charset): number;
                contains(arg0: Charset): boolean;
                decode(arg0: ByteBuffer): CharBuffer;
                displayName(): string;
                displayName(arg0: java.util.Locale): string;
                encode(arg0: CharBuffer): ByteBuffer;
                encode(arg0: string): ByteBuffer;
                isRegistered(): boolean;
                name(): string;
                newDecoder(): CharsetDecoder;
                newEncoder(): CharsetEncoder;
            }
            type Charset = java.lang.Comparable & Charset_S & Charset$;
            interface CharsetDecoder_S {
            }
            interface CharsetDecoder_C extends CharsetDecoder_S {
            }
            interface CharsetDecoder$ {
                averageCharsPerByte(): number;
                charset(): Charset;
                decode(arg0: ByteBuffer): CharBuffer;
                decode(arg0: ByteBuffer, arg1: CharBuffer, arg2: boolean): CoderResult;
                detectedCharset(): Charset;
                flush(arg0: CharBuffer): CoderResult;
                isAutoDetecting(): boolean;
                isCharsetDetected(): boolean;
                malformedInputAction(): CodingErrorAction;
                maxCharsPerByte(): number;
                onMalformedInput(arg0: CodingErrorAction): this;
                onUnmappableCharacter(arg0: CodingErrorAction): this;
                replaceWith(arg0: string): this;
                replacement(): string;
                reset(): this;
                unmappableCharacterAction(): CodingErrorAction;
            }
            type CharsetDecoder = CharsetDecoder_S & CharsetDecoder$;
            interface CharsetEncoder_S {
            }
            interface CharsetEncoder_C extends CharsetEncoder_S {
            }
            interface CharsetEncoder$ {
                averageBytesPerChar(): number;
                canEncode(arg0: java.lang.CharSequence): boolean;
                canEncode(arg0: string): boolean;
                charset(): Charset;
                encode(arg0: CharBuffer): ByteBuffer;
                encode(arg0: CharBuffer, arg1: ByteBuffer, arg2: boolean): CoderResult;
                flush(arg0: ByteBuffer): CoderResult;
                isLegalReplacement(arg0: number[]): boolean;
                malformedInputAction(): CodingErrorAction;
                maxBytesPerChar(): number;
                onMalformedInput(arg0: CodingErrorAction): this;
                onUnmappableCharacter(arg0: CodingErrorAction): this;
                replaceWith(arg0: number[]): this;
                replacement(): number[];
                reset(): this;
                unmappableCharacterAction(): CodingErrorAction;
            }
            type CharsetEncoder = CharsetEncoder_S & CharsetEncoder$;
            interface CoderResult_S {
                readonly OVERFLOW: CoderResult;
                readonly UNDERFLOW: CoderResult;
                malformedForLength(arg0: number): CoderResult;
                unmappableForLength(arg0: number): CoderResult;
            }
            interface CoderResult_C extends CoderResult_S {
                new (): CoderResult;
            }
            interface CoderResult$ {
                isError(): boolean;
                isMalformed(): boolean;
                isOverflow(): boolean;
                isUnderflow(): boolean;
                isUnmappable(): boolean;
                length(): number;
                throwException(): void;
            }
            type CoderResult = CoderResult_S & CoderResult$;
            interface CodingErrorAction_S {
                readonly IGNORE: CodingErrorAction;
                readonly REPLACE: CodingErrorAction;
                readonly REPORT: CodingErrorAction;
            }
            interface CodingErrorAction_C extends CodingErrorAction_S {
                new (): CodingErrorAction;
            }
            interface CodingErrorAction$ {
            }
            type CodingErrorAction = CodingErrorAction_S & CodingErrorAction$;
        }
        namespace java.nio.file {
            enum AccessMode {
                READ,
                WRITE,
                EXECUTE
            }
            interface CopyOption_S {
            }
            interface CopyOption$ {
            }
            type CopyOption = CopyOption_S & CopyOption$;
            interface DirectoryStream_S {
            }
            interface DirectoryStream$ {
            }
            type DirectoryStream = java.io.Closeable & java.lang.Iterable & DirectoryStream_S & DirectoryStream$;
            interface DirectoryStream$Filter_S {
            }
            interface DirectoryStream$Filter$ {
                accept(arg0: any): boolean;
            }
            type DirectoryStream$Filter = DirectoryStream$Filter_S & DirectoryStream$Filter$;
            interface FileStore_S {
            }
            interface FileStore_C extends FileStore_S {
            }
            interface FileStore$ {
                getAttribute(arg0: string): any;
                getFileStoreAttributeView(arg0: java.lang.Class): java.nio.file.attribute.FileStoreAttributeView;
                getTotalSpace(): long;
                getUnallocatedSpace(): long;
                getUsableSpace(): long;
                isReadOnly(): boolean;
                name(): string;
                supportsFileAttributeView(arg0: java.lang.Class): boolean;
                supportsFileAttributeView(arg0: string): boolean;
                type(): string;
            }
            type FileStore = FileStore_S & FileStore$;
            interface FileSystem_S {
            }
            type FileSystem_ST = java.io.Closeable_S & FileSystem_S;
            interface FileSystem_C extends FileSystem_ST {
            }
            interface FileSystem$ {
                getFileStores(): java.lang.Iterable;
                getPath(arg0: string, ...arg1: string[]): Path;
                getPathMatcher(arg0: string): PathMatcher;
                getRootDirectories(): java.lang.Iterable;
                getSeparator(): string;
                getUserPrincipalLookupService(): java.nio.file.attribute.UserPrincipalLookupService;
                isOpen(): boolean;
                isReadOnly(): boolean;
                newWatchService(): WatchService;
                provider(): java.nio.file.spi.FileSystemProvider;
                supportedFileAttributeViews(): java.util.Set;
            }
            type FileSystem = java.io.Closeable & FileSystem_S & FileSystem$;
            enum LinkOption {
                NOFOLLOW_LINKS
            }
            interface OpenOption_S {
            }
            interface OpenOption$ {
            }
            type OpenOption = OpenOption_S & OpenOption$;
            interface Path_S {
            }
            interface Path$ {
                compareTo(arg0: Path): number;
                endsWith(arg0: Path): boolean;
                endsWith(arg0: string): boolean;
                equals(arg0: any): boolean;
                getFileName(): this;
                getFileSystem(): FileSystem;
                getName(arg0: number): this;
                getNameCount(): number;
                getParent(): this;
                getRoot(): this;
                hashCode(): number;
                isAbsolute(): boolean;
                normalize(): this;
                relativize(arg0: Path): this;
                resolve(arg0: Path): this;
                resolve(arg0: string): this;
                resolveSibling(arg0: Path): this;
                resolveSibling(arg0: string): this;
                startsWith(arg0: Path): boolean;
                startsWith(arg0: string): boolean;
                subpath(arg0: number, arg1: number): this;
                toAbsolutePath(): this;
                toFile(): java.io.File;
                toRealPath(...arg0: LinkOption[]): this;
                toString(): string;
                toUri(): java.net.URI;
            }
            type Path = java.lang.Comparable & java.lang.Iterable & Watchable & Path_S & Path$;
            interface PathMatcher_S {
            }
            interface PathMatcher$ {
                matches(arg0: Path): boolean;
            }
            type PathMatcher = PathMatcher_S & PathMatcher$;
            interface WatchEvent$Kind_S {
            }
            interface WatchEvent$Kind$ {
                name(): string;
                type(): java.lang.Class;
            }
            type WatchEvent$Kind = WatchEvent$Kind_S & WatchEvent$Kind$;
            interface WatchEvent$Modifier_S {
            }
            interface WatchEvent$Modifier$ {
                name(): string;
            }
            type WatchEvent$Modifier = WatchEvent$Modifier_S & WatchEvent$Modifier$;
            interface WatchKey_S {
            }
            interface WatchKey$ {
                cancel(): void;
                isValid(): boolean;
                pollEvents(): java.util.List;
                reset(): boolean;
                watchable(): Watchable;
            }
            type WatchKey = WatchKey_S & WatchKey$;
            interface WatchService_S {
            }
            interface WatchService$ {
                poll(): WatchKey;
                poll(arg0: long, arg1: java.util.concurrent.TimeUnit): WatchKey;
                take(): WatchKey;
            }
            type WatchService = java.io.Closeable & WatchService_S & WatchService$;
            interface Watchable_S {
            }
            interface Watchable$ {
                register(arg0: WatchService, ...arg1: WatchEvent$Kind[]): WatchKey;
                register(arg0: WatchService, arg1: WatchEvent$Kind[], ...arg2: WatchEvent$Modifier[]): WatchKey;
            }
            type Watchable = Watchable_S & Watchable$;
        }
        namespace java.nio.file.attribute {
            interface AttributeView_S {
            }
            interface AttributeView$ {
                name(): string;
            }
            type AttributeView = AttributeView_S & AttributeView$;
            interface BasicFileAttributes_S {
            }
            interface BasicFileAttributes$ {
                creationTime(): FileTime;
                fileKey(): any;
                isDirectory(): boolean;
                isOther(): boolean;
                isRegularFile(): boolean;
                isSymbolicLink(): boolean;
                lastAccessTime(): FileTime;
                lastModifiedTime(): FileTime;
                size(): long;
            }
            type BasicFileAttributes = BasicFileAttributes_S & BasicFileAttributes$;
            interface FileAttribute_S {
            }
            interface FileAttribute$ {
                name(): string;
                value(): any;
            }
            type FileAttribute = FileAttribute_S & FileAttribute$;
            interface FileAttributeView_S {
            }
            interface FileAttributeView$ {
            }
            type FileAttributeView = AttributeView & FileAttributeView_S & FileAttributeView$;
            interface FileStoreAttributeView_S {
            }
            interface FileStoreAttributeView$ {
            }
            type FileStoreAttributeView = AttributeView & FileStoreAttributeView_S & FileStoreAttributeView$;
            interface FileTime_S {
                from(arg0: java.time.Instant): FileTime;
                from(arg0: long, arg1: java.util.concurrent.TimeUnit): FileTime;
                fromMillis(arg0: long): FileTime;
            }
            type FileTime_ST = java.lang.Comparable_S & FileTime_S;
            interface FileTime_C extends FileTime_ST {
                new (): FileTime;
            }
            interface FileTime$ {
                compareTo(arg0: FileTime): number;
                to(arg0: java.util.concurrent.TimeUnit): long;
                toInstant(): java.time.Instant;
                toMillis(): long;
            }
            type FileTime = java.lang.Comparable & FileTime_S & FileTime$;
            interface GroupPrincipal_S {
            }
            interface GroupPrincipal$ {
            }
            type GroupPrincipal = UserPrincipal & GroupPrincipal_S & GroupPrincipal$;
            interface UserPrincipal_S {
            }
            interface UserPrincipal$ {
            }
            type UserPrincipal = java.security.Principal & UserPrincipal_S & UserPrincipal$;
            interface UserPrincipalLookupService_S {
            }
            interface UserPrincipalLookupService_C extends UserPrincipalLookupService_S {
            }
            interface UserPrincipalLookupService$ {
                lookupPrincipalByGroupName(arg0: string): GroupPrincipal;
                lookupPrincipalByName(arg0: string): UserPrincipal;
            }
            type UserPrincipalLookupService = UserPrincipalLookupService_S & UserPrincipalLookupService$;
        }
        namespace java.nio.file.spi {
            interface FileSystemProvider_S {
                installedProviders(): java.util.List;
            }
            interface FileSystemProvider_C extends FileSystemProvider_S {
            }
            interface FileSystemProvider$ {
                checkAccess(arg0: Path, ...arg1: AccessMode[]): void;
                copy(arg0: Path, arg1: Path, ...arg2: CopyOption[]): void;
                createDirectory(arg0: Path, ...arg1: java.nio.file.attribute.FileAttribute[]): void;
                createLink(arg0: Path, arg1: Path): void;
                createSymbolicLink(arg0: Path, arg1: Path, ...arg2: java.nio.file.attribute.FileAttribute[]): void;
                delete(arg0: Path): void;
                deleteIfExists(arg0: Path): boolean;
                getFileAttributeView(arg0: Path, arg1: java.lang.Class, ...arg2: LinkOption[]): java.nio.file.attribute.FileAttributeView;
                getFileStore(arg0: Path): FileStore;
                getFileSystem(arg0: java.net.URI): FileSystem;
                getPath(arg0: java.net.URI): Path;
                getScheme(): string;
                isHidden(arg0: Path): boolean;
                isSameFile(arg0: Path, arg1: Path): boolean;
                move(arg0: Path, arg1: Path, ...arg2: CopyOption[]): void;
                newAsynchronousFileChannel(arg0: Path, arg1: java.util.Set, arg2: java.util.concurrent.ExecutorService, ...arg3: java.nio.file.attribute.FileAttribute[]): java.nio.channels.AsynchronousFileChannel;
                newByteChannel(arg0: Path, arg1: java.util.Set, ...arg2: java.nio.file.attribute.FileAttribute[]): java.nio.channels.SeekableByteChannel;
                newDirectoryStream(arg0: Path, arg1: DirectoryStream$Filter): DirectoryStream;
                newFileChannel(arg0: Path, arg1: java.util.Set, ...arg2: java.nio.file.attribute.FileAttribute[]): java.nio.channels.FileChannel;
                newFileSystem(arg0: java.net.URI, arg1: java.util.Map): FileSystem;
                newFileSystem(arg0: Path, arg1: java.util.Map): FileSystem;
                newInputStream(arg0: Path, ...arg1: OpenOption[]): java.io.InputStream;
                newOutputStream(arg0: Path, ...arg1: OpenOption[]): java.io.OutputStream;
                readAttributes(arg0: Path, arg1: java.lang.Class, ...arg2: LinkOption[]): java.nio.file.attribute.BasicFileAttributes;
                readAttributes(arg0: Path, arg1: string, ...arg2: LinkOption[]): java.util.Map;
                readSymbolicLink(arg0: Path): Path;
                setAttribute(arg0: Path, arg1: string, arg2: any, ...arg3: LinkOption[]): void;
            }
            type FileSystemProvider = FileSystemProvider_S & FileSystemProvider$;
        }
        namespace java.security {
            interface AccessControlContext_S {
            }
            interface AccessControlContext_C extends AccessControlContext_S {
                new (arg0: ProtectionDomain[]): AccessControlContext;
                new (arg0: AccessControlContext, arg1: DomainCombiner): AccessControlContext;
            }
            interface AccessControlContext$ {
                checkPermission(arg0: Permission): void;
                getDomainCombiner(): DomainCombiner;
            }
            type AccessControlContext = AccessControlContext_S & AccessControlContext$;
            interface AlgorithmParameters_S {
                getInstance(arg0: string): AlgorithmParameters;
                getInstance(arg0: string, arg1: Provider): AlgorithmParameters;
                getInstance(arg0: string, arg1: string): AlgorithmParameters;
            }
            interface AlgorithmParameters_C extends AlgorithmParameters_S {
                new (): AlgorithmParameters;
            }
            interface AlgorithmParameters$ {
                getAlgorithm(): string;
                getEncoded(): number[];
                getEncoded(arg0: string): number[];
                getParameterSpec(arg0: java.lang.Class): java.security.spec.AlgorithmParameterSpec;
                getProvider(): Provider;
                init(arg0: number[]): void;
                init(arg0: java.security.spec.AlgorithmParameterSpec): void;
                init(arg0: number[], arg1: string): void;
            }
            type AlgorithmParameters = AlgorithmParameters_S & AlgorithmParameters$;
            interface CodeSigner_S {
            }
            type CodeSigner_ST = java.io.Serializable_S & CodeSigner_S;
            interface CodeSigner_C extends CodeSigner_ST {
                new (arg0: java.security.cert.CertPath, arg1: Timestamp): CodeSigner;
            }
            interface CodeSigner$ {
                getSignerCertPath(): java.security.cert.CertPath;
                getTimestamp(): Timestamp;
            }
            type CodeSigner = java.io.Serializable & CodeSigner_S & CodeSigner$;
            interface CodeSource_S {
            }
            type CodeSource_ST = java.io.Serializable_S & CodeSource_S;
            interface CodeSource_C extends CodeSource_ST {
                new (arg0: java.net.URL, arg1: java.security.cert.Certificate[]): CodeSource;
                new (arg0: java.net.URL, arg1: CodeSigner[]): CodeSource;
            }
            interface CodeSource$ {
                getCertificates(): java.security.cert.Certificate[];
                getCodeSigners(): CodeSigner[];
                getLocation(): java.net.URL;
                implies(arg0: CodeSource): boolean;
            }
            type CodeSource = java.io.Serializable & CodeSource_S & CodeSource$;
            interface DomainCombiner_S {
            }
            interface DomainCombiner$ {
                combine(arg0: ProtectionDomain[], arg1: ProtectionDomain[]): ProtectionDomain[];
            }
            type DomainCombiner = DomainCombiner_S & DomainCombiner$;
            interface Guard_S {
            }
            interface Guard$ {
                checkGuard(arg0: any): void;
            }
            type Guard = Guard_S & Guard$;
            interface Key_S {
                readonly serialVersionUID: long;
            }
            interface Key$ {
                getAlgorithm(): string;
                getEncoded(): number[];
                getFormat(): string;
            }
            type Key = java.io.Serializable & Key_S & Key$;
            interface Permission_S {
            }
            type Permission_ST = java.io.Serializable_S & Guard_S & Permission_S;
            interface Permission_C extends Permission_ST {
                new (arg0: string): Permission;
            }
            interface Permission$ {
                getActions(): string;
                getName(): string;
                implies(arg0: Permission): boolean;
                newPermissionCollection(): PermissionCollection;
            }
            type Permission = Guard & java.io.Serializable & Permission_S & Permission$;
            interface PermissionCollection_S {
            }
            type PermissionCollection_ST = java.io.Serializable_S & PermissionCollection_S;
            interface PermissionCollection_C extends PermissionCollection_ST {
                new (): PermissionCollection;
            }
            interface PermissionCollection$ {
                add(arg0: Permission): void;
                elements(): java.util.Enumeration;
                implies(arg0: Permission): boolean;
                isReadOnly(): boolean;
                setReadOnly(): void;
            }
            type PermissionCollection = java.io.Serializable & PermissionCollection_S & PermissionCollection$;
            interface Principal_S {
            }
            interface Principal$ {
                equals(arg0: any): boolean;
                getName(): string;
                hashCode(): number;
                implies(arg0: javax.security.auth.Subject): boolean;
                toString(): string;
            }
            type Principal = Principal_S & Principal$;
            interface PrivilegedAction_S {
            }
            interface PrivilegedAction$ {
                run(): any;
            }
            type PrivilegedAction = PrivilegedAction_S & PrivilegedAction$;
            interface PrivilegedExceptionAction_S {
            }
            interface PrivilegedExceptionAction$ {
                run(): any;
            }
            type PrivilegedExceptionAction = PrivilegedExceptionAction_S & PrivilegedExceptionAction$;
            interface ProtectionDomain_S {
            }
            interface ProtectionDomain_C extends ProtectionDomain_S {
                new (arg0: CodeSource, arg1: PermissionCollection): ProtectionDomain;
                new (arg0: CodeSource, arg1: PermissionCollection, arg2: java.lang.ClassLoader, arg3: Principal[]): ProtectionDomain;
            }
            interface ProtectionDomain$ {
                getClassLoader(): java.lang.ClassLoader;
                getCodeSource(): CodeSource;
                getPermissions(): PermissionCollection;
                getPrincipals(): Principal[];
                implies(arg0: Permission): boolean;
            }
            type ProtectionDomain = ProtectionDomain_S & ProtectionDomain$;
            interface Provider_S {
            }
            type Provider_ST = java.util.Properties_S & Provider_S;
            interface Provider_C extends Provider_ST {
            }
            interface Provider$ {
                getInfo(): string;
                getName(): string;
                getService(arg0: string, arg1: string): Provider$Service;
                getServices(): java.util.Set;
                getVersion(): number;
            }
            type Provider = java.util.Properties & Provider_S & Provider$;
            interface Provider$Service_S {
            }
            interface Provider$Service_C extends Provider$Service_S {
                new (arg0: Provider, arg1: string, arg2: string, arg3: string, arg4: java.util.List, arg5: java.util.Map): Provider$Service;
            }
            interface Provider$Service$ {
                getAlgorithm(): string;
                getAttribute(arg0: string): string;
                getClassName(): string;
                getProvider(): Provider;
                getType(): string;
                newInstance(arg0: any): any;
                supportsParameter(arg0: any): boolean;
            }
            type Provider$Service = Provider$Service_S & Provider$Service$;
            interface PublicKey_S {
                readonly serialVersionUID: long;
            }
            interface PublicKey$ {
            }
            type PublicKey = Key & PublicKey_S & PublicKey$;
            interface SecureRandom_S {
                getInstance(arg0: string): SecureRandom;
                getInstance(arg0: string, arg1: Provider): SecureRandom;
                getInstance(arg0: string, arg1: string): SecureRandom;
                getInstanceStrong(): SecureRandom;
                getSeed(arg0: number): number[];
            }
            type SecureRandom_ST = java.util.Random_S & SecureRandom_S;
            interface SecureRandom_C extends SecureRandom_ST {
                new (): SecureRandom;
                new (arg0: number[]): SecureRandom;
            }
            interface SecureRandom$ {
                generateSeed(arg0: number): number[];
                getAlgorithm(): string;
                getProvider(): Provider;
                setSeed(arg0: number[]): void;
            }
            type SecureRandom = java.util.Random & SecureRandom_S & SecureRandom$;
            interface Timestamp_S {
            }
            type Timestamp_ST = java.io.Serializable_S & Timestamp_S;
            interface Timestamp_C extends Timestamp_ST {
                new (arg0: Date, arg1: java.security.cert.CertPath): Timestamp;
            }
            interface Timestamp$ {
                getSignerCertPath(): java.security.cert.CertPath;
                getTimestamp(): Date;
            }
            type Timestamp = java.io.Serializable & Timestamp_S & Timestamp$;
        }
        namespace java.security.cert {
            interface CertPath_S {
            }
            type CertPath_ST = java.io.Serializable_S & CertPath_S;
            interface CertPath_C extends CertPath_ST {
            }
            interface CertPath$ {
                getCertificates(): java.util.List;
                getEncoded(): number[];
                getEncoded(arg0: string): number[];
                getEncodings(): java.util.Iterator;
                getType(): string;
            }
            type CertPath = java.io.Serializable & CertPath_S & CertPath$;
            interface Certificate_S {
            }
            type Certificate_ST = java.io.Serializable_S & Certificate_S;
            interface Certificate_C extends Certificate_ST {
            }
            interface Certificate$ {
                getEncoded(): number[];
                getPublicKey(): PublicKey;
                getType(): string;
                verify(arg0: PublicKey): void;
                verify(arg0: PublicKey, arg1: Provider): void;
                verify(arg0: PublicKey, arg1: string): void;
            }
            type Certificate = java.io.Serializable & Certificate_S & Certificate$;
        }
        namespace java.security.spec {
            interface AlgorithmParameterSpec_S {
            }
            interface AlgorithmParameterSpec$ {
            }
            type AlgorithmParameterSpec = AlgorithmParameterSpec_S & AlgorithmParameterSpec$;
        }
        namespace java.sql {
            interface Array_S {
            }
            interface Array$ {
                free(): void;
                getArray(): any;
                getArray(arg0: java.util.Map): any;
                getArray(arg0: long, arg1: number): any;
                getArray(arg0: long, arg1: number, arg2: java.util.Map): any;
                getBaseType(): number;
                getBaseTypeName(): string;
                getResultSet(): ResultSet;
                getResultSet(arg0: java.util.Map): ResultSet;
                getResultSet(arg0: long, arg1: number): ResultSet;
                getResultSet(arg0: long, arg1: number, arg2: java.util.Map): ResultSet;
            }
            type Array = Array_S & Array$;
            interface Blob_S {
            }
            interface Blob$ {
                free(): void;
                getBinaryStream(): java.io.InputStream;
                getBinaryStream(arg0: long, arg1: long): java.io.InputStream;
                getBytes(arg0: long, arg1: number): number[];
                length(): long;
                position(arg0: number[], arg1: long): long;
                position(arg0: Blob, arg1: long): long;
                setBinaryStream(arg0: long): java.io.OutputStream;
                setBytes(arg0: long, arg1: number[]): number;
                setBytes(arg0: long, arg1: number[], arg2: number, arg3: number): number;
                truncate(arg0: long): void;
            }
            type Blob = Blob_S & Blob$;
            interface CallableStatement_S {
            }
            interface CallableStatement$ {
                getArray(arg0: number): Array;
                getArray(arg0: string): Array;
                getBigDecimal(arg0: number): java.math.BigDecimal;
                getBigDecimal(arg0: string): java.math.BigDecimal;
                getBlob(arg0: number): Blob;
                getBlob(arg0: string): Blob;
                getBoolean(arg0: number): boolean;
                getBoolean(arg0: string): boolean;
                getByte(arg0: number): number;
                getByte(arg0: string): number;
                getBytes(arg0: number): number[];
                getBytes(arg0: string): number[];
                getCharacterStream(arg0: number): java.io.Reader;
                getCharacterStream(arg0: string): java.io.Reader;
                getClob(arg0: number): Clob;
                getClob(arg0: string): Clob;
                getDate(arg0: number): Date;
                getDate(arg0: string): Date;
                getDate(arg0: number, arg1: java.util.Calendar): Date;
                getDate(arg0: string, arg1: java.util.Calendar): Date;
                getDouble(arg0: number): number;
                getDouble(arg0: string): number;
                getFloat(arg0: number): number;
                getFloat(arg0: string): number;
                getInt(arg0: number): number;
                getInt(arg0: string): number;
                getLong(arg0: number): long;
                getLong(arg0: string): long;
                getNCharacterStream(arg0: number): java.io.Reader;
                getNCharacterStream(arg0: string): java.io.Reader;
                getNClob(arg0: number): NClob;
                getNClob(arg0: string): NClob;
                getNString(arg0: number): string;
                getNString(arg0: string): string;
                getObject(arg0: number): any;
                getObject(arg0: string): any;
                getObject(arg0: number, arg1: java.lang.Class): any;
                getObject(arg0: number, arg1: java.util.Map): any;
                getObject(arg0: string, arg1: java.util.Map): any;
                getObject(arg0: string, arg1: java.lang.Class): any;
                getRef(arg0: number): Ref;
                getRef(arg0: string): Ref;
                getRowId(arg0: number): RowId;
                getRowId(arg0: string): RowId;
                getSQLXML(arg0: number): SQLXML;
                getSQLXML(arg0: string): SQLXML;
                getShort(arg0: number): number;
                getShort(arg0: string): number;
                getString(arg0: number): string;
                getString(arg0: string): string;
                getTime(arg0: number): Date;
                getTime(arg0: string): Date;
                getTime(arg0: number, arg1: java.util.Calendar): Date;
                getTime(arg0: string, arg1: java.util.Calendar): Date;
                getTimestamp(arg0: number): Date;
                getTimestamp(arg0: string): Date;
                getTimestamp(arg0: number, arg1: java.util.Calendar): Date;
                getTimestamp(arg0: string, arg1: java.util.Calendar): Date;
                getURL(arg0: number): java.net.URL;
                getURL(arg0: string): java.net.URL;
                registerOutParameter(arg0: number, arg1: number): void;
                registerOutParameter(arg0: number, arg1: SQLType): void;
                registerOutParameter(arg0: string, arg1: number): void;
                registerOutParameter(arg0: string, arg1: SQLType): void;
                registerOutParameter(arg0: number, arg1: number, arg2: number): void;
                registerOutParameter(arg0: number, arg1: number, arg2: string): void;
                registerOutParameter(arg0: number, arg1: SQLType, arg2: number): void;
                registerOutParameter(arg0: number, arg1: SQLType, arg2: string): void;
                registerOutParameter(arg0: string, arg1: number, arg2: number): void;
                registerOutParameter(arg0: string, arg1: number, arg2: string): void;
                registerOutParameter(arg0: string, arg1: SQLType, arg2: string): void;
                registerOutParameter(arg0: string, arg1: SQLType, arg2: number): void;
                setAsciiStream(arg0: string, arg1: java.io.InputStream): void;
                setAsciiStream(arg0: string, arg1: java.io.InputStream, arg2: number): void;
                setAsciiStream(arg0: string, arg1: java.io.InputStream, arg2: long): void;
                setBigDecimal(arg0: string, arg1: java.math.BigDecimal): void;
                setBinaryStream(arg0: string, arg1: java.io.InputStream): void;
                setBinaryStream(arg0: string, arg1: java.io.InputStream, arg2: long): void;
                setBinaryStream(arg0: string, arg1: java.io.InputStream, arg2: number): void;
                setBlob(arg0: string, arg1: Blob): void;
                setBlob(arg0: string, arg1: java.io.InputStream): void;
                setBlob(arg0: string, arg1: java.io.InputStream, arg2: long): void;
                setBoolean(arg0: string, arg1: boolean): void;
                setByte(arg0: string, arg1: number): void;
                setBytes(arg0: string, arg1: number[]): void;
                setCharacterStream(arg0: string, arg1: java.io.Reader): void;
                setCharacterStream(arg0: string, arg1: java.io.Reader, arg2: number): void;
                setCharacterStream(arg0: string, arg1: java.io.Reader, arg2: long): void;
                setClob(arg0: string, arg1: java.io.Reader): void;
                setClob(arg0: string, arg1: Clob): void;
                setClob(arg0: string, arg1: java.io.Reader, arg2: long): void;
                setDate(arg0: string, arg1: Date): void;
                setDate(arg0: string, arg1: Date, arg2: java.util.Calendar): void;
                setDouble(arg0: string, arg1: number): void;
                setFloat(arg0: string, arg1: number): void;
                setInt(arg0: string, arg1: number): void;
                setLong(arg0: string, arg1: long): void;
                setNCharacterStream(arg0: string, arg1: java.io.Reader): void;
                setNCharacterStream(arg0: string, arg1: java.io.Reader, arg2: long): void;
                setNClob(arg0: string, arg1: NClob): void;
                setNClob(arg0: string, arg1: java.io.Reader): void;
                setNClob(arg0: string, arg1: java.io.Reader, arg2: long): void;
                setNString(arg0: string, arg1: string): void;
                setNull(arg0: string, arg1: number): void;
                setNull(arg0: string, arg1: number, arg2: string): void;
                setObject(arg0: string, arg1: any): void;
                setObject(arg0: string, arg1: any, arg2: number): void;
                setObject(arg0: string, arg1: any, arg2: SQLType): void;
                setObject(arg0: string, arg1: any, arg2: number, arg3: number): void;
                setObject(arg0: string, arg1: any, arg2: SQLType, arg3: number): void;
                setRowId(arg0: string, arg1: RowId): void;
                setSQLXML(arg0: string, arg1: SQLXML): void;
                setShort(arg0: string, arg1: number): void;
                setString(arg0: string, arg1: string): void;
                setTime(arg0: string, arg1: Date): void;
                setTime(arg0: string, arg1: Date, arg2: java.util.Calendar): void;
                setTimestamp(arg0: string, arg1: Date): void;
                setTimestamp(arg0: string, arg1: Date, arg2: java.util.Calendar): void;
                setURL(arg0: string, arg1: java.net.URL): void;
                wasNull(): boolean;
            }
            type CallableStatement = PreparedStatement & CallableStatement_S & CallableStatement$;
            interface Clob_S {
            }
            interface Clob$ {
                free(): void;
                getAsciiStream(): java.io.InputStream;
                getCharacterStream(): java.io.Reader;
                getCharacterStream(arg0: long, arg1: long): java.io.Reader;
                getSubString(arg0: long, arg1: number): string;
                length(): long;
                position(arg0: Clob, arg1: long): long;
                position(arg0: string, arg1: long): long;
                setAsciiStream(arg0: long): java.io.OutputStream;
                setCharacterStream(arg0: long): java.io.Writer;
                setString(arg0: long, arg1: string): number;
                setString(arg0: long, arg1: string, arg2: number, arg3: number): number;
                truncate(arg0: long): void;
            }
            type Clob = Clob_S & Clob$;
            interface Connection_S {
                readonly TRANSACTION_NONE: number;
                readonly TRANSACTION_READ_COMMITTED: number;
                readonly TRANSACTION_READ_UNCOMMITTED: number;
                readonly TRANSACTION_REPEATABLE_READ: number;
                readonly TRANSACTION_SERIALIZABLE: number;
            }
            interface Connection$ {
                abort(arg0: java.util.concurrent.Executor): void;
                clearWarnings(): void;
                commit(): void;
                createArrayOf(arg0: string, arg1: any[]): Array;
                createBlob(): Blob;
                createClob(): Clob;
                createNClob(): NClob;
                createSQLXML(): SQLXML;
                createStatement(): Statement;
                createStatement(arg0: number, arg1: number): Statement;
                createStatement(arg0: number, arg1: number, arg2: number): Statement;
                createStruct(arg0: string, arg1: any[]): Struct;
                getAutoCommit(): boolean;
                getCatalog(): string;
                getClientInfo(): java.util.Properties;
                getClientInfo(arg0: string): string;
                getHoldability(): number;
                getMetaData(): DatabaseMetaData;
                getNetworkTimeout(): number;
                getSchema(): string;
                getTransactionIsolation(): number;
                getTypeMap(): java.util.Map;
                getWarnings(): SQLWarning;
                isClosed(): boolean;
                isReadOnly(): boolean;
                isValid(arg0: number): boolean;
                nativeSQL(arg0: string): string;
                prepareCall(arg0: string): CallableStatement;
                prepareCall(arg0: string, arg1: number, arg2: number): CallableStatement;
                prepareCall(arg0: string, arg1: number, arg2: number, arg3: number): CallableStatement;
                prepareStatement(arg0: string): PreparedStatement;
                prepareStatement(arg0: string, arg1: number[]): PreparedStatement;
                prepareStatement(arg0: string, arg1: string[]): PreparedStatement;
                prepareStatement(arg0: string, arg1: number): PreparedStatement;
                prepareStatement(arg0: string, arg1: number, arg2: number): PreparedStatement;
                prepareStatement(arg0: string, arg1: number, arg2: number, arg3: number): PreparedStatement;
                releaseSavepoint(arg0: Savepoint): void;
                rollback(): void;
                rollback(arg0: Savepoint): void;
                setAutoCommit(arg0: boolean): void;
                setCatalog(arg0: string): void;
                setClientInfo(arg0: java.util.Properties): void;
                setClientInfo(arg0: string, arg1: string): void;
                setHoldability(arg0: number): void;
                setNetworkTimeout(arg0: java.util.concurrent.Executor, arg1: number): void;
                setReadOnly(arg0: boolean): void;
                setSavepoint(): Savepoint;
                setSavepoint(arg0: string): Savepoint;
                setSchema(arg0: string): void;
                setTransactionIsolation(arg0: number): void;
                setTypeMap(arg0: java.util.Map): void;
            }
            type Connection = Wrapper & java.lang.AutoCloseable & Connection_S & Connection$;
            interface DatabaseMetaData_S {
                readonly attributeNoNulls: number;
                readonly attributeNullable: number;
                readonly attributeNullableUnknown: number;
                readonly bestRowNotPseudo: number;
                readonly bestRowPseudo: number;
                readonly bestRowSession: number;
                readonly bestRowTemporary: number;
                readonly bestRowTransaction: number;
                readonly bestRowUnknown: number;
                readonly columnNoNulls: number;
                readonly columnNullable: number;
                readonly columnNullableUnknown: number;
                readonly functionColumnIn: number;
                readonly functionColumnInOut: number;
                readonly functionColumnOut: number;
                readonly functionColumnResult: number;
                readonly functionColumnUnknown: number;
                readonly functionNoNulls: number;
                readonly functionNoTable: number;
                readonly functionNullable: number;
                readonly functionNullableUnknown: number;
                readonly functionResultUnknown: number;
                readonly functionReturn: number;
                readonly functionReturnsTable: number;
                readonly importedKeyCascade: number;
                readonly importedKeyInitiallyDeferred: number;
                readonly importedKeyInitiallyImmediate: number;
                readonly importedKeyNoAction: number;
                readonly importedKeyNotDeferrable: number;
                readonly importedKeyRestrict: number;
                readonly importedKeySetDefault: number;
                readonly importedKeySetNull: number;
                readonly procedureColumnIn: number;
                readonly procedureColumnInOut: number;
                readonly procedureColumnOut: number;
                readonly procedureColumnResult: number;
                readonly procedureColumnReturn: number;
                readonly procedureColumnUnknown: number;
                readonly procedureNoNulls: number;
                readonly procedureNoResult: number;
                readonly procedureNullable: number;
                readonly procedureNullableUnknown: number;
                readonly procedureResultUnknown: number;
                readonly procedureReturnsResult: number;
                readonly sqlStateSQL: number;
                readonly sqlStateSQL99: number;
                readonly sqlStateXOpen: number;
                readonly tableIndexClustered: number;
                readonly tableIndexHashed: number;
                readonly tableIndexOther: number;
                readonly tableIndexStatistic: number;
                readonly typeNoNulls: number;
                readonly typeNullable: number;
                readonly typeNullableUnknown: number;
                readonly typePredBasic: number;
                readonly typePredChar: number;
                readonly typePredNone: number;
                readonly typeSearchable: number;
                readonly versionColumnNotPseudo: number;
                readonly versionColumnPseudo: number;
                readonly versionColumnUnknown: number;
            }
            interface DatabaseMetaData$ {
                allProceduresAreCallable(): boolean;
                allTablesAreSelectable(): boolean;
                autoCommitFailureClosesAllResultSets(): boolean;
                dataDefinitionCausesTransactionCommit(): boolean;
                dataDefinitionIgnoredInTransactions(): boolean;
                deletesAreDetected(arg0: number): boolean;
                doesMaxRowSizeIncludeBlobs(): boolean;
                generatedKeyAlwaysReturned(): boolean;
                getAttributes(arg0: string, arg1: string, arg2: string, arg3: string): ResultSet;
                getBestRowIdentifier(arg0: string, arg1: string, arg2: string, arg3: number, arg4: boolean): ResultSet;
                getCatalogSeparator(): string;
                getCatalogTerm(): string;
                getCatalogs(): ResultSet;
                getClientInfoProperties(): ResultSet;
                getColumnPrivileges(arg0: string, arg1: string, arg2: string, arg3: string): ResultSet;
                getColumns(arg0: string, arg1: string, arg2: string, arg3: string): ResultSet;
                getConnection(): Connection;
                getCrossReference(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string): ResultSet;
                getDatabaseMajorVersion(): number;
                getDatabaseMinorVersion(): number;
                getDatabaseProductName(): string;
                getDatabaseProductVersion(): string;
                getDefaultTransactionIsolation(): number;
                getDriverMajorVersion(): number;
                getDriverMinorVersion(): number;
                getDriverName(): string;
                getDriverVersion(): string;
                getExportedKeys(arg0: string, arg1: string, arg2: string): ResultSet;
                getExtraNameCharacters(): string;
                getFunctionColumns(arg0: string, arg1: string, arg2: string, arg3: string): ResultSet;
                getFunctions(arg0: string, arg1: string, arg2: string): ResultSet;
                getIdentifierQuoteString(): string;
                getImportedKeys(arg0: string, arg1: string, arg2: string): ResultSet;
                getIndexInfo(arg0: string, arg1: string, arg2: string, arg3: boolean, arg4: boolean): ResultSet;
                getJDBCMajorVersion(): number;
                getJDBCMinorVersion(): number;
                getMaxBinaryLiteralLength(): number;
                getMaxCatalogNameLength(): number;
                getMaxCharLiteralLength(): number;
                getMaxColumnNameLength(): number;
                getMaxColumnsInGroupBy(): number;
                getMaxColumnsInIndex(): number;
                getMaxColumnsInOrderBy(): number;
                getMaxColumnsInSelect(): number;
                getMaxColumnsInTable(): number;
                getMaxConnections(): number;
                getMaxCursorNameLength(): number;
                getMaxIndexLength(): number;
                getMaxLogicalLobSize(): long;
                getMaxProcedureNameLength(): number;
                getMaxRowSize(): number;
                getMaxSchemaNameLength(): number;
                getMaxStatementLength(): number;
                getMaxStatements(): number;
                getMaxTableNameLength(): number;
                getMaxTablesInSelect(): number;
                getMaxUserNameLength(): number;
                getNumericFunctions(): string;
                getPrimaryKeys(arg0: string, arg1: string, arg2: string): ResultSet;
                getProcedureColumns(arg0: string, arg1: string, arg2: string, arg3: string): ResultSet;
                getProcedureTerm(): string;
                getProcedures(arg0: string, arg1: string, arg2: string): ResultSet;
                getPseudoColumns(arg0: string, arg1: string, arg2: string, arg3: string): ResultSet;
                getResultSetHoldability(): number;
                getRowIdLifetime(): RowIdLifetime;
                getSQLKeywords(): string;
                getSQLStateType(): number;
                getSchemaTerm(): string;
                getSchemas(): ResultSet;
                getSchemas(arg0: string, arg1: string): ResultSet;
                getSearchStringEscape(): string;
                getStringFunctions(): string;
                getSuperTables(arg0: string, arg1: string, arg2: string): ResultSet;
                getSuperTypes(arg0: string, arg1: string, arg2: string): ResultSet;
                getSystemFunctions(): string;
                getTablePrivileges(arg0: string, arg1: string, arg2: string): ResultSet;
                getTableTypes(): ResultSet;
                getTables(arg0: string, arg1: string, arg2: string, arg3: string[]): ResultSet;
                getTimeDateFunctions(): string;
                getTypeInfo(): ResultSet;
                getUDTs(arg0: string, arg1: string, arg2: string, arg3: number[]): ResultSet;
                getURL(): string;
                getUserName(): string;
                getVersionColumns(arg0: string, arg1: string, arg2: string): ResultSet;
                insertsAreDetected(arg0: number): boolean;
                isCatalogAtStart(): boolean;
                isReadOnly(): boolean;
                locatorsUpdateCopy(): boolean;
                nullPlusNonNullIsNull(): boolean;
                nullsAreSortedAtEnd(): boolean;
                nullsAreSortedAtStart(): boolean;
                nullsAreSortedHigh(): boolean;
                nullsAreSortedLow(): boolean;
                othersDeletesAreVisible(arg0: number): boolean;
                othersInsertsAreVisible(arg0: number): boolean;
                othersUpdatesAreVisible(arg0: number): boolean;
                ownDeletesAreVisible(arg0: number): boolean;
                ownInsertsAreVisible(arg0: number): boolean;
                ownUpdatesAreVisible(arg0: number): boolean;
                storesLowerCaseIdentifiers(): boolean;
                storesLowerCaseQuotedIdentifiers(): boolean;
                storesMixedCaseIdentifiers(): boolean;
                storesMixedCaseQuotedIdentifiers(): boolean;
                storesUpperCaseIdentifiers(): boolean;
                storesUpperCaseQuotedIdentifiers(): boolean;
                supportsANSI92EntryLevelSQL(): boolean;
                supportsANSI92FullSQL(): boolean;
                supportsANSI92IntermediateSQL(): boolean;
                supportsAlterTableWithAddColumn(): boolean;
                supportsAlterTableWithDropColumn(): boolean;
                supportsBatchUpdates(): boolean;
                supportsCatalogsInDataManipulation(): boolean;
                supportsCatalogsInIndexDefinitions(): boolean;
                supportsCatalogsInPrivilegeDefinitions(): boolean;
                supportsCatalogsInProcedureCalls(): boolean;
                supportsCatalogsInTableDefinitions(): boolean;
                supportsColumnAliasing(): boolean;
                supportsConvert(): boolean;
                supportsConvert(arg0: number, arg1: number): boolean;
                supportsCoreSQLGrammar(): boolean;
                supportsCorrelatedSubqueries(): boolean;
                supportsDataDefinitionAndDataManipulationTransactions(): boolean;
                supportsDataManipulationTransactionsOnly(): boolean;
                supportsDifferentTableCorrelationNames(): boolean;
                supportsExpressionsInOrderBy(): boolean;
                supportsExtendedSQLGrammar(): boolean;
                supportsFullOuterJoins(): boolean;
                supportsGetGeneratedKeys(): boolean;
                supportsGroupBy(): boolean;
                supportsGroupByBeyondSelect(): boolean;
                supportsGroupByUnrelated(): boolean;
                supportsIntegrityEnhancementFacility(): boolean;
                supportsLikeEscapeClause(): boolean;
                supportsLimitedOuterJoins(): boolean;
                supportsMinimumSQLGrammar(): boolean;
                supportsMixedCaseIdentifiers(): boolean;
                supportsMixedCaseQuotedIdentifiers(): boolean;
                supportsMultipleOpenResults(): boolean;
                supportsMultipleResultSets(): boolean;
                supportsMultipleTransactions(): boolean;
                supportsNamedParameters(): boolean;
                supportsNonNullableColumns(): boolean;
                supportsOpenCursorsAcrossCommit(): boolean;
                supportsOpenCursorsAcrossRollback(): boolean;
                supportsOpenStatementsAcrossCommit(): boolean;
                supportsOpenStatementsAcrossRollback(): boolean;
                supportsOrderByUnrelated(): boolean;
                supportsOuterJoins(): boolean;
                supportsPositionedDelete(): boolean;
                supportsPositionedUpdate(): boolean;
                supportsRefCursors(): boolean;
                supportsResultSetConcurrency(arg0: number, arg1: number): boolean;
                supportsResultSetHoldability(arg0: number): boolean;
                supportsResultSetType(arg0: number): boolean;
                supportsSavepoints(): boolean;
                supportsSchemasInDataManipulation(): boolean;
                supportsSchemasInIndexDefinitions(): boolean;
                supportsSchemasInPrivilegeDefinitions(): boolean;
                supportsSchemasInProcedureCalls(): boolean;
                supportsSchemasInTableDefinitions(): boolean;
                supportsSelectForUpdate(): boolean;
                supportsStatementPooling(): boolean;
                supportsStoredFunctionsUsingCallSyntax(): boolean;
                supportsStoredProcedures(): boolean;
                supportsSubqueriesInComparisons(): boolean;
                supportsSubqueriesInExists(): boolean;
                supportsSubqueriesInIns(): boolean;
                supportsSubqueriesInQuantifieds(): boolean;
                supportsTableCorrelationNames(): boolean;
                supportsTransactionIsolationLevel(arg0: number): boolean;
                supportsTransactions(): boolean;
                supportsUnion(): boolean;
                supportsUnionAll(): boolean;
                updatesAreDetected(arg0: number): boolean;
                usesLocalFilePerTable(): boolean;
                usesLocalFiles(): boolean;
            }
            type DatabaseMetaData = Wrapper & DatabaseMetaData_S & DatabaseMetaData$;
            interface NClob_S {
            }
            interface NClob$ {
            }
            type NClob = Clob & NClob_S & NClob$;
            interface ParameterMetaData_S {
                readonly parameterModeIn: number;
                readonly parameterModeInOut: number;
                readonly parameterModeOut: number;
                readonly parameterModeUnknown: number;
                readonly parameterNoNulls: number;
                readonly parameterNullable: number;
                readonly parameterNullableUnknown: number;
            }
            interface ParameterMetaData$ {
                getParameterClassName(arg0: number): string;
                getParameterCount(): number;
                getParameterMode(arg0: number): number;
                getParameterType(arg0: number): number;
                getParameterTypeName(arg0: number): string;
                getPrecision(arg0: number): number;
                getScale(arg0: number): number;
                isNullable(arg0: number): number;
                isSigned(arg0: number): boolean;
            }
            type ParameterMetaData = Wrapper & ParameterMetaData_S & ParameterMetaData$;
            interface PreparedStatement_S {
            }
            interface PreparedStatement$ {
                addBatch(): void;
                clearParameters(): void;
                execute(): boolean;
                executeLargeUpdate(): long;
                executeQuery(): ResultSet;
                executeUpdate(): number;
                getMetaData(): ResultSetMetaData;
                getParameterMetaData(): ParameterMetaData;
                setArray(arg0: number, arg1: Array): void;
                setAsciiStream(arg0: number, arg1: java.io.InputStream): void;
                setAsciiStream(arg0: number, arg1: java.io.InputStream, arg2: long): void;
                setAsciiStream(arg0: number, arg1: java.io.InputStream, arg2: number): void;
                setBigDecimal(arg0: number, arg1: java.math.BigDecimal): void;
                setBinaryStream(arg0: number, arg1: java.io.InputStream): void;
                setBinaryStream(arg0: number, arg1: java.io.InputStream, arg2: long): void;
                setBinaryStream(arg0: number, arg1: java.io.InputStream, arg2: number): void;
                setBlob(arg0: number, arg1: Blob): void;
                setBlob(arg0: number, arg1: java.io.InputStream): void;
                setBlob(arg0: number, arg1: java.io.InputStream, arg2: long): void;
                setBoolean(arg0: number, arg1: boolean): void;
                setByte(arg0: number, arg1: number): void;
                setBytes(arg0: number, arg1: number[]): void;
                setCharacterStream(arg0: number, arg1: java.io.Reader): void;
                setCharacterStream(arg0: number, arg1: java.io.Reader, arg2: long): void;
                setCharacterStream(arg0: number, arg1: java.io.Reader, arg2: number): void;
                setClob(arg0: number, arg1: Clob): void;
                setClob(arg0: number, arg1: java.io.Reader): void;
                setClob(arg0: number, arg1: java.io.Reader, arg2: long): void;
                setDate(arg0: number, arg1: Date): void;
                setDate(arg0: number, arg1: Date, arg2: java.util.Calendar): void;
                setDouble(arg0: number, arg1: number): void;
                setFloat(arg0: number, arg1: number): void;
                setInt(arg0: number, arg1: number): void;
                setLong(arg0: number, arg1: long): void;
                setNCharacterStream(arg0: number, arg1: java.io.Reader): void;
                setNCharacterStream(arg0: number, arg1: java.io.Reader, arg2: long): void;
                setNClob(arg0: number, arg1: NClob): void;
                setNClob(arg0: number, arg1: java.io.Reader): void;
                setNClob(arg0: number, arg1: java.io.Reader, arg2: long): void;
                setNString(arg0: number, arg1: string): void;
                setNull(arg0: number, arg1: number): void;
                setNull(arg0: number, arg1: number, arg2: string): void;
                setObject(arg0: number, arg1: any): void;
                setObject(arg0: number, arg1: any, arg2: number): void;
                setObject(arg0: number, arg1: any, arg2: SQLType): void;
                setObject(arg0: number, arg1: any, arg2: number, arg3: number): void;
                setObject(arg0: number, arg1: any, arg2: SQLType, arg3: number): void;
                setRef(arg0: number, arg1: Ref): void;
                setRowId(arg0: number, arg1: RowId): void;
                setSQLXML(arg0: number, arg1: SQLXML): void;
                setShort(arg0: number, arg1: number): void;
                setString(arg0: number, arg1: string): void;
                setTime(arg0: number, arg1: Date): void;
                setTime(arg0: number, arg1: Date, arg2: java.util.Calendar): void;
                setTimestamp(arg0: number, arg1: Date): void;
                setTimestamp(arg0: number, arg1: Date, arg2: java.util.Calendar): void;
                setURL(arg0: number, arg1: java.net.URL): void;
            }
            type PreparedStatement = Statement & PreparedStatement_S & PreparedStatement$;
            interface Ref_S {
            }
            interface Ref$ {
                getBaseTypeName(): string;
                getObject(): any;
                getObject(arg0: java.util.Map): any;
                setObject(arg0: any): void;
            }
            type Ref = Ref_S & Ref$;
            interface ResultSet_S {
                readonly CLOSE_CURSORS_AT_COMMIT: number;
                readonly CONCUR_READ_ONLY: number;
                readonly CONCUR_UPDATABLE: number;
                readonly FETCH_FORWARD: number;
                readonly FETCH_REVERSE: number;
                readonly FETCH_UNKNOWN: number;
                readonly HOLD_CURSORS_OVER_COMMIT: number;
                readonly TYPE_FORWARD_ONLY: number;
                readonly TYPE_SCROLL_INSENSITIVE: number;
                readonly TYPE_SCROLL_SENSITIVE: number;
            }
            interface ResultSet$ {
                absolute(arg0: number): boolean;
                afterLast(): void;
                beforeFirst(): void;
                cancelRowUpdates(): void;
                clearWarnings(): void;
                deleteRow(): void;
                findColumn(arg0: string): number;
                first(): boolean;
                getArray(arg0: number): Array;
                getArray(arg0: string): Array;
                getAsciiStream(arg0: number): java.io.InputStream;
                getAsciiStream(arg0: string): java.io.InputStream;
                getBigDecimal(arg0: number): java.math.BigDecimal;
                getBigDecimal(arg0: string): java.math.BigDecimal;
                getBinaryStream(arg0: number): java.io.InputStream;
                getBinaryStream(arg0: string): java.io.InputStream;
                getBlob(arg0: number): Blob;
                getBlob(arg0: string): Blob;
                getBoolean(arg0: number): boolean;
                getBoolean(arg0: string): boolean;
                getByte(arg0: number): number;
                getByte(arg0: string): number;
                getBytes(arg0: number): number[];
                getBytes(arg0: string): number[];
                getCharacterStream(arg0: number): java.io.Reader;
                getCharacterStream(arg0: string): java.io.Reader;
                getClob(arg0: number): Clob;
                getClob(arg0: string): Clob;
                getConcurrency(): number;
                getCursorName(): string;
                getDate(arg0: number): Date;
                getDate(arg0: string): Date;
                getDate(arg0: number, arg1: java.util.Calendar): Date;
                getDate(arg0: string, arg1: java.util.Calendar): Date;
                getDouble(arg0: number): number;
                getDouble(arg0: string): number;
                getFetchDirection(): number;
                getFetchSize(): number;
                getFloat(arg0: number): number;
                getFloat(arg0: string): number;
                getHoldability(): number;
                getInt(arg0: number): number;
                getInt(arg0: string): number;
                getLong(arg0: number): long;
                getLong(arg0: string): long;
                getMetaData(): ResultSetMetaData;
                getNCharacterStream(arg0: number): java.io.Reader;
                getNCharacterStream(arg0: string): java.io.Reader;
                getNClob(arg0: number): NClob;
                getNClob(arg0: string): NClob;
                getNString(arg0: number): string;
                getNString(arg0: string): string;
                getObject(arg0: number): any;
                getObject(arg0: string): any;
                getObject(arg0: number, arg1: java.util.Map): any;
                getObject(arg0: number, arg1: java.lang.Class): any;
                getObject(arg0: string, arg1: java.util.Map): any;
                getObject(arg0: string, arg1: java.lang.Class): any;
                getRef(arg0: number): Ref;
                getRef(arg0: string): Ref;
                getRow(): number;
                getRowId(arg0: number): RowId;
                getRowId(arg0: string): RowId;
                getSQLXML(arg0: number): SQLXML;
                getSQLXML(arg0: string): SQLXML;
                getShort(arg0: number): number;
                getShort(arg0: string): number;
                getStatement(): Statement;
                getString(arg0: number): string;
                getString(arg0: string): string;
                getTime(arg0: number): Date;
                getTime(arg0: string): Date;
                getTime(arg0: number, arg1: java.util.Calendar): Date;
                getTime(arg0: string, arg1: java.util.Calendar): Date;
                getTimestamp(arg0: number): Date;
                getTimestamp(arg0: string): Date;
                getTimestamp(arg0: number, arg1: java.util.Calendar): Date;
                getTimestamp(arg0: string, arg1: java.util.Calendar): Date;
                getType(): number;
                getURL(arg0: number): java.net.URL;
                getURL(arg0: string): java.net.URL;
                getWarnings(): SQLWarning;
                insertRow(): void;
                isAfterLast(): boolean;
                isBeforeFirst(): boolean;
                isClosed(): boolean;
                isFirst(): boolean;
                isLast(): boolean;
                last(): boolean;
                moveToCurrentRow(): void;
                moveToInsertRow(): void;
                next(): boolean;
                previous(): boolean;
                refreshRow(): void;
                relative(arg0: number): boolean;
                rowDeleted(): boolean;
                rowInserted(): boolean;
                rowUpdated(): boolean;
                setFetchDirection(arg0: number): void;
                setFetchSize(arg0: number): void;
                updateArray(arg0: number, arg1: Array): void;
                updateArray(arg0: string, arg1: Array): void;
                updateAsciiStream(arg0: number, arg1: java.io.InputStream): void;
                updateAsciiStream(arg0: string, arg1: java.io.InputStream): void;
                updateAsciiStream(arg0: number, arg1: java.io.InputStream, arg2: number): void;
                updateAsciiStream(arg0: number, arg1: java.io.InputStream, arg2: long): void;
                updateAsciiStream(arg0: string, arg1: java.io.InputStream, arg2: number): void;
                updateAsciiStream(arg0: string, arg1: java.io.InputStream, arg2: long): void;
                updateBigDecimal(arg0: number, arg1: java.math.BigDecimal): void;
                updateBigDecimal(arg0: string, arg1: java.math.BigDecimal): void;
                updateBinaryStream(arg0: number, arg1: java.io.InputStream): void;
                updateBinaryStream(arg0: string, arg1: java.io.InputStream): void;
                updateBinaryStream(arg0: number, arg1: java.io.InputStream, arg2: number): void;
                updateBinaryStream(arg0: number, arg1: java.io.InputStream, arg2: long): void;
                updateBinaryStream(arg0: string, arg1: java.io.InputStream, arg2: number): void;
                updateBinaryStream(arg0: string, arg1: java.io.InputStream, arg2: long): void;
                updateBlob(arg0: number, arg1: java.io.InputStream): void;
                updateBlob(arg0: number, arg1: Blob): void;
                updateBlob(arg0: string, arg1: java.io.InputStream): void;
                updateBlob(arg0: string, arg1: Blob): void;
                updateBlob(arg0: number, arg1: java.io.InputStream, arg2: long): void;
                updateBlob(arg0: string, arg1: java.io.InputStream, arg2: long): void;
                updateBoolean(arg0: number, arg1: boolean): void;
                updateBoolean(arg0: string, arg1: boolean): void;
                updateByte(arg0: number, arg1: number): void;
                updateByte(arg0: string, arg1: number): void;
                updateBytes(arg0: number, arg1: number[]): void;
                updateBytes(arg0: string, arg1: number[]): void;
                updateCharacterStream(arg0: number, arg1: java.io.Reader): void;
                updateCharacterStream(arg0: string, arg1: java.io.Reader): void;
                updateCharacterStream(arg0: number, arg1: java.io.Reader, arg2: number): void;
                updateCharacterStream(arg0: number, arg1: java.io.Reader, arg2: long): void;
                updateCharacterStream(arg0: string, arg1: java.io.Reader, arg2: long): void;
                updateCharacterStream(arg0: string, arg1: java.io.Reader, arg2: number): void;
                updateClob(arg0: number, arg1: java.io.Reader): void;
                updateClob(arg0: number, arg1: Clob): void;
                updateClob(arg0: string, arg1: Clob): void;
                updateClob(arg0: string, arg1: java.io.Reader): void;
                updateClob(arg0: number, arg1: java.io.Reader, arg2: long): void;
                updateClob(arg0: string, arg1: java.io.Reader, arg2: long): void;
                updateDate(arg0: number, arg1: Date): void;
                updateDate(arg0: string, arg1: Date): void;
                updateDouble(arg0: number, arg1: number): void;
                updateDouble(arg0: string, arg1: number): void;
                updateFloat(arg0: number, arg1: number): void;
                updateFloat(arg0: string, arg1: number): void;
                updateInt(arg0: number, arg1: number): void;
                updateInt(arg0: string, arg1: number): void;
                updateLong(arg0: number, arg1: long): void;
                updateLong(arg0: string, arg1: long): void;
                updateNCharacterStream(arg0: number, arg1: java.io.Reader): void;
                updateNCharacterStream(arg0: string, arg1: java.io.Reader): void;
                updateNCharacterStream(arg0: number, arg1: java.io.Reader, arg2: long): void;
                updateNCharacterStream(arg0: string, arg1: java.io.Reader, arg2: long): void;
                updateNClob(arg0: number, arg1: NClob): void;
                updateNClob(arg0: number, arg1: java.io.Reader): void;
                updateNClob(arg0: string, arg1: java.io.Reader): void;
                updateNClob(arg0: string, arg1: NClob): void;
                updateNClob(arg0: number, arg1: java.io.Reader, arg2: long): void;
                updateNClob(arg0: string, arg1: java.io.Reader, arg2: long): void;
                updateNString(arg0: number, arg1: string): void;
                updateNString(arg0: string, arg1: string): void;
                updateNull(arg0: number): void;
                updateNull(arg0: string): void;
                updateObject(arg0: number, arg1: any): void;
                updateObject(arg0: string, arg1: any): void;
                updateObject(arg0: number, arg1: any, arg2: number): void;
                updateObject(arg0: number, arg1: any, arg2: SQLType): void;
                updateObject(arg0: string, arg1: any, arg2: number): void;
                updateObject(arg0: string, arg1: any, arg2: SQLType): void;
                updateObject(arg0: number, arg1: any, arg2: SQLType, arg3: number): void;
                updateObject(arg0: string, arg1: any, arg2: SQLType, arg3: number): void;
                updateRef(arg0: number, arg1: Ref): void;
                updateRef(arg0: string, arg1: Ref): void;
                updateRow(): void;
                updateRowId(arg0: number, arg1: RowId): void;
                updateRowId(arg0: string, arg1: RowId): void;
                updateSQLXML(arg0: number, arg1: SQLXML): void;
                updateSQLXML(arg0: string, arg1: SQLXML): void;
                updateShort(arg0: number, arg1: number): void;
                updateShort(arg0: string, arg1: number): void;
                updateString(arg0: number, arg1: string): void;
                updateString(arg0: string, arg1: string): void;
                updateTime(arg0: number, arg1: Date): void;
                updateTime(arg0: string, arg1: Date): void;
                updateTimestamp(arg0: number, arg1: Date): void;
                updateTimestamp(arg0: string, arg1: Date): void;
                wasNull(): boolean;
            }
            type ResultSet = Wrapper & java.lang.AutoCloseable & ResultSet_S & ResultSet$;
            interface ResultSetMetaData_S {
                readonly columnNoNulls: number;
                readonly columnNullable: number;
                readonly columnNullableUnknown: number;
            }
            interface ResultSetMetaData$ {
                getCatalogName(arg0: number): string;
                getColumnClassName(arg0: number): string;
                getColumnCount(): number;
                getColumnDisplaySize(arg0: number): number;
                getColumnLabel(arg0: number): string;
                getColumnName(arg0: number): string;
                getColumnType(arg0: number): number;
                getColumnTypeName(arg0: number): string;
                getPrecision(arg0: number): number;
                getScale(arg0: number): number;
                getSchemaName(arg0: number): string;
                getTableName(arg0: number): string;
                isAutoIncrement(arg0: number): boolean;
                isCaseSensitive(arg0: number): boolean;
                isCurrency(arg0: number): boolean;
                isDefinitelyWritable(arg0: number): boolean;
                isNullable(arg0: number): number;
                isReadOnly(arg0: number): boolean;
                isSearchable(arg0: number): boolean;
                isSigned(arg0: number): boolean;
                isWritable(arg0: number): boolean;
            }
            type ResultSetMetaData = Wrapper & ResultSetMetaData_S & ResultSetMetaData$;
            interface RowId_S {
            }
            interface RowId$ {
                equals(arg0: any): boolean;
                getBytes(): number[];
                hashCode(): number;
                toString(): string;
            }
            type RowId = RowId_S & RowId$;
            enum RowIdLifetime {
                ROWID_UNSUPPORTED,
                ROWID_VALID_OTHER,
                ROWID_VALID_SESSION,
                ROWID_VALID_TRANSACTION,
                ROWID_VALID_FOREVER
            }
            interface SQLException_S {
            }
            type SQLException_ST = java.lang.Exception_S & java.lang.Iterable_S & SQLException_S;
            interface SQLException_C extends SQLException_ST {
                new (): SQLException;
                new (arg0: java.lang.Throwable): SQLException;
                new (arg0: string): SQLException;
                new (arg0: string, arg1: java.lang.Throwable): SQLException;
                new (arg0: string, arg1: string): SQLException;
                new (arg0: string, arg1: string, arg2: java.lang.Throwable): SQLException;
                new (arg0: string, arg1: string, arg2: number): SQLException;
                new (arg0: string, arg1: string, arg2: number, arg3: java.lang.Throwable): SQLException;
            }
            interface SQLException$ {
                getErrorCode(): number;
                getNextException(): this;
                getSQLState(): string;
                setNextException(arg0: SQLException): void;
            }
            type SQLException = java.lang.Exception & java.lang.Iterable & SQLException_S & SQLException$;
            interface SQLType_S {
            }
            interface SQLType$ {
                getName(): string;
                getVendor(): string;
                getVendorTypeNumber(): number;
            }
            type SQLType = SQLType_S & SQLType$;
            interface SQLWarning_S {
            }
            type SQLWarning_ST = SQLException_S & SQLWarning_S;
            interface SQLWarning_C extends SQLWarning_ST {
                new (): SQLWarning;
                new (arg0: java.lang.Throwable): SQLWarning;
                new (arg0: string): SQLWarning;
                new (arg0: string, arg1: java.lang.Throwable): SQLWarning;
                new (arg0: string, arg1: string): SQLWarning;
                new (arg0: string, arg1: string, arg2: java.lang.Throwable): SQLWarning;
                new (arg0: string, arg1: string, arg2: number): SQLWarning;
                new (arg0: string, arg1: string, arg2: number, arg3: java.lang.Throwable): SQLWarning;
            }
            interface SQLWarning$ {
                getNextWarning(): this;
                setNextWarning(arg0: SQLWarning): void;
            }
            type SQLWarning = SQLException & SQLWarning_S & SQLWarning$;
            interface SQLXML_S {
            }
            interface SQLXML$ {
                free(): void;
                getBinaryStream(): java.io.InputStream;
                getCharacterStream(): java.io.Reader;
                getSource(arg0: java.lang.Class): javax.xml.transform.Source;
                getString(): string;
                setBinaryStream(): java.io.OutputStream;
                setCharacterStream(): java.io.Writer;
                setResult(arg0: java.lang.Class): javax.xml.transform.Result;
                setString(arg0: string): void;
            }
            type SQLXML = SQLXML_S & SQLXML$;
            interface Savepoint_S {
            }
            interface Savepoint$ {
                getSavepointId(): number;
                getSavepointName(): string;
            }
            type Savepoint = Savepoint_S & Savepoint$;
            interface Statement_S {
                readonly CLOSE_ALL_RESULTS: number;
                readonly CLOSE_CURRENT_RESULT: number;
                readonly EXECUTE_FAILED: number;
                readonly KEEP_CURRENT_RESULT: number;
                readonly NO_GENERATED_KEYS: number;
                readonly RETURN_GENERATED_KEYS: number;
                readonly SUCCESS_NO_INFO: number;
            }
            interface Statement$ {
                addBatch(arg0: string): void;
                cancel(): void;
                clearBatch(): void;
                clearWarnings(): void;
                closeOnCompletion(): void;
                execute(arg0: string): boolean;
                execute(arg0: string, arg1: number[]): boolean;
                execute(arg0: string, arg1: string[]): boolean;
                execute(arg0: string, arg1: number): boolean;
                executeBatch(): number[];
                executeLargeBatch(): long[];
                executeLargeUpdate(arg0: string): long;
                executeLargeUpdate(arg0: string, arg1: string[]): long;
                executeLargeUpdate(arg0: string, arg1: number[]): long;
                executeLargeUpdate(arg0: string, arg1: number): long;
                executeQuery(arg0: string): ResultSet;
                executeUpdate(arg0: string): number;
                executeUpdate(arg0: string, arg1: number[]): number;
                executeUpdate(arg0: string, arg1: string[]): number;
                executeUpdate(arg0: string, arg1: number): number;
                getConnection(): Connection;
                getFetchDirection(): number;
                getFetchSize(): number;
                getGeneratedKeys(): ResultSet;
                getLargeMaxRows(): long;
                getLargeUpdateCount(): long;
                getMaxFieldSize(): number;
                getMaxRows(): number;
                getMoreResults(): boolean;
                getMoreResults(arg0: number): boolean;
                getQueryTimeout(): number;
                getResultSet(): ResultSet;
                getResultSetConcurrency(): number;
                getResultSetHoldability(): number;
                getResultSetType(): number;
                getUpdateCount(): number;
                getWarnings(): SQLWarning;
                isCloseOnCompletion(): boolean;
                isClosed(): boolean;
                isPoolable(): boolean;
                setCursorName(arg0: string): void;
                setEscapeProcessing(arg0: boolean): void;
                setFetchDirection(arg0: number): void;
                setFetchSize(arg0: number): void;
                setLargeMaxRows(arg0: long): void;
                setMaxFieldSize(arg0: number): void;
                setMaxRows(arg0: number): void;
                setPoolable(arg0: boolean): void;
                setQueryTimeout(arg0: number): void;
            }
            type Statement = Wrapper & java.lang.AutoCloseable & Statement_S & Statement$;
            interface Struct_S {
            }
            interface Struct$ {
                getAttributes(): any[];
                getAttributes(arg0: java.util.Map): any[];
                getSQLTypeName(): string;
            }
            type Struct = Struct_S & Struct$;
            interface Wrapper_S {
            }
            interface Wrapper$ {
                isWrapperFor(arg0: java.lang.Class): boolean;
                unwrap(arg0: java.lang.Class): any;
            }
            type Wrapper = Wrapper_S & Wrapper$;
        }
        namespace java.text {
            interface AttributedCharacterIterator_S {
            }
            interface AttributedCharacterIterator$ {
                getAllAttributeKeys(): java.util.Set;
                getAttribute(arg0: AttributedCharacterIterator$Attribute): any;
                getAttributes(): java.util.Map;
                getRunLimit(): number;
                getRunLimit(arg0: java.util.Set): number;
                getRunLimit(arg0: AttributedCharacterIterator$Attribute): number;
                getRunStart(): number;
                getRunStart(arg0: java.util.Set): number;
                getRunStart(arg0: AttributedCharacterIterator$Attribute): number;
            }
            type AttributedCharacterIterator = CharacterIterator & AttributedCharacterIterator_S & AttributedCharacterIterator$;
            interface AttributedCharacterIterator$Attribute_S {
                readonly INPUT_METHOD_SEGMENT: AttributedCharacterIterator$Attribute;
                readonly LANGUAGE: AttributedCharacterIterator$Attribute;
                readonly READING: AttributedCharacterIterator$Attribute;
            }
            type AttributedCharacterIterator$Attribute_ST = java.io.Serializable_S & AttributedCharacterIterator$Attribute_S;
            interface AttributedCharacterIterator$Attribute_C extends AttributedCharacterIterator$Attribute_ST {
                new (): AttributedCharacterIterator$Attribute;
            }
            interface AttributedCharacterIterator$Attribute$ {
            }
            type AttributedCharacterIterator$Attribute = java.io.Serializable & AttributedCharacterIterator$Attribute_S & AttributedCharacterIterator$Attribute$;
            interface CharacterIterator_S {
                readonly DONE: string;
            }
            interface CharacterIterator$ {
                clone(): any;
                current(): string;
                first(): string;
                getBeginIndex(): number;
                getEndIndex(): number;
                getIndex(): number;
                last(): string;
                next(): string;
                previous(): string;
                setIndex(arg0: number): string;
            }
            type CharacterIterator = java.lang.Cloneable & CharacterIterator_S & CharacterIterator$;
            interface DateFormat_S {
                readonly AM_PM_FIELD: number;
                readonly DATE_FIELD: number;
                readonly DAY_OF_WEEK_FIELD: number;
                readonly DAY_OF_WEEK_IN_MONTH_FIELD: number;
                readonly DAY_OF_YEAR_FIELD: number;
                readonly DEFAULT: number;
                readonly ERA_FIELD: number;
                readonly FULL: number;
                readonly HOUR0_FIELD: number;
                readonly HOUR1_FIELD: number;
                readonly HOUR_OF_DAY0_FIELD: number;
                readonly HOUR_OF_DAY1_FIELD: number;
                readonly LONG: number;
                readonly MEDIUM: number;
                readonly MILLISECOND_FIELD: number;
                readonly MINUTE_FIELD: number;
                readonly MONTH_FIELD: number;
                readonly SECOND_FIELD: number;
                readonly SHORT: number;
                readonly TIMEZONE_FIELD: number;
                readonly WEEK_OF_MONTH_FIELD: number;
                readonly WEEK_OF_YEAR_FIELD: number;
                readonly YEAR_FIELD: number;
                getAvailableLocales(): java.util.Locale[];
                getDateInstance(): DateFormat;
                getDateInstance(arg0: number): DateFormat;
                getDateInstance(arg0: number, arg1: java.util.Locale): DateFormat;
                getDateTimeInstance(): DateFormat;
                getDateTimeInstance(arg0: number, arg1: number): DateFormat;
                getDateTimeInstance(arg0: number, arg1: number, arg2: java.util.Locale): DateFormat;
                getInstance(): DateFormat;
                getTimeInstance(): DateFormat;
                getTimeInstance(arg0: number): DateFormat;
                getTimeInstance(arg0: number, arg1: java.util.Locale): DateFormat;
            }
            type DateFormat_ST = Format_S & DateFormat_S;
            interface DateFormat_C extends DateFormat_ST {
            }
            interface DateFormat$ {
                format(arg0: Date): string;
                format(arg0: Date, arg1: java.lang.StringBuffer, arg2: FieldPosition): java.lang.StringBuffer;
                getCalendar(): java.util.Calendar;
                getNumberFormat(): NumberFormat;
                getTimeZone(): java.util.TimeZone;
                isLenient(): boolean;
                parse(arg0: string): Date;
                parse(arg0: string, arg1: ParsePosition): Date;
                setCalendar(arg0: java.util.Calendar): void;
                setLenient(arg0: boolean): void;
                setNumberFormat(arg0: NumberFormat): void;
                setTimeZone(arg0: java.util.TimeZone): void;
            }
            type DateFormat = Format & DateFormat_S & DateFormat$;
            interface DateFormatSymbols_S {
                getAvailableLocales(): java.util.Locale[];
                getInstance(): DateFormatSymbols;
                getInstance(arg0: java.util.Locale): DateFormatSymbols;
            }
            type DateFormatSymbols_ST = java.io.Serializable_S & java.lang.Cloneable_S & DateFormatSymbols_S;
            interface DateFormatSymbols_C extends DateFormatSymbols_ST {
                new (): DateFormatSymbols;
                new (arg0: java.util.Locale): DateFormatSymbols;
            }
            interface DateFormatSymbols$ {
                clone(): any;
                getAmPmStrings(): string[];
                getEras(): string[];
                getLocalPatternChars(): string;
                getMonths(): string[];
                getShortMonths(): string[];
                getShortWeekdays(): string[];
                getWeekdays(): string[];
                getZoneStrings(): string[][];
                setAmPmStrings(arg0: string[]): void;
                setEras(arg0: string[]): void;
                setLocalPatternChars(arg0: string): void;
                setMonths(arg0: string[]): void;
                setShortMonths(arg0: string[]): void;
                setShortWeekdays(arg0: string[]): void;
                setWeekdays(arg0: string[]): void;
                setZoneStrings(arg0: string[][]): void;
            }
            type DateFormatSymbols = java.io.Serializable & java.lang.Cloneable & DateFormatSymbols_S & DateFormatSymbols$;
            interface FieldPosition_S {
            }
            interface FieldPosition_C extends FieldPosition_S {
                new (arg0: Format$Field): FieldPosition;
                new (arg0: number): FieldPosition;
                new (arg0: Format$Field, arg1: number): FieldPosition;
            }
            interface FieldPosition$ {
                getBeginIndex(): number;
                getEndIndex(): number;
                getField(): number;
                getFieldAttribute(): Format$Field;
                setBeginIndex(arg0: number): void;
                setEndIndex(arg0: number): void;
            }
            type FieldPosition = FieldPosition_S & FieldPosition$;
            interface Format_S {
            }
            type Format_ST = java.io.Serializable_S & java.lang.Cloneable_S & Format_S;
            interface Format_C extends Format_ST {
            }
            interface Format$ {
                clone(): any;
                format(arg0: any): string;
                format(arg0: any, arg1: java.lang.StringBuffer, arg2: FieldPosition): java.lang.StringBuffer;
                formatToCharacterIterator(arg0: any): AttributedCharacterIterator;
                parseObject(arg0: string): any;
                parseObject(arg0: string, arg1: ParsePosition): any;
            }
            type Format = java.io.Serializable & java.lang.Cloneable & Format_S & Format$;
            interface Format$Field_S {
            }
            type Format$Field_ST = AttributedCharacterIterator$Attribute_S & Format$Field_S;
            interface Format$Field_C extends Format$Field_ST {
                new (): Format$Field;
            }
            interface Format$Field$ {
            }
            type Format$Field = AttributedCharacterIterator$Attribute & Format$Field_S & Format$Field$;
            interface NumberFormat_S {
                readonly FRACTION_FIELD: number;
                readonly INTEGER_FIELD: number;
                getAvailableLocales(): java.util.Locale[];
                getCurrencyInstance(): NumberFormat;
                getCurrencyInstance(arg0: java.util.Locale): NumberFormat;
                getInstance(): NumberFormat;
                getInstance(arg0: java.util.Locale): NumberFormat;
                getIntegerInstance(): NumberFormat;
                getIntegerInstance(arg0: java.util.Locale): NumberFormat;
                getNumberInstance(): NumberFormat;
                getNumberInstance(arg0: java.util.Locale): NumberFormat;
                getPercentInstance(): NumberFormat;
                getPercentInstance(arg0: java.util.Locale): NumberFormat;
            }
            type NumberFormat_ST = Format_S & NumberFormat_S;
            interface NumberFormat_C extends NumberFormat_ST {
            }
            interface NumberFormat$ {
                format(arg0: long): string;
                format(arg0: number): string;
                format(arg0: long, arg1: java.lang.StringBuffer, arg2: FieldPosition): java.lang.StringBuffer;
                format(arg0: number, arg1: java.lang.StringBuffer, arg2: FieldPosition): java.lang.StringBuffer;
                getCurrency(): java.util.Currency;
                getMaximumFractionDigits(): number;
                getMaximumIntegerDigits(): number;
                getMinimumFractionDigits(): number;
                getMinimumIntegerDigits(): number;
                getRoundingMode(): java.math.RoundingMode;
                isGroupingUsed(): boolean;
                isParseIntegerOnly(): boolean;
                parse(arg0: string): number;
                parse(arg0: string, arg1: ParsePosition): number;
                setCurrency(arg0: java.util.Currency): void;
                setGroupingUsed(arg0: boolean): void;
                setMaximumFractionDigits(arg0: number): void;
                setMaximumIntegerDigits(arg0: number): void;
                setMinimumFractionDigits(arg0: number): void;
                setMinimumIntegerDigits(arg0: number): void;
                setParseIntegerOnly(arg0: boolean): void;
                setRoundingMode(arg0: java.math.RoundingMode): void;
            }
            type NumberFormat = Format & NumberFormat_S & NumberFormat$;
            interface ParsePosition_S {
            }
            interface ParsePosition_C extends ParsePosition_S {
                new (arg0: number): ParsePosition;
            }
            interface ParsePosition$ {
                getErrorIndex(): number;
                getIndex(): number;
                setErrorIndex(arg0: number): void;
                setIndex(arg0: number): void;
            }
            type ParsePosition = ParsePosition_S & ParsePosition$;
            interface SimpleDateFormat_S {
            }
            type SimpleDateFormat_ST = DateFormat_S & SimpleDateFormat_S;
            interface SimpleDateFormat_C extends SimpleDateFormat_ST {
                new (): SimpleDateFormat;
                new (arg0: string): SimpleDateFormat;
                new (arg0: string, arg1: DateFormatSymbols): SimpleDateFormat;
                new (arg0: string, arg1: java.util.Locale): SimpleDateFormat;
            }
            interface SimpleDateFormat$ {
                applyLocalizedPattern(arg0: string): void;
                applyPattern(arg0: string): void;
                get2DigitYearStart(): Date;
                getDateFormatSymbols(): DateFormatSymbols;
                set2DigitYearStart(arg0: Date): void;
                setDateFormatSymbols(arg0: DateFormatSymbols): void;
                toLocalizedPattern(): string;
                toPattern(): string;
            }
            type SimpleDateFormat = DateFormat & SimpleDateFormat_S & SimpleDateFormat$;
        }
        namespace java.time {
            interface Clock_S {
                fixed(arg0: Instant, arg1: ZoneId): Clock;
                offset(arg0: Clock, arg1: Duration): Clock;
                system(arg0: ZoneId): Clock;
                systemDefaultZone(): Clock;
                systemUTC(): Clock;
                tick(arg0: Clock, arg1: Duration): Clock;
                tickMinutes(arg0: ZoneId): Clock;
                tickSeconds(arg0: ZoneId): Clock;
            }
            interface Clock_C extends Clock_S {
            }
            interface Clock$ {
                getZone(): ZoneId;
                instant(): Instant;
                millis(): long;
                withZone(arg0: ZoneId): this;
            }
            type Clock = Clock_S & Clock$;
            enum DayOfWeek {
                MONDAY,
                TUESDAY,
                WEDNESDAY,
                THURSDAY,
                FRIDAY,
                SATURDAY,
                SUNDAY
            }
            interface Duration_S {
                readonly ZERO: Duration;
                between(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.Temporal): Duration;
                from(arg0: java.time.temporal.TemporalAmount): Duration;
                of(arg0: long, arg1: java.time.temporal.TemporalUnit): Duration;
                ofDays(arg0: long): Duration;
                ofHours(arg0: long): Duration;
                ofMillis(arg0: long): Duration;
                ofMinutes(arg0: long): Duration;
                ofNanos(arg0: long): Duration;
                ofSeconds(arg0: long): Duration;
                ofSeconds(arg0: long, arg1: long): Duration;
                parse(arg0: java.lang.CharSequence): Duration;
            }
            type Duration_ST = java.time.temporal.TemporalAmount_S & java.lang.Comparable_S & java.io.Serializable_S & Duration_S;
            interface Duration_C extends Duration_ST {
                new (): Duration;
            }
            interface Duration$ {
                abs(): this;
                compareTo(arg0: Duration): number;
                dividedBy(arg0: long): this;
                getNano(): number;
                getSeconds(): long;
                isNegative(): boolean;
                isZero(): boolean;
                minus(arg0: Duration): this;
                minus(arg0: long, arg1: java.time.temporal.TemporalUnit): this;
                minusDays(arg0: long): this;
                minusHours(arg0: long): this;
                minusMillis(arg0: long): this;
                minusMinutes(arg0: long): this;
                minusNanos(arg0: long): this;
                minusSeconds(arg0: long): this;
                multipliedBy(arg0: long): this;
                negated(): this;
                plus(arg0: Duration): this;
                plus(arg0: long, arg1: java.time.temporal.TemporalUnit): this;
                plusDays(arg0: long): this;
                plusHours(arg0: long): this;
                plusMillis(arg0: long): this;
                plusMinutes(arg0: long): this;
                plusNanos(arg0: long): this;
                plusSeconds(arg0: long): this;
                toDays(): long;
                toHours(): long;
                toMillis(): long;
                toMinutes(): long;
                toNanos(): long;
                withNanos(arg0: number): this;
                withSeconds(arg0: long): this;
            }
            type Duration = java.time.temporal.TemporalAmount & java.lang.Comparable & java.io.Serializable & Duration_S & Duration$;
            interface Instant_S {
                readonly EPOCH: Instant;
                readonly MAX: Instant;
                readonly MIN: Instant;
                from(arg0: java.time.temporal.TemporalAccessor): Instant;
                now(): Instant;
                now(arg0: Clock): Instant;
                ofEpochMilli(arg0: long): Instant;
                ofEpochSecond(arg0: long): Instant;
                ofEpochSecond(arg0: long, arg1: long): Instant;
                parse(arg0: java.lang.CharSequence): Instant;
            }
            type Instant_ST = java.time.temporal.Temporal_S & java.lang.Comparable_S & java.io.Serializable_S & java.time.temporal.TemporalAdjuster_S & Instant_S;
            interface Instant_C extends Instant_ST {
                new (): Instant;
            }
            interface Instant$ {
                atOffset(arg0: ZoneOffset): OffsetDateTime;
                atZone(arg0: ZoneId): ZonedDateTime;
                compareTo(arg0: Instant): number;
                getEpochSecond(): long;
                getNano(): number;
                isAfter(arg0: Instant): boolean;
                isBefore(arg0: Instant): boolean;
                minusMillis(arg0: long): this;
                minusNanos(arg0: long): this;
                minusSeconds(arg0: long): this;
                plusMillis(arg0: long): this;
                plusNanos(arg0: long): this;
                plusSeconds(arg0: long): this;
                toEpochMilli(): long;
                truncatedTo(arg0: java.time.temporal.TemporalUnit): this;
            }
            type Instant = java.time.temporal.Temporal & java.time.temporal.TemporalAdjuster & java.lang.Comparable & java.io.Serializable & Instant_S & Instant$;
            interface LocalDate_S {
                readonly MAX: LocalDate;
                readonly MIN: LocalDate;
                now(): LocalDate;
                now(arg0: ZoneId): LocalDate;
                now(arg0: Clock): LocalDate;
                of(arg0: number, arg1: number, arg2: number): LocalDate;
                of(arg0: number, arg1: Month, arg2: number): LocalDate;
                ofEpochDay(arg0: long): LocalDate;
                ofYearDay(arg0: number, arg1: number): LocalDate;
                parse(arg0: java.lang.CharSequence): LocalDate;
                parse(arg0: java.lang.CharSequence, arg1: java.time.format.DateTimeFormatter): LocalDate;
            }
            type LocalDate_ST = java.time.chrono.ChronoLocalDate_S & java.time.temporal.Temporal_S & java.io.Serializable_S & java.time.temporal.TemporalAdjuster_S & LocalDate_S;
            interface LocalDate_C extends LocalDate_ST {
                new (): LocalDate;
            }
            interface LocalDate$ {
                atStartOfDay(): LocalDateTime;
                atStartOfDay(arg0: ZoneId): ZonedDateTime;
                atTime(arg0: OffsetTime): OffsetDateTime;
                atTime(arg0: number, arg1: number): LocalDateTime;
                atTime(arg0: number, arg1: number, arg2: number): LocalDateTime;
                atTime(arg0: number, arg1: number, arg2: number, arg3: number): LocalDateTime;
                getDayOfMonth(): number;
                getDayOfWeek(): DayOfWeek;
                getDayOfYear(): number;
                getMonth(): Month;
                getMonthValue(): number;
                getYear(): number;
                minusDays(arg0: long): this;
                minusMonths(arg0: long): this;
                minusWeeks(arg0: long): this;
                minusYears(arg0: long): this;
                plusDays(arg0: long): this;
                plusMonths(arg0: long): this;
                plusWeeks(arg0: long): this;
                plusYears(arg0: long): this;
                withDayOfMonth(arg0: number): this;
                withDayOfYear(arg0: number): this;
                withMonth(arg0: number): this;
                withYear(arg0: number): this;
            }
            type LocalDate = java.time.temporal.Temporal & java.time.temporal.TemporalAdjuster & java.time.chrono.ChronoLocalDate & java.io.Serializable & LocalDate_S & LocalDate$;
            interface LocalDateTime_S {
                readonly MAX: LocalDateTime;
                readonly MIN: LocalDateTime;
                now(): LocalDateTime;
                now(arg0: Clock): LocalDateTime;
                now(arg0: ZoneId): LocalDateTime;
                of(arg0: LocalDate, arg1: LocalTime): LocalDateTime;
                of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): LocalDateTime;
                of(arg0: number, arg1: Month, arg2: number, arg3: number, arg4: number): LocalDateTime;
                of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): LocalDateTime;
                of(arg0: number, arg1: Month, arg2: number, arg3: number, arg4: number, arg5: number): LocalDateTime;
                of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): LocalDateTime;
                of(arg0: number, arg1: Month, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): LocalDateTime;
                ofEpochSecond(arg0: long, arg1: number, arg2: ZoneOffset): LocalDateTime;
                ofInstant(arg0: Instant, arg1: ZoneId): LocalDateTime;
                parse(arg0: java.lang.CharSequence): LocalDateTime;
                parse(arg0: java.lang.CharSequence, arg1: java.time.format.DateTimeFormatter): LocalDateTime;
            }
            type LocalDateTime_ST = java.time.chrono.ChronoLocalDateTime_S & java.time.temporal.Temporal_S & java.io.Serializable_S & java.time.temporal.TemporalAdjuster_S & LocalDateTime_S;
            interface LocalDateTime_C extends LocalDateTime_ST {
                new (): LocalDateTime;
            }
            interface LocalDateTime$ {
                atOffset(arg0: ZoneOffset): OffsetDateTime;
                getDayOfMonth(): number;
                getDayOfWeek(): DayOfWeek;
                getDayOfYear(): number;
                getHour(): number;
                getMinute(): number;
                getMonth(): Month;
                getMonthValue(): number;
                getNano(): number;
                getSecond(): number;
                getYear(): number;
                minusDays(arg0: long): this;
                minusHours(arg0: long): this;
                minusMinutes(arg0: long): this;
                minusMonths(arg0: long): this;
                minusNanos(arg0: long): this;
                minusSeconds(arg0: long): this;
                minusWeeks(arg0: long): this;
                minusYears(arg0: long): this;
                plusDays(arg0: long): this;
                plusHours(arg0: long): this;
                plusMinutes(arg0: long): this;
                plusMonths(arg0: long): this;
                plusNanos(arg0: long): this;
                plusSeconds(arg0: long): this;
                plusWeeks(arg0: long): this;
                plusYears(arg0: long): this;
                truncatedTo(arg0: java.time.temporal.TemporalUnit): this;
                withDayOfMonth(arg0: number): this;
                withDayOfYear(arg0: number): this;
                withHour(arg0: number): this;
                withMinute(arg0: number): this;
                withMonth(arg0: number): this;
                withNano(arg0: number): this;
                withSecond(arg0: number): this;
                withYear(arg0: number): this;
            }
            type LocalDateTime = java.time.temporal.Temporal & java.time.temporal.TemporalAdjuster & java.time.chrono.ChronoLocalDateTime & java.io.Serializable & LocalDateTime_S & LocalDateTime$;
            interface LocalTime_S {
                readonly MAX: LocalTime;
                readonly MIDNIGHT: LocalTime;
                readonly MIN: LocalTime;
                readonly NOON: LocalTime;
                from(arg0: java.time.temporal.TemporalAccessor): LocalTime;
                now(): LocalTime;
                now(arg0: ZoneId): LocalTime;
                now(arg0: Clock): LocalTime;
                of(arg0: number, arg1: number): LocalTime;
                of(arg0: number, arg1: number, arg2: number): LocalTime;
                of(arg0: number, arg1: number, arg2: number, arg3: number): LocalTime;
                ofNanoOfDay(arg0: long): LocalTime;
                ofSecondOfDay(arg0: long): LocalTime;
                parse(arg0: java.lang.CharSequence): LocalTime;
                parse(arg0: java.lang.CharSequence, arg1: java.time.format.DateTimeFormatter): LocalTime;
            }
            type LocalTime_ST = java.time.temporal.Temporal_S & java.lang.Comparable_S & java.io.Serializable_S & java.time.temporal.TemporalAdjuster_S & LocalTime_S;
            interface LocalTime_C extends LocalTime_ST {
                new (): LocalTime;
            }
            interface LocalTime$ {
                atDate(arg0: LocalDate): LocalDateTime;
                atOffset(arg0: ZoneOffset): OffsetTime;
                compareTo(arg0: LocalTime): number;
                format(arg0: java.time.format.DateTimeFormatter): string;
                getHour(): number;
                getMinute(): number;
                getNano(): number;
                getSecond(): number;
                isAfter(arg0: LocalTime): boolean;
                isBefore(arg0: LocalTime): boolean;
                minusHours(arg0: long): this;
                minusMinutes(arg0: long): this;
                minusNanos(arg0: long): this;
                minusSeconds(arg0: long): this;
                plusHours(arg0: long): this;
                plusMinutes(arg0: long): this;
                plusNanos(arg0: long): this;
                plusSeconds(arg0: long): this;
                toNanoOfDay(): long;
                toSecondOfDay(): number;
                truncatedTo(arg0: java.time.temporal.TemporalUnit): this;
                withHour(arg0: number): this;
                withMinute(arg0: number): this;
                withNano(arg0: number): this;
                withSecond(arg0: number): this;
            }
            type LocalTime = java.time.temporal.Temporal & java.time.temporal.TemporalAdjuster & java.lang.Comparable & java.io.Serializable & LocalTime_S & LocalTime$;
            enum Month {
                JANUARY,
                FEBRUARY,
                MARCH,
                APRIL,
                MAY,
                JUNE,
                JULY,
                AUGUST,
                SEPTEMBER,
                OCTOBER,
                NOVEMBER,
                DECEMBER
            }
            interface OffsetDateTime_S {
                readonly MAX: OffsetDateTime;
                readonly MIN: OffsetDateTime;
                from(arg0: java.time.temporal.TemporalAccessor): OffsetDateTime;
                now(): OffsetDateTime;
                now(arg0: ZoneId): OffsetDateTime;
                now(arg0: Clock): OffsetDateTime;
                of(arg0: LocalDateTime, arg1: ZoneOffset): OffsetDateTime;
                of(arg0: LocalDate, arg1: LocalTime, arg2: ZoneOffset): OffsetDateTime;
                of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: ZoneOffset): OffsetDateTime;
                ofInstant(arg0: Instant, arg1: ZoneId): OffsetDateTime;
                parse(arg0: java.lang.CharSequence): OffsetDateTime;
                parse(arg0: java.lang.CharSequence, arg1: java.time.format.DateTimeFormatter): OffsetDateTime;
                timeLineOrder(): (e1: any, e2: any) => number;
            }
            type OffsetDateTime_ST = java.time.temporal.Temporal_S & java.lang.Comparable_S & java.io.Serializable_S & java.time.temporal.TemporalAdjuster_S & OffsetDateTime_S;
            interface OffsetDateTime_C extends OffsetDateTime_ST {
                new (): OffsetDateTime;
            }
            interface OffsetDateTime$ {
                atZoneSameInstant(arg0: ZoneId): ZonedDateTime;
                atZoneSimilarLocal(arg0: ZoneId): ZonedDateTime;
                compareTo(arg0: OffsetDateTime): number;
                format(arg0: java.time.format.DateTimeFormatter): string;
                getDayOfMonth(): number;
                getDayOfWeek(): DayOfWeek;
                getDayOfYear(): number;
                getHour(): number;
                getMinute(): number;
                getMonth(): Month;
                getMonthValue(): number;
                getNano(): number;
                getOffset(): ZoneOffset;
                getSecond(): number;
                getYear(): number;
                isAfter(arg0: OffsetDateTime): boolean;
                isBefore(arg0: OffsetDateTime): boolean;
                isEqual(arg0: OffsetDateTime): boolean;
                minusDays(arg0: long): this;
                minusHours(arg0: long): this;
                minusMinutes(arg0: long): this;
                minusMonths(arg0: long): this;
                minusNanos(arg0: long): this;
                minusSeconds(arg0: long): this;
                minusWeeks(arg0: long): this;
                minusYears(arg0: long): this;
                plusDays(arg0: long): this;
                plusHours(arg0: long): this;
                plusMinutes(arg0: long): this;
                plusMonths(arg0: long): this;
                plusNanos(arg0: long): this;
                plusSeconds(arg0: long): this;
                plusWeeks(arg0: long): this;
                plusYears(arg0: long): this;
                toEpochSecond(): long;
                toInstant(): Instant;
                toLocalDate(): LocalDate;
                toLocalDateTime(): LocalDateTime;
                toLocalTime(): LocalTime;
                toOffsetTime(): OffsetTime;
                toZonedDateTime(): ZonedDateTime;
                truncatedTo(arg0: java.time.temporal.TemporalUnit): this;
                withDayOfMonth(arg0: number): this;
                withDayOfYear(arg0: number): this;
                withHour(arg0: number): this;
                withMinute(arg0: number): this;
                withMonth(arg0: number): this;
                withNano(arg0: number): this;
                withOffsetSameInstant(arg0: ZoneOffset): this;
                withOffsetSameLocal(arg0: ZoneOffset): this;
                withSecond(arg0: number): this;
                withYear(arg0: number): this;
            }
            type OffsetDateTime = java.time.temporal.Temporal & java.time.temporal.TemporalAdjuster & java.lang.Comparable & java.io.Serializable & OffsetDateTime_S & OffsetDateTime$;
            interface OffsetTime_S {
                readonly MAX: OffsetTime;
                readonly MIN: OffsetTime;
                from(arg0: java.time.temporal.TemporalAccessor): OffsetTime;
                now(): OffsetTime;
                now(arg0: Clock): OffsetTime;
                now(arg0: ZoneId): OffsetTime;
                of(arg0: LocalTime, arg1: ZoneOffset): OffsetTime;
                of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ZoneOffset): OffsetTime;
                ofInstant(arg0: Instant, arg1: ZoneId): OffsetTime;
                parse(arg0: java.lang.CharSequence): OffsetTime;
                parse(arg0: java.lang.CharSequence, arg1: java.time.format.DateTimeFormatter): OffsetTime;
            }
            type OffsetTime_ST = java.time.temporal.Temporal_S & java.lang.Comparable_S & java.io.Serializable_S & java.time.temporal.TemporalAdjuster_S & OffsetTime_S;
            interface OffsetTime_C extends OffsetTime_ST {
                new (): OffsetTime;
            }
            interface OffsetTime$ {
                atDate(arg0: LocalDate): OffsetDateTime;
                compareTo(arg0: OffsetTime): number;
                format(arg0: java.time.format.DateTimeFormatter): string;
                getHour(): number;
                getMinute(): number;
                getNano(): number;
                getOffset(): ZoneOffset;
                getSecond(): number;
                isAfter(arg0: OffsetTime): boolean;
                isBefore(arg0: OffsetTime): boolean;
                isEqual(arg0: OffsetTime): boolean;
                minusHours(arg0: long): this;
                minusMinutes(arg0: long): this;
                minusNanos(arg0: long): this;
                minusSeconds(arg0: long): this;
                plusHours(arg0: long): this;
                plusMinutes(arg0: long): this;
                plusNanos(arg0: long): this;
                plusSeconds(arg0: long): this;
                toLocalTime(): LocalTime;
                truncatedTo(arg0: java.time.temporal.TemporalUnit): this;
                withHour(arg0: number): this;
                withMinute(arg0: number): this;
                withNano(arg0: number): this;
                withOffsetSameInstant(arg0: ZoneOffset): this;
                withOffsetSameLocal(arg0: ZoneOffset): this;
                withSecond(arg0: number): this;
            }
            type OffsetTime = java.time.temporal.Temporal & java.time.temporal.TemporalAdjuster & java.lang.Comparable & java.io.Serializable & OffsetTime_S & OffsetTime$;
            interface Period_S {
                readonly ZERO: Period;
                between(arg0: LocalDate, arg1: LocalDate): Period;
                from(arg0: java.time.temporal.TemporalAmount): Period;
                of(arg0: number, arg1: number, arg2: number): Period;
                ofDays(arg0: number): Period;
                ofMonths(arg0: number): Period;
                ofWeeks(arg0: number): Period;
                ofYears(arg0: number): Period;
                parse(arg0: java.lang.CharSequence): Period;
            }
            type Period_ST = java.time.chrono.ChronoPeriod_S & java.io.Serializable_S & Period_S;
            interface Period_C extends Period_ST {
                new (): Period;
            }
            interface Period$ {
                getDays(): number;
                getMonths(): number;
                getYears(): number;
                minusDays(arg0: long): this;
                minusMonths(arg0: long): this;
                minusYears(arg0: long): this;
                plusDays(arg0: long): this;
                plusMonths(arg0: long): this;
                plusYears(arg0: long): this;
                toTotalMonths(): long;
                withDays(arg0: number): this;
                withMonths(arg0: number): this;
                withYears(arg0: number): this;
            }
            type Period = java.time.chrono.ChronoPeriod & java.io.Serializable & Period_S & Period$;
            interface ZoneId_S {
                readonly SHORT_IDS: java.util.Map;
                from(arg0: java.time.temporal.TemporalAccessor): ZoneId;
                getAvailableZoneIds(): java.util.Set;
                of(arg0: string): ZoneId;
                of(arg0: string, arg1: java.util.Map): ZoneId;
                ofOffset(arg0: string, arg1: ZoneOffset): ZoneId;
                systemDefault(): ZoneId;
            }
            type ZoneId_ST = java.io.Serializable_S & ZoneId_S;
            interface ZoneId_C extends ZoneId_ST {
            }
            interface ZoneId$ {
                getDisplayName(arg0: java.time.format.TextStyle, arg1: java.util.Locale): string;
                getId(): string;
                getRules(): java.time.zone.ZoneRules;
                normalized(): this;
            }
            type ZoneId = java.io.Serializable & ZoneId_S & ZoneId$;
            interface ZoneOffset_S {
                readonly MAX: ZoneOffset;
                readonly MIN: ZoneOffset;
                readonly UTC: ZoneOffset;
                ofHours(arg0: number): ZoneOffset;
                ofHoursMinutes(arg0: number, arg1: number): ZoneOffset;
                ofHoursMinutesSeconds(arg0: number, arg1: number, arg2: number): ZoneOffset;
                ofTotalSeconds(arg0: number): ZoneOffset;
            }
            type ZoneOffset_ST = java.time.temporal.TemporalAccessor_S & java.lang.Comparable_S & ZoneId_S & java.io.Serializable_S & java.time.temporal.TemporalAdjuster_S & ZoneOffset_S;
            interface ZoneOffset_C extends ZoneOffset_ST {
                new (): ZoneOffset;
            }
            interface ZoneOffset$ {
                compareTo(arg0: ZoneOffset): number;
                getTotalSeconds(): number;
            }
            type ZoneOffset = ZoneId & java.time.temporal.TemporalAccessor & java.time.temporal.TemporalAdjuster & java.lang.Comparable & java.io.Serializable & ZoneOffset_S & ZoneOffset$;
            interface ZonedDateTime_S {
                now(): ZonedDateTime;
                now(arg0: Clock): ZonedDateTime;
                now(arg0: ZoneId): ZonedDateTime;
                of(arg0: LocalDateTime, arg1: ZoneId): ZonedDateTime;
                of(arg0: LocalDate, arg1: LocalTime, arg2: ZoneId): ZonedDateTime;
                of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: ZoneId): ZonedDateTime;
                ofInstant(arg0: Instant, arg1: ZoneId): ZonedDateTime;
                ofInstant(arg0: LocalDateTime, arg1: ZoneOffset, arg2: ZoneId): ZonedDateTime;
                ofLocal(arg0: LocalDateTime, arg1: ZoneId, arg2: ZoneOffset): ZonedDateTime;
                ofStrict(arg0: LocalDateTime, arg1: ZoneOffset, arg2: ZoneId): ZonedDateTime;
                parse(arg0: java.lang.CharSequence): ZonedDateTime;
                parse(arg0: java.lang.CharSequence, arg1: java.time.format.DateTimeFormatter): ZonedDateTime;
            }
            type ZonedDateTime_ST = java.time.temporal.Temporal_S & java.time.chrono.ChronoZonedDateTime_S & java.io.Serializable_S & ZonedDateTime_S;
            interface ZonedDateTime_C extends ZonedDateTime_ST {
                new (): ZonedDateTime;
            }
            interface ZonedDateTime$ {
                getDayOfMonth(): number;
                getDayOfWeek(): DayOfWeek;
                getDayOfYear(): number;
                getHour(): number;
                getMinute(): number;
                getMonth(): Month;
                getMonthValue(): number;
                getNano(): number;
                getSecond(): number;
                getYear(): number;
                minusDays(arg0: long): this;
                minusHours(arg0: long): this;
                minusMinutes(arg0: long): this;
                minusMonths(arg0: long): this;
                minusNanos(arg0: long): this;
                minusSeconds(arg0: long): this;
                minusWeeks(arg0: long): this;
                minusYears(arg0: long): this;
                plusDays(arg0: long): this;
                plusHours(arg0: long): this;
                plusMinutes(arg0: long): this;
                plusMonths(arg0: long): this;
                plusNanos(arg0: long): this;
                plusSeconds(arg0: long): this;
                plusWeeks(arg0: long): this;
                plusYears(arg0: long): this;
                toOffsetDateTime(): OffsetDateTime;
                truncatedTo(arg0: java.time.temporal.TemporalUnit): this;
                withDayOfMonth(arg0: number): this;
                withDayOfYear(arg0: number): this;
                withFixedOffsetZone(): this;
                withHour(arg0: number): this;
                withMinute(arg0: number): this;
                withMonth(arg0: number): this;
                withNano(arg0: number): this;
                withSecond(arg0: number): this;
                withYear(arg0: number): this;
            }
            type ZonedDateTime = java.time.temporal.Temporal & java.time.chrono.ChronoZonedDateTime & java.io.Serializable & ZonedDateTime_S & ZonedDateTime$;
        }
        namespace java.time.chrono {
            interface AbstractChronology_S {
            }
            type AbstractChronology_ST = Chronology_S & AbstractChronology_S;
            interface AbstractChronology_C extends AbstractChronology_ST {
            }
            interface AbstractChronology$ {
            }
            type AbstractChronology = Chronology & AbstractChronology_S & AbstractChronology$;
            interface ChronoLocalDate_S {
                from(arg0: java.time.temporal.TemporalAccessor): ChronoLocalDate;
                timeLineOrder(): (e1: any, e2: any) => number;
            }
            interface ChronoLocalDate$ {
                atTime(arg0: LocalTime): ChronoLocalDateTime;
                compareTo(arg0: ChronoLocalDate): number;
                equals(arg0: any): boolean;
                format(arg0: java.time.format.DateTimeFormatter): string;
                getChronology(): Chronology;
                getEra(): Era;
                hashCode(): number;
                isAfter(arg0: ChronoLocalDate): boolean;
                isBefore(arg0: ChronoLocalDate): boolean;
                isEqual(arg0: ChronoLocalDate): boolean;
                isLeapYear(): boolean;
                lengthOfMonth(): number;
                lengthOfYear(): number;
                toEpochDay(): long;
                toString(): string;
                until(arg0: ChronoLocalDate): ChronoPeriod;
            }
            type ChronoLocalDate = java.time.temporal.Temporal & java.time.temporal.TemporalAdjuster & java.lang.Comparable & ChronoLocalDate_S & ChronoLocalDate$;
            interface ChronoLocalDateTime_S {
                from(arg0: java.time.temporal.TemporalAccessor): ChronoLocalDateTime;
                timeLineOrder(): (e1: any, e2: any) => number;
            }
            interface ChronoLocalDateTime$ {
                atZone(arg0: ZoneId): ChronoZonedDateTime;
                compareTo(arg0: ChronoLocalDateTime): number;
                equals(arg0: any): boolean;
                format(arg0: java.time.format.DateTimeFormatter): string;
                getChronology(): Chronology;
                hashCode(): number;
                isAfter(arg0: ChronoLocalDateTime): boolean;
                isBefore(arg0: ChronoLocalDateTime): boolean;
                isEqual(arg0: ChronoLocalDateTime): boolean;
                toEpochSecond(arg0: ZoneOffset): long;
                toInstant(arg0: ZoneOffset): Instant;
                toLocalDate(): ChronoLocalDate;
                toLocalTime(): LocalTime;
                toString(): string;
            }
            type ChronoLocalDateTime = java.time.temporal.Temporal & java.time.temporal.TemporalAdjuster & java.lang.Comparable & ChronoLocalDateTime_S & ChronoLocalDateTime$;
            interface ChronoPeriod_S {
                between(arg0: ChronoLocalDate, arg1: ChronoLocalDate): ChronoPeriod;
            }
            interface ChronoPeriod$ {
                equals(arg0: any): boolean;
                getChronology(): Chronology;
                hashCode(): number;
                isNegative(): boolean;
                isZero(): boolean;
                minus(arg0: java.time.temporal.TemporalAmount): this;
                multipliedBy(arg0: number): this;
                negated(): this;
                normalized(): this;
                plus(arg0: java.time.temporal.TemporalAmount): this;
                toString(): string;
            }
            type ChronoPeriod = java.time.temporal.TemporalAmount & ChronoPeriod_S & ChronoPeriod$;
            interface ChronoZonedDateTime_S {
                from(arg0: java.time.temporal.TemporalAccessor): ChronoZonedDateTime;
                timeLineOrder(): (e1: any, e2: any) => number;
            }
            interface ChronoZonedDateTime$ {
                compareTo(arg0: ChronoZonedDateTime): number;
                equals(arg0: any): boolean;
                format(arg0: java.time.format.DateTimeFormatter): string;
                getChronology(): Chronology;
                getOffset(): ZoneOffset;
                getZone(): ZoneId;
                hashCode(): number;
                isAfter(arg0: ChronoZonedDateTime): boolean;
                isBefore(arg0: ChronoZonedDateTime): boolean;
                isEqual(arg0: ChronoZonedDateTime): boolean;
                toEpochSecond(): long;
                toInstant(): Instant;
                toLocalDate(): ChronoLocalDate;
                toLocalDateTime(): ChronoLocalDateTime;
                toLocalTime(): LocalTime;
                toString(): string;
                withEarlierOffsetAtOverlap(): this;
                withLaterOffsetAtOverlap(): this;
                withZoneSameInstant(arg0: ZoneId): this;
                withZoneSameLocal(arg0: ZoneId): this;
            }
            type ChronoZonedDateTime = java.time.temporal.Temporal & java.lang.Comparable & ChronoZonedDateTime_S & ChronoZonedDateTime$;
            interface Chronology_S {
                from(arg0: java.time.temporal.TemporalAccessor): Chronology;
                getAvailableChronologies(): java.util.Set;
                of(arg0: string): Chronology;
                ofLocale(arg0: java.util.Locale): Chronology;
            }
            interface Chronology$ {
                compareTo(arg0: Chronology): number;
                date(arg0: java.time.temporal.TemporalAccessor): ChronoLocalDate;
                date(arg0: number, arg1: number, arg2: number): ChronoLocalDate;
                date(arg0: Era, arg1: number, arg2: number, arg3: number): ChronoLocalDate;
                dateEpochDay(arg0: long): ChronoLocalDate;
                dateNow(): ChronoLocalDate;
                dateNow(arg0: Clock): ChronoLocalDate;
                dateNow(arg0: ZoneId): ChronoLocalDate;
                dateYearDay(arg0: number, arg1: number): ChronoLocalDate;
                dateYearDay(arg0: Era, arg1: number, arg2: number): ChronoLocalDate;
                equals(arg0: any): boolean;
                eraOf(arg0: number): Era;
                eras(): java.util.List;
                getCalendarType(): string;
                getDisplayName(arg0: java.time.format.TextStyle, arg1: java.util.Locale): string;
                getId(): string;
                hashCode(): number;
                isLeapYear(arg0: long): boolean;
                localDateTime(arg0: java.time.temporal.TemporalAccessor): ChronoLocalDateTime;
                period(arg0: number, arg1: number, arg2: number): ChronoPeriod;
                prolepticYear(arg0: Era, arg1: number): number;
                range(arg0: java.time.temporal.ChronoField): java.time.temporal.ValueRange;
                resolveDate(arg0: java.util.Map, arg1: java.time.format.ResolverStyle): ChronoLocalDate;
                toString(): string;
                zonedDateTime(arg0: java.time.temporal.TemporalAccessor): ChronoZonedDateTime;
                zonedDateTime(arg0: Instant, arg1: ZoneId): ChronoZonedDateTime;
            }
            type Chronology = java.lang.Comparable & Chronology_S & Chronology$;
            interface Era_S {
            }
            interface Era$ {
                getDisplayName(arg0: java.time.format.TextStyle, arg1: java.util.Locale): string;
                getValue(): number;
            }
            type Era = java.time.temporal.TemporalAccessor & java.time.temporal.TemporalAdjuster & Era_S & Era$;
            interface IsoChronology_S {
                readonly INSTANCE: IsoChronology;
            }
            type IsoChronology_ST = AbstractChronology_S & java.io.Serializable_S & IsoChronology_S;
            interface IsoChronology_C extends IsoChronology_ST {
                new (): IsoChronology;
            }
            interface IsoChronology$ {
            }
            type IsoChronology = AbstractChronology & java.io.Serializable & IsoChronology_S & IsoChronology$;
            enum IsoEra {
                BCE,
                CE
            }
        }
        namespace java.time.format {
            interface DateTimeFormatter_S {
                readonly BASIC_ISO_DATE: DateTimeFormatter;
                readonly ISO_DATE: DateTimeFormatter;
                readonly ISO_DATE_TIME: DateTimeFormatter;
                readonly ISO_INSTANT: DateTimeFormatter;
                readonly ISO_LOCAL_DATE: DateTimeFormatter;
                readonly ISO_LOCAL_DATE_TIME: DateTimeFormatter;
                readonly ISO_LOCAL_TIME: DateTimeFormatter;
                readonly ISO_OFFSET_DATE: DateTimeFormatter;
                readonly ISO_OFFSET_DATE_TIME: DateTimeFormatter;
                readonly ISO_OFFSET_TIME: DateTimeFormatter;
                readonly ISO_ORDINAL_DATE: DateTimeFormatter;
                readonly ISO_TIME: DateTimeFormatter;
                readonly ISO_WEEK_DATE: DateTimeFormatter;
                readonly ISO_ZONED_DATE_TIME: DateTimeFormatter;
                readonly RFC_1123_DATE_TIME: DateTimeFormatter;
                ofLocalizedDate(arg0: FormatStyle): DateTimeFormatter;
                ofLocalizedDateTime(arg0: FormatStyle): DateTimeFormatter;
                ofLocalizedDateTime(arg0: FormatStyle, arg1: FormatStyle): DateTimeFormatter;
                ofLocalizedTime(arg0: FormatStyle): DateTimeFormatter;
                ofPattern(arg0: string): DateTimeFormatter;
                ofPattern(arg0: string, arg1: java.util.Locale): DateTimeFormatter;
                parsedExcessDays(): java.time.temporal.TemporalQuery;
                parsedLeapSecond(): java.time.temporal.TemporalQuery;
            }
            interface DateTimeFormatter_C extends DateTimeFormatter_S {
                new (): DateTimeFormatter;
            }
            interface DateTimeFormatter$ {
                format(arg0: java.time.temporal.TemporalAccessor): string;
                formatTo(arg0: java.time.temporal.TemporalAccessor, arg1: java.lang.Appendable): void;
                getChronology(): java.time.chrono.Chronology;
                getDecimalStyle(): DecimalStyle;
                getLocale(): java.util.Locale;
                getResolverFields(): java.util.Set;
                getResolverStyle(): ResolverStyle;
                getZone(): ZoneId;
                parse(arg0: java.lang.CharSequence): java.time.temporal.TemporalAccessor;
                parse(arg0: java.lang.CharSequence, arg1: java.time.temporal.TemporalQuery): any;
                parse(arg0: java.lang.CharSequence, arg1: java.text.ParsePosition): java.time.temporal.TemporalAccessor;
                parseBest(arg0: java.lang.CharSequence, ...arg1: java.time.temporal.TemporalQuery[]): java.time.temporal.TemporalAccessor;
                parseUnresolved(arg0: java.lang.CharSequence, arg1: java.text.ParsePosition): java.time.temporal.TemporalAccessor;
                toFormat(): java.text.Format;
                toFormat(arg0: java.time.temporal.TemporalQuery): java.text.Format;
                withChronology(arg0: java.time.chrono.Chronology): this;
                withDecimalStyle(arg0: DecimalStyle): this;
                withLocale(arg0: java.util.Locale): this;
                withResolverFields(...arg0: java.time.temporal.TemporalField[]): this;
                withResolverFields(arg0: java.util.Set): this;
                withResolverStyle(arg0: ResolverStyle): this;
                withZone(arg0: ZoneId): this;
            }
            type DateTimeFormatter = DateTimeFormatter_S & DateTimeFormatter$;
            interface DecimalStyle_S {
                readonly STANDARD: DecimalStyle;
                getAvailableLocales(): java.util.Set;
                of(arg0: java.util.Locale): DecimalStyle;
                ofDefaultLocale(): DecimalStyle;
            }
            interface DecimalStyle_C extends DecimalStyle_S {
                new (): DecimalStyle;
            }
            interface DecimalStyle$ {
                getDecimalSeparator(): string;
                getNegativeSign(): string;
                getPositiveSign(): string;
                getZeroDigit(): string;
                withDecimalSeparator(arg0: string): this;
                withNegativeSign(arg0: string): this;
                withPositiveSign(arg0: string): this;
                withZeroDigit(arg0: string): this;
            }
            type DecimalStyle = DecimalStyle_S & DecimalStyle$;
            enum FormatStyle {
                FULL,
                LONG,
                MEDIUM,
                SHORT
            }
            enum ResolverStyle {
                STRICT,
                SMART,
                LENIENT
            }
            enum TextStyle {
                FULL,
                FULL_STANDALONE,
                SHORT,
                SHORT_STANDALONE,
                NARROW,
                NARROW_STANDALONE
            }
        }
        namespace java.time.temporal {
            enum ChronoField {
                NANO_OF_SECOND,
                NANO_OF_DAY,
                MICRO_OF_SECOND,
                MICRO_OF_DAY,
                MILLI_OF_SECOND,
                MILLI_OF_DAY,
                SECOND_OF_MINUTE,
                SECOND_OF_DAY,
                MINUTE_OF_HOUR,
                MINUTE_OF_DAY,
                HOUR_OF_AMPM,
                CLOCK_HOUR_OF_AMPM,
                HOUR_OF_DAY,
                CLOCK_HOUR_OF_DAY,
                AMPM_OF_DAY,
                DAY_OF_WEEK,
                ALIGNED_DAY_OF_WEEK_IN_MONTH,
                ALIGNED_DAY_OF_WEEK_IN_YEAR,
                DAY_OF_MONTH,
                DAY_OF_YEAR,
                EPOCH_DAY,
                ALIGNED_WEEK_OF_MONTH,
                ALIGNED_WEEK_OF_YEAR,
                MONTH_OF_YEAR,
                PROLEPTIC_MONTH,
                YEAR_OF_ERA,
                YEAR,
                ERA,
                INSTANT_SECONDS,
                OFFSET_SECONDS
            }
            interface Temporal_S {
            }
            interface Temporal$ {
                isSupported(arg0: TemporalUnit): boolean;
                minus(arg0: TemporalAmount): this;
                minus(arg0: long, arg1: TemporalUnit): this;
                plus(arg0: TemporalAmount): this;
                plus(arg0: long, arg1: TemporalUnit): this;
                until(arg0: Temporal, arg1: TemporalUnit): long;
                with(arg0: TemporalAdjuster): this;
                with(arg0: TemporalField, arg1: long): this;
            }
            type Temporal = TemporalAccessor & Temporal_S & Temporal$;
            interface TemporalAccessor_S {
            }
            interface TemporalAccessor$ {
                get(arg0: TemporalField): number;
                getLong(arg0: TemporalField): long;
                isSupported(arg0: TemporalField): boolean;
                query(arg0: TemporalQuery): any;
                range(arg0: TemporalField): ValueRange;
            }
            type TemporalAccessor = TemporalAccessor_S & TemporalAccessor$;
            interface TemporalAdjuster_S {
            }
            interface TemporalAdjuster$ {
                adjustInto(arg0: Temporal): Temporal;
            }
            type TemporalAdjuster = TemporalAdjuster_S & TemporalAdjuster$;
            interface TemporalAmount_S {
            }
            interface TemporalAmount$ {
                addTo(arg0: Temporal): Temporal;
                get(arg0: TemporalUnit): long;
                getUnits(): java.util.List;
                subtractFrom(arg0: Temporal): Temporal;
            }
            type TemporalAmount = TemporalAmount_S & TemporalAmount$;
            interface TemporalField_S {
            }
            interface TemporalField$ {
                adjustInto(arg0: Temporal, arg1: long): Temporal;
                getBaseUnit(): TemporalUnit;
                getDisplayName(arg0: java.util.Locale): string;
                getFrom(arg0: TemporalAccessor): long;
                getRangeUnit(): TemporalUnit;
                isDateBased(): boolean;
                isSupportedBy(arg0: TemporalAccessor): boolean;
                isTimeBased(): boolean;
                range(): ValueRange;
                rangeRefinedBy(arg0: TemporalAccessor): ValueRange;
                resolve(arg0: java.util.Map, arg1: TemporalAccessor, arg2: java.time.format.ResolverStyle): TemporalAccessor;
                toString(): string;
            }
            type TemporalField = TemporalField_S & TemporalField$;
            interface TemporalQuery_S {
            }
            interface TemporalQuery$ {
                queryFrom(arg0: TemporalAccessor): any;
            }
            type TemporalQuery = TemporalQuery_S & TemporalQuery$;
            interface TemporalUnit_S {
            }
            interface TemporalUnit$ {
                addTo(arg0: Temporal, arg1: long): Temporal;
                between(arg0: Temporal, arg1: Temporal): long;
                getDuration(): Duration;
                isDateBased(): boolean;
                isDurationEstimated(): boolean;
                isSupportedBy(arg0: Temporal): boolean;
                isTimeBased(): boolean;
                toString(): string;
            }
            type TemporalUnit = TemporalUnit_S & TemporalUnit$;
            interface ValueRange_S {
                of(arg0: long, arg1: long): ValueRange;
                of(arg0: long, arg1: long, arg2: long): ValueRange;
                of(arg0: long, arg1: long, arg2: long, arg3: long): ValueRange;
            }
            type ValueRange_ST = java.io.Serializable_S & ValueRange_S;
            interface ValueRange_C extends ValueRange_ST {
                new (): ValueRange;
            }
            interface ValueRange$ {
                checkValidIntValue(arg0: long, arg1: TemporalField): number;
                checkValidValue(arg0: long, arg1: TemporalField): long;
                getLargestMinimum(): long;
                getMaximum(): long;
                getMinimum(): long;
                getSmallestMaximum(): long;
                isFixed(): boolean;
                isIntValue(): boolean;
                isValidIntValue(arg0: long): boolean;
                isValidValue(arg0: long): boolean;
            }
            type ValueRange = java.io.Serializable & ValueRange_S & ValueRange$;
        }
        namespace java.time.zone {
            interface ZoneOffsetTransition_S {
                of(arg0: LocalDateTime, arg1: ZoneOffset, arg2: ZoneOffset): ZoneOffsetTransition;
            }
            type ZoneOffsetTransition_ST = java.lang.Comparable_S & java.io.Serializable_S & ZoneOffsetTransition_S;
            interface ZoneOffsetTransition_C extends ZoneOffsetTransition_ST {
                new (): ZoneOffsetTransition;
            }
            interface ZoneOffsetTransition$ {
                compareTo(arg0: ZoneOffsetTransition): number;
                getDateTimeAfter(): LocalDateTime;
                getDateTimeBefore(): LocalDateTime;
                getDuration(): Duration;
                getInstant(): Instant;
                getOffsetAfter(): ZoneOffset;
                getOffsetBefore(): ZoneOffset;
                isGap(): boolean;
                isOverlap(): boolean;
                isValidOffset(arg0: ZoneOffset): boolean;
                toEpochSecond(): long;
            }
            type ZoneOffsetTransition = java.lang.Comparable & java.io.Serializable & ZoneOffsetTransition_S & ZoneOffsetTransition$;
            interface ZoneRules_S {
                of(arg0: ZoneOffset): ZoneRules;
                of(arg0: ZoneOffset, arg1: ZoneOffset, arg2: java.util.List, arg3: java.util.List, arg4: java.util.List): ZoneRules;
            }
            type ZoneRules_ST = java.io.Serializable_S & ZoneRules_S;
            interface ZoneRules_C extends ZoneRules_ST {
                new (): ZoneRules;
            }
            interface ZoneRules$ {
                getDaylightSavings(arg0: Instant): Duration;
                getOffset(arg0: LocalDateTime): ZoneOffset;
                getOffset(arg0: Instant): ZoneOffset;
                getStandardOffset(arg0: Instant): ZoneOffset;
                getTransition(arg0: LocalDateTime): ZoneOffsetTransition;
                getTransitionRules(): java.util.List;
                getTransitions(): java.util.List;
                getValidOffsets(arg0: LocalDateTime): java.util.List;
                isDaylightSavings(arg0: Instant): boolean;
                isFixedOffset(): boolean;
                isValidOffset(arg0: LocalDateTime, arg1: ZoneOffset): boolean;
                nextTransition(arg0: Instant): ZoneOffsetTransition;
                previousTransition(arg0: Instant): ZoneOffsetTransition;
            }
            type ZoneRules = java.io.Serializable & ZoneRules_S & ZoneRules$;
        }
        namespace java.util {
            interface AbstractCollection_S {
            }
            type AbstractCollection_ST = Collection_S & AbstractCollection_S;
            interface AbstractCollection_C extends AbstractCollection_ST {
            }
            interface AbstractCollection$ {
            }
            type AbstractCollection = Collection & AbstractCollection_S & AbstractCollection$;
            interface AbstractList_S {
            }
            type AbstractList_ST = AbstractCollection_S & List_S & AbstractList_S;
            interface AbstractList_C extends AbstractList_ST {
            }
            interface AbstractList$ {
            }
            type AbstractList = AbstractCollection & List & AbstractList_S & AbstractList$;
            interface AbstractMap_S {
            }
            type AbstractMap_ST = Map_S & AbstractMap_S;
            interface AbstractMap_C extends AbstractMap_ST {
            }
            interface AbstractMap$ {
            }
            type AbstractMap = Map & AbstractMap_S & AbstractMap$;
            interface AbstractSequentialList_S {
            }
            type AbstractSequentialList_ST = AbstractList_S & AbstractSequentialList_S;
            interface AbstractSequentialList_C extends AbstractSequentialList_ST {
            }
            interface AbstractSequentialList$ {
            }
            type AbstractSequentialList = AbstractList & AbstractSequentialList_S & AbstractSequentialList$;
            interface AbstractSet_S {
            }
            type AbstractSet_ST = AbstractCollection_S & Set_S & AbstractSet_S;
            interface AbstractSet_C extends AbstractSet_ST {
            }
            interface AbstractSet$ {
            }
            type AbstractSet = AbstractCollection & Set & AbstractSet_S & AbstractSet$;
            interface ArrayList_S {
            }
            type ArrayList_ST = AbstractList_S & RandomAccess_S & java.io.Serializable_S & List_S & java.lang.Cloneable_S & ArrayList_S;
            interface ArrayList_C extends ArrayList_ST {
                new (): ArrayList;
                new (arg0: Collection): ArrayList;
                new (arg0: number): ArrayList;
            }
            interface ArrayList$ {
                clone(): any;
                ensureCapacity(arg0: number): void;
                trimToSize(): void;
            }
            type ArrayList = AbstractList & List & RandomAccess & java.lang.Cloneable & java.io.Serializable & ArrayList_S & ArrayList$;
            interface BitSet_S {
                valueOf(arg0: long[]): BitSet;
                valueOf(arg0: number[]): BitSet;
                valueOf(arg0: java.nio.LongBuffer): BitSet;
                valueOf(arg0: java.nio.ByteBuffer): BitSet;
            }
            type BitSet_ST = java.io.Serializable_S & java.lang.Cloneable_S & BitSet_S;
            interface BitSet_C extends BitSet_ST {
                new (): BitSet;
                new (arg0: number): BitSet;
            }
            interface BitSet$ {
                and(arg0: BitSet): void;
                andNot(arg0: BitSet): void;
                cardinality(): number;
                clear(): void;
                clear(arg0: number): void;
                clear(arg0: number, arg1: number): void;
                clone(): any;
                flip(arg0: number): void;
                flip(arg0: number, arg1: number): void;
                get(arg0: number): boolean;
                get(arg0: number, arg1: number): this;
                intersects(arg0: BitSet): boolean;
                isEmpty(): boolean;
                length(): number;
                nextClearBit(arg0: number): number;
                nextSetBit(arg0: number): number;
                or(arg0: BitSet): void;
                previousClearBit(arg0: number): number;
                previousSetBit(arg0: number): number;
                set(arg0: number): void;
                set(arg0: number, arg1: boolean): void;
                set(arg0: number, arg1: number): void;
                set(arg0: number, arg1: number, arg2: boolean): void;
                size(): number;
                stream(): java.util.stream.IntStream;
                toByteArray(): number[];
                toLongArray(): long[];
                xor(arg0: BitSet): void;
            }
            type BitSet = java.lang.Cloneable & java.io.Serializable & BitSet_S & BitSet$;
            interface Calendar_S {
                readonly ALL_STYLES: number;
                readonly AM: number;
                readonly AM_PM: number;
                readonly APRIL: number;
                readonly AUGUST: number;
                readonly DATE: number;
                readonly DAY_OF_MONTH: number;
                readonly DAY_OF_WEEK: number;
                readonly DAY_OF_WEEK_IN_MONTH: number;
                readonly DAY_OF_YEAR: number;
                readonly DECEMBER: number;
                readonly DST_OFFSET: number;
                readonly ERA: number;
                readonly FEBRUARY: number;
                readonly FIELD_COUNT: number;
                readonly FRIDAY: number;
                readonly HOUR: number;
                readonly HOUR_OF_DAY: number;
                readonly JANUARY: number;
                readonly JULY: number;
                readonly JUNE: number;
                readonly LONG: number;
                readonly LONG_FORMAT: number;
                readonly LONG_STANDALONE: number;
                readonly MARCH: number;
                readonly MAY: number;
                readonly MILLISECOND: number;
                readonly MINUTE: number;
                readonly MONDAY: number;
                readonly MONTH: number;
                readonly NARROW_FORMAT: number;
                readonly NARROW_STANDALONE: number;
                readonly NOVEMBER: number;
                readonly OCTOBER: number;
                readonly PM: number;
                readonly SATURDAY: number;
                readonly SECOND: number;
                readonly SEPTEMBER: number;
                readonly SHORT: number;
                readonly SHORT_FORMAT: number;
                readonly SHORT_STANDALONE: number;
                readonly SUNDAY: number;
                readonly THURSDAY: number;
                readonly TUESDAY: number;
                readonly UNDECIMBER: number;
                readonly WEDNESDAY: number;
                readonly WEEK_OF_MONTH: number;
                readonly WEEK_OF_YEAR: number;
                readonly YEAR: number;
                readonly ZONE_OFFSET: number;
                getAvailableCalendarTypes(): Set;
                getAvailableLocales(): Locale[];
                getInstance(): Calendar;
                getInstance(arg0: Locale): Calendar;
                getInstance(arg0: TimeZone): Calendar;
                getInstance(arg0: TimeZone, arg1: Locale): Calendar;
            }
            type Calendar_ST = java.lang.Comparable_S & java.io.Serializable_S & java.lang.Cloneable_S & Calendar_S;
            interface Calendar_C extends Calendar_ST {
            }
            interface Calendar$ {
                add(arg0: number, arg1: number): void;
                after(arg0: any): boolean;
                before(arg0: any): boolean;
                clear(): void;
                clear(arg0: number): void;
                clone(): any;
                compareTo(arg0: Calendar): number;
                get(arg0: number): number;
                getActualMaximum(arg0: number): number;
                getActualMinimum(arg0: number): number;
                getCalendarType(): string;
                getDisplayName(arg0: number, arg1: number, arg2: Locale): string;
                getDisplayNames(arg0: number, arg1: number, arg2: Locale): Map;
                getFirstDayOfWeek(): number;
                getGreatestMinimum(arg0: number): number;
                getLeastMaximum(arg0: number): number;
                getMaximum(arg0: number): number;
                getMinimalDaysInFirstWeek(): number;
                getMinimum(arg0: number): number;
                getTime(): Date;
                getTimeInMillis(): long;
                getTimeZone(): TimeZone;
                getWeekYear(): number;
                getWeeksInWeekYear(): number;
                isLenient(): boolean;
                isSet(arg0: number): boolean;
                isWeekDateSupported(): boolean;
                roll(arg0: number, arg1: boolean): void;
                roll(arg0: number, arg1: number): void;
                set(arg0: number, arg1: number): void;
                set(arg0: number, arg1: number, arg2: number): void;
                set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
                set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
                setFirstDayOfWeek(arg0: number): void;
                setLenient(arg0: boolean): void;
                setMinimalDaysInFirstWeek(arg0: number): void;
                setTime(arg0: Date): void;
                setTimeInMillis(arg0: long): void;
                setTimeZone(arg0: TimeZone): void;
                setWeekDate(arg0: number, arg1: number, arg2: number): void;
                toInstant(): java.time.Instant;
            }
            type Calendar = java.io.Serializable & java.lang.Cloneable & java.lang.Comparable & Calendar_S & Calendar$;
            interface Collection_S {
            }
            interface Collection$ {
                add(arg0: any): boolean;
                addAll(arg0: Collection): boolean;
                clear(): void;
                contains(arg0: any): boolean;
                containsAll(arg0: Collection): boolean;
                equals(arg0: any): boolean;
                hashCode(): number;
                isEmpty(): boolean;
                parallelStream(): java.util.stream.Stream;
                remove(arg0: any): boolean;
                removeAll(arg0: Collection): boolean;
                removeIf(predicate: (t: any) => boolean): boolean;
                retainAll(arg0: Collection): boolean;
                size(): number;
                stream(): java.util.stream.Stream;
                toArray(): any[];
                toArray(arg0: any[]): any[];
            }
            type Collection = java.lang.Iterable & Collection_S & Collection$;
            interface Comparator_S {
                comparing(func: (t: any) => any): (e1: any, e2: any) => number;
                comparing(func0: (t: any) => any, comparator1: (e1: any, e2: any) => number): (e1: any, e2: any) => number;
                comparingDouble(arg0: java.util.function_.ToDoubleFunction): (e1: any, e2: any) => number;
                comparingInt(arg0: java.util.function_.ToIntFunction): (e1: any, e2: any) => number;
                comparingLong(arg0: java.util.function_.ToLongFunction): (e1: any, e2: any) => number;
                naturalOrder(): (e1: any, e2: any) => number;
                nullsFirst(comparator: (e1: any, e2: any) => number): (e1: any, e2: any) => number;
                nullsLast(comparator: (e1: any, e2: any) => number): (e1: any, e2: any) => number;
                reverseOrder(): (e1: any, e2: any) => number;
            }
            interface Comparator$ {
                compare(arg0: any, arg1: any): number;
                equals(arg0: any): boolean;
                reversed(): (e1: any, e2: any) => number;
                thenComparing(comparator: (e1: any, e2: any) => number): (e1: any, e2: any) => number;
                thenComparing(func: (t: any) => any): (e1: any, e2: any) => number;
                thenComparing(func0: (t: any) => any, comparator1: (e1: any, e2: any) => number): (e1: any, e2: any) => number;
                thenComparingDouble(arg0: java.util.function_.ToDoubleFunction): (e1: any, e2: any) => number;
                thenComparingInt(arg0: java.util.function_.ToIntFunction): (e1: any, e2: any) => number;
                thenComparingLong(arg0: java.util.function_.ToLongFunction): (e1: any, e2: any) => number;
            }
            type Comparator = Comparator_S & Comparator$;
            interface Currency_S {
                getAvailableCurrencies(): Set;
                getInstance(arg0: Locale): Currency;
                getInstance(arg0: string): Currency;
            }
            type Currency_ST = java.io.Serializable_S & Currency_S;
            interface Currency_C extends Currency_ST {
                new (): Currency;
            }
            interface Currency$ {
                getCurrencyCode(): string;
                getDefaultFractionDigits(): number;
                getDisplayName(): string;
                getDisplayName(arg0: Locale): string;
                getNumericCode(): number;
                getSymbol(): string;
                getSymbol(arg0: Locale): string;
            }
            type Currency = java.io.Serializable & Currency_S & Currency$;
            interface Deque_S {
            }
            interface Deque$ {
                addFirst(arg0: any): void;
                addLast(arg0: any): void;
                descendingIterator(): Iterator;
                getFirst(): any;
                getLast(): any;
                offerFirst(arg0: any): boolean;
                offerLast(arg0: any): boolean;
                peekFirst(): any;
                peekLast(): any;
                pollFirst(): any;
                pollLast(): any;
                pop(): any;
                push(arg0: any): void;
                removeFirst(): any;
                removeFirstOccurrence(arg0: any): boolean;
                removeLast(): any;
                removeLastOccurrence(arg0: any): boolean;
            }
            type Deque = Queue & Deque_S & Deque$;
            interface Dictionary_S {
            }
            interface Dictionary_C extends Dictionary_S {
                new (): Dictionary;
            }
            interface Dictionary$ {
                elements(): Enumeration;
                get(arg0: any): any;
                isEmpty(): boolean;
                keys(): Enumeration;
                put(arg0: any, arg1: any): any;
                remove(arg0: any): any;
                size(): number;
            }
            type Dictionary = Dictionary_S & Dictionary$;
            interface DoubleSummaryStatistics_S {
            }
            type DoubleSummaryStatistics_ST = java.util.function_.DoubleConsumer_S & DoubleSummaryStatistics_S;
            interface DoubleSummaryStatistics_C extends DoubleSummaryStatistics_ST {
                new (): DoubleSummaryStatistics;
            }
            interface DoubleSummaryStatistics$ {
                combine(arg0: DoubleSummaryStatistics): void;
                getAverage(): number;
                getCount(): long;
                getMax(): number;
                getMin(): number;
                getSum(): number;
            }
            type DoubleSummaryStatistics = java.util.function_.DoubleConsumer & DoubleSummaryStatistics_S & DoubleSummaryStatistics$;
            interface EnumMap_S {
            }
            type EnumMap_ST = AbstractMap_S & java.io.Serializable_S & java.lang.Cloneable_S & EnumMap_S;
            interface EnumMap_C extends EnumMap_ST {
                new (arg0: java.lang.Class): EnumMap;
                new (arg0: Map): EnumMap;
                new (arg0: EnumMap): EnumMap;
            }
            interface EnumMap$ {
                clone(): this;
                put(arg0: java.lang.Enum, arg1: any): any;
            }
            type EnumMap = AbstractMap & java.io.Serializable & java.lang.Cloneable & EnumMap_S & EnumMap$;
            interface EnumSet_S {
                allOf(arg0: java.lang.Class): EnumSet;
                complementOf(arg0: EnumSet): EnumSet;
                copyOf(arg0: EnumSet): EnumSet;
                copyOf(arg0: Collection): EnumSet;
                noneOf(arg0: java.lang.Class): EnumSet;
                of(arg0: java.lang.Enum): EnumSet;
                of(arg0: java.lang.Enum, ...arg1: java.lang.Enum[]): EnumSet;
                of(arg0: java.lang.Enum, arg1: java.lang.Enum): EnumSet;
                of(arg0: java.lang.Enum, arg1: java.lang.Enum, arg2: java.lang.Enum): EnumSet;
                of(arg0: java.lang.Enum, arg1: java.lang.Enum, arg2: java.lang.Enum, arg3: java.lang.Enum): EnumSet;
                of(arg0: java.lang.Enum, arg1: java.lang.Enum, arg2: java.lang.Enum, arg3: java.lang.Enum, arg4: java.lang.Enum): EnumSet;
                range(arg0: java.lang.Enum, arg1: java.lang.Enum): EnumSet;
            }
            type EnumSet_ST = java.io.Serializable_S & AbstractSet_S & java.lang.Cloneable_S & EnumSet_S;
            interface EnumSet_C extends EnumSet_ST {
            }
            interface EnumSet$ {
                clone(): this;
            }
            type EnumSet = AbstractSet & java.lang.Cloneable & java.io.Serializable & EnumSet_S & EnumSet$;
            interface Enumeration_S {
            }
            interface Enumeration$ {
                hasMoreElements(): boolean;
                nextElement(): any;
            }
            type Enumeration = Enumeration_S & Enumeration$;
            interface EventListener_S {
            }
            interface EventListener$ {
            }
            type EventListener = EventListener_S & EventListener$;
            interface EventObject_S {
            }
            type EventObject_ST = java.io.Serializable_S & EventObject_S;
            interface EventObject_C extends EventObject_ST {
                new (arg0: any): EventObject;
            }
            interface EventObject$ {
                getSource(): any;
            }
            type EventObject = java.io.Serializable & EventObject_S & EventObject$;
            interface GregorianCalendar_S {
                readonly AD: number;
                readonly BC: number;
                from(arg0: java.time.ZonedDateTime): GregorianCalendar;
            }
            type GregorianCalendar_ST = Calendar_S & GregorianCalendar_S;
            interface GregorianCalendar_C extends GregorianCalendar_ST {
                new (): GregorianCalendar;
                new (arg0: TimeZone): GregorianCalendar;
                new (arg0: Locale): GregorianCalendar;
                new (arg0: TimeZone, arg1: Locale): GregorianCalendar;
                new (arg0: number, arg1: number, arg2: number): GregorianCalendar;
                new (arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): GregorianCalendar;
                new (arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): GregorianCalendar;
            }
            interface GregorianCalendar$ {
                getGregorianChange(): Date;
                isLeapYear(arg0: number): boolean;
                setGregorianChange(arg0: Date): void;
                toZonedDateTime(): java.time.ZonedDateTime;
            }
            type GregorianCalendar = Calendar & GregorianCalendar_S & GregorianCalendar$;
            interface HashMap_S {
            }
            type HashMap_ST = AbstractMap_S & java.io.Serializable_S & Map_S & java.lang.Cloneable_S & HashMap_S;
            interface HashMap_C extends HashMap_ST {
                new (): HashMap;
                new (arg0: number): HashMap;
                new (arg0: Map): HashMap;
                new (arg0: number, arg1: number): HashMap;
            }
            interface HashMap$ {
                clone(): any;
            }
            type HashMap = AbstractMap & Map & java.lang.Cloneable & java.io.Serializable & HashMap_S & HashMap$;
            interface HashSet_S {
            }
            type HashSet_ST = java.io.Serializable_S & Set_S & AbstractSet_S & java.lang.Cloneable_S & HashSet_S;
            interface HashSet_C extends HashSet_ST {
                new (): HashSet;
                new (arg0: number): HashSet;
                new (arg0: Collection): HashSet;
                new (arg0: number, arg1: number): HashSet;
            }
            interface HashSet$ {
                clone(): any;
            }
            type HashSet = AbstractSet & Set & java.lang.Cloneable & java.io.Serializable & HashSet_S & HashSet$;
            interface Hashtable_S {
            }
            type Hashtable_ST = Dictionary_S & java.io.Serializable_S & Map_S & java.lang.Cloneable_S & Hashtable_S;
            interface Hashtable_C extends Hashtable_ST {
                new (): Hashtable;
                new (arg0: Map): Hashtable;
                new (arg0: number): Hashtable;
                new (arg0: number, arg1: number): Hashtable;
            }
            interface Hashtable$ {
                clone(): any;
                contains(arg0: any): boolean;
            }
            type Hashtable = Dictionary & Map & java.lang.Cloneable & java.io.Serializable & Hashtable_S & Hashtable$;
            interface IntSummaryStatistics_S {
            }
            type IntSummaryStatistics_ST = java.util.function_.IntConsumer_S & IntSummaryStatistics_S;
            interface IntSummaryStatistics_C extends IntSummaryStatistics_ST {
                new (): IntSummaryStatistics;
            }
            interface IntSummaryStatistics$ {
                combine(arg0: IntSummaryStatistics): void;
                getAverage(): number;
                getCount(): long;
                getMax(): number;
                getMin(): number;
                getSum(): long;
            }
            type IntSummaryStatistics = java.util.function_.IntConsumer & IntSummaryStatistics_S & IntSummaryStatistics$;
            interface Iterator_S {
            }
            interface Iterator$ {
                forEachRemaining(consumer: (t: any) => void): void;
                hasNext(): boolean;
                next(): any;
                remove(): void;
            }
            type Iterator = Iterator_S & Iterator$;
            interface LinkedHashMap_S {
            }
            type LinkedHashMap_ST = HashMap_S & Map_S & LinkedHashMap_S;
            interface LinkedHashMap_C extends LinkedHashMap_ST {
                new (): LinkedHashMap;
                new (arg0: number): LinkedHashMap;
                new (arg0: Map): LinkedHashMap;
                new (arg0: number, arg1: number): LinkedHashMap;
                new (arg0: number, arg1: number, arg2: boolean): LinkedHashMap;
            }
            interface LinkedHashMap$ {
            }
            type LinkedHashMap = HashMap & Map & LinkedHashMap_S & LinkedHashMap$;
            interface LinkedList_S {
            }
            type LinkedList_ST = java.io.Serializable_S & AbstractSequentialList_S & List_S & Deque_S & java.lang.Cloneable_S & LinkedList_S;
            interface LinkedList_C extends LinkedList_ST {
                new (): LinkedList;
                new (arg0: Collection): LinkedList;
            }
            interface LinkedList$ {
                clone(): any;
            }
            type LinkedList = AbstractSequentialList & List & Deque & java.lang.Cloneable & java.io.Serializable & LinkedList_S & LinkedList$;
            interface List_S {
            }
            interface List$ {
                add(arg0: number, arg1: any): void;
                addAll(arg0: number, arg1: Collection): boolean;
                get(arg0: number): any;
                indexOf(arg0: any): number;
                lastIndexOf(arg0: any): number;
                listIterator(): ListIterator;
                listIterator(arg0: number): ListIterator;
                remove(arg0: number): any;
                replaceAll(arg0: java.util.function_.UnaryOperator): void;
                set(arg0: number, arg1: any): any;
                sort(comparator: (e1: any, e2: any) => number): void;
                subList(arg0: number, arg1: number): this;
            }
            type List = Collection & List_S & List$;
            interface ListIterator_S {
            }
            interface ListIterator$ {
                add(arg0: any): void;
                hasPrevious(): boolean;
                nextIndex(): number;
                previous(): any;
                previousIndex(): number;
                set(arg0: any): void;
            }
            type ListIterator = Iterator & ListIterator_S & ListIterator$;
            interface Locale_S {
                readonly CANADA: Locale;
                readonly CANADA_FRENCH: Locale;
                readonly CHINA: Locale;
                readonly CHINESE: Locale;
                readonly ENGLISH: Locale;
                readonly FRANCE: Locale;
                readonly FRENCH: Locale;
                readonly GERMAN: Locale;
                readonly GERMANY: Locale;
                readonly ITALIAN: Locale;
                readonly ITALY: Locale;
                readonly JAPAN: Locale;
                readonly JAPANESE: Locale;
                readonly KOREA: Locale;
                readonly KOREAN: Locale;
                readonly PRC: Locale;
                readonly PRIVATE_USE_EXTENSION: string;
                readonly ROOT: Locale;
                readonly SIMPLIFIED_CHINESE: Locale;
                readonly TAIWAN: Locale;
                readonly TRADITIONAL_CHINESE: Locale;
                readonly UK: Locale;
                readonly UNICODE_LOCALE_EXTENSION: string;
                readonly US: Locale;
                filter(arg0: List, arg1: Collection): List;
                filter(arg0: List, arg1: Collection, arg2: Locale$FilteringMode): List;
                filterTags(arg0: List, arg1: Collection): List;
                filterTags(arg0: List, arg1: Collection, arg2: Locale$FilteringMode): List;
                forLanguageTag(arg0: string): Locale;
                getAvailableLocales(): Locale[];
                getDefault(): Locale;
                getDefault(arg0: Locale$Category): Locale;
                getISOCountries(): string[];
                getISOLanguages(): string[];
                lookup(arg0: List, arg1: Collection): Locale;
                lookupTag(arg0: List, arg1: Collection): string;
                setDefault(arg0: Locale): void;
                setDefault(arg0: Locale$Category, arg1: Locale): void;
            }
            type Locale_ST = java.io.Serializable_S & java.lang.Cloneable_S & Locale_S;
            interface Locale_C extends Locale_ST {
                new (arg0: string): Locale;
                new (arg0: string, arg1: string): Locale;
                new (arg0: string, arg1: string, arg2: string): Locale;
            }
            interface Locale$ {
                clone(): any;
                getCountry(): string;
                getDisplayCountry(): string;
                getDisplayCountry(arg0: Locale): string;
                getDisplayLanguage(): string;
                getDisplayLanguage(arg0: Locale): string;
                getDisplayName(): string;
                getDisplayName(arg0: Locale): string;
                getDisplayScript(): string;
                getDisplayScript(arg0: Locale): string;
                getDisplayVariant(): string;
                getDisplayVariant(arg0: Locale): string;
                getExtension(arg0: string): string;
                getExtensionKeys(): Set;
                getISO3Country(): string;
                getISO3Language(): string;
                getLanguage(): string;
                getScript(): string;
                getUnicodeLocaleAttributes(): Set;
                getUnicodeLocaleKeys(): Set;
                getUnicodeLocaleType(arg0: string): string;
                getVariant(): string;
                hasExtensions(): boolean;
                stripExtensions(): this;
                toLanguageTag(): string;
            }
            type Locale = java.lang.Cloneable & java.io.Serializable & Locale_S & Locale$;
            enum Locale$Category {
                DISPLAY,
                FORMAT
            }
            enum Locale$FilteringMode {
                AUTOSELECT_FILTERING,
                EXTENDED_FILTERING,
                IGNORE_EXTENDED_RANGES,
                MAP_EXTENDED_RANGES,
                REJECT_EXTENDED_RANGES
            }
            interface LongSummaryStatistics_S {
            }
            type LongSummaryStatistics_ST = java.util.function_.LongConsumer_S & java.util.function_.IntConsumer_S & LongSummaryStatistics_S;
            interface LongSummaryStatistics_C extends LongSummaryStatistics_ST {
                new (): LongSummaryStatistics;
            }
            interface LongSummaryStatistics$ {
                combine(arg0: LongSummaryStatistics): void;
                getAverage(): number;
                getCount(): long;
                getMax(): long;
                getMin(): long;
                getSum(): long;
            }
            type LongSummaryStatistics = java.util.function_.LongConsumer & java.util.function_.IntConsumer & LongSummaryStatistics_S & LongSummaryStatistics$;
            interface Map_S {
            }
            interface Map$ {
                clear(): void;
                compute(arg0: any, biFunc1: (t: any, u: any) => any): any;
                computeIfAbsent(arg0: any, func1: (t: any) => any): any;
                computeIfPresent(arg0: any, biFunc1: (t: any, u: any) => any): any;
                containsKey(arg0: any): boolean;
                containsValue(arg0: any): boolean;
                entrySet(): Set;
                equals(arg0: any): boolean;
                forEach(biConsumer: (t: any, u: any) => void): void;
                get(arg0: any): any;
                getOrDefault(arg0: any, arg1: any): any;
                hashCode(): number;
                isEmpty(): boolean;
                keySet(): Set;
                merge(arg0: any, arg1: any, biFunc2: (t: any, u: any) => any): any;
                put(arg0: any, arg1: any): any;
                putAll(arg0: Map): void;
                putIfAbsent(arg0: any, arg1: any): any;
                remove(arg0: any): any;
                remove(arg0: any, arg1: any): boolean;
                replace(arg0: any, arg1: any): any;
                replace(arg0: any, arg1: any, arg2: any): boolean;
                replaceAll(biFunc: (t: any, u: any) => any): void;
                size(): number;
                values(): Collection;
            }
            type Map = Map_S & Map$;
            interface Map$Entry_S {
                comparingByKey(): (e1: any, e2: any) => number;
                comparingByKey(comparator: (e1: any, e2: any) => number): (e1: any, e2: any) => number;
                comparingByValue(): (e1: any, e2: any) => number;
                comparingByValue(comparator: (e1: any, e2: any) => number): (e1: any, e2: any) => number;
            }
            interface Map$Entry$ {
                equals(arg0: any): boolean;
                getKey(): any;
                getValue(): any;
                hashCode(): number;
                setValue(arg0: any): any;
            }
            type Map$Entry = Map$Entry_S & Map$Entry$;
            interface NavigableMap_S {
            }
            interface NavigableMap$ {
                ceilingEntry(arg0: any): Map$Entry;
                ceilingKey(arg0: any): any;
                descendingKeySet(): NavigableSet;
                descendingMap(): this;
                firstEntry(): Map$Entry;
                floorEntry(arg0: any): Map$Entry;
                floorKey(arg0: any): any;
                headMap(arg0: any, arg1: boolean): this;
                higherEntry(arg0: any): Map$Entry;
                higherKey(arg0: any): any;
                lastEntry(): Map$Entry;
                lowerEntry(arg0: any): Map$Entry;
                lowerKey(arg0: any): any;
                navigableKeySet(): NavigableSet;
                pollFirstEntry(): Map$Entry;
                pollLastEntry(): Map$Entry;
                subMap(arg0: any, arg1: boolean, arg2: any, arg3: boolean): this;
                tailMap(arg0: any, arg1: boolean): this;
            }
            type NavigableMap = SortedMap & NavigableMap_S & NavigableMap$;
            interface NavigableSet_S {
            }
            interface NavigableSet$ {
                ceiling(arg0: any): any;
                descendingIterator(): Iterator;
                descendingSet(): this;
                floor(arg0: any): any;
                headSet(arg0: any, arg1: boolean): this;
                higher(arg0: any): any;
                lower(arg0: any): any;
                pollFirst(): any;
                pollLast(): any;
                subSet(arg0: any, arg1: boolean, arg2: any, arg3: boolean): this;
                tailSet(arg0: any, arg1: boolean): this;
            }
            type NavigableSet = SortedSet & NavigableSet_S & NavigableSet$;
            interface Optional_S {
                empty(): Optional;
                of(arg0: any): Optional;
                ofNullable(arg0: any): Optional;
            }
            interface Optional_C extends Optional_S {
                new (): Optional;
            }
            interface Optional$ {
                filter(predicate: (t: any) => boolean): this;
                flatMap(func: (t: any) => any): this;
                get(): any;
                ifPresent(consumer: (t: any) => void): void;
                isPresent(): boolean;
                map(func: (t: any) => any): this;
                orElse(arg0: any): any;
                orElseGet(supplier: () => any): any;
                orElseThrow(supplier: () => any): any;
            }
            type Optional = Optional_S & Optional$;
            interface OptionalDouble_S {
                empty(): OptionalDouble;
                of(arg0: number): OptionalDouble;
            }
            interface OptionalDouble_C extends OptionalDouble_S {
                new (): OptionalDouble;
            }
            interface OptionalDouble$ {
                getAsDouble(): number;
                ifPresent(arg0: java.util.function_.DoubleConsumer): void;
                isPresent(): boolean;
                orElse(arg0: number): number;
                orElseGet(arg0: java.util.function_.DoubleSupplier): number;
                orElseThrow(supplier: () => any): number;
            }
            type OptionalDouble = OptionalDouble_S & OptionalDouble$;
            interface OptionalInt_S {
                empty(): OptionalInt;
                of(arg0: number): OptionalInt;
            }
            interface OptionalInt_C extends OptionalInt_S {
                new (): OptionalInt;
            }
            interface OptionalInt$ {
                getAsInt(): number;
                ifPresent(arg0: java.util.function_.IntConsumer): void;
                isPresent(): boolean;
                orElse(arg0: number): number;
                orElseGet(arg0: java.util.function_.IntSupplier): number;
                orElseThrow(supplier: () => any): number;
            }
            type OptionalInt = OptionalInt_S & OptionalInt$;
            interface OptionalLong_S {
                empty(): OptionalLong;
                of(arg0: long): OptionalLong;
            }
            interface OptionalLong_C extends OptionalLong_S {
                new (): OptionalLong;
            }
            interface OptionalLong$ {
                getAsLong(): long;
                ifPresent(arg0: java.util.function_.LongConsumer): void;
                isPresent(): boolean;
                orElse(arg0: long): long;
                orElseGet(arg0: java.util.function_.LongSupplier): long;
                orElseThrow(supplier: () => any): long;
            }
            type OptionalLong = OptionalLong_S & OptionalLong$;
            interface PrimitiveIterator_S {
            }
            interface PrimitiveIterator$ {
                forEachRemaining(arg0: any): void;
            }
            type PrimitiveIterator = Iterator & PrimitiveIterator_S & PrimitiveIterator$;
            interface PrimitiveIterator$OfDouble_S {
            }
            interface PrimitiveIterator$OfDouble$ {
                forEachRemaining(arg0: java.util.function_.DoubleConsumer): void;
                nextDouble(): number;
            }
            type PrimitiveIterator$OfDouble = PrimitiveIterator & PrimitiveIterator$OfDouble_S & PrimitiveIterator$OfDouble$;
            interface PrimitiveIterator$OfInt_S {
            }
            interface PrimitiveIterator$OfInt$ {
                forEachRemaining(arg0: java.util.function_.IntConsumer): void;
                nextInt(): number;
            }
            type PrimitiveIterator$OfInt = PrimitiveIterator & PrimitiveIterator$OfInt_S & PrimitiveIterator$OfInt$;
            interface PrimitiveIterator$OfLong_S {
            }
            interface PrimitiveIterator$OfLong$ {
                forEachRemaining(arg0: java.util.function_.LongConsumer): void;
                nextLong(): long;
            }
            type PrimitiveIterator$OfLong = PrimitiveIterator & PrimitiveIterator$OfLong_S & PrimitiveIterator$OfLong$;
            interface Properties_S {
            }
            type Properties_ST = Hashtable_S & Properties_S;
            interface Properties_C extends Properties_ST {
                new (): Properties;
                new (arg0: Properties): Properties;
            }
            interface Properties$ {
                getProperty(arg0: string): string;
                getProperty(arg0: string, arg1: string): string;
                list(arg0: java.io.PrintStream): void;
                list(arg0: java.io.PrintWriter): void;
                load(arg0: java.io.InputStream): void;
                load(arg0: java.io.Reader): void;
                loadFromXML(arg0: java.io.InputStream): void;
                propertyNames(): Enumeration;
                setProperty(arg0: string, arg1: string): any;
                store(arg0: java.io.OutputStream, arg1: string): void;
                store(arg0: java.io.Writer, arg1: string): void;
                storeToXML(arg0: java.io.OutputStream, arg1: string): void;
                storeToXML(arg0: java.io.OutputStream, arg1: string, arg2: string): void;
                stringPropertyNames(): Set;
            }
            type Properties = Hashtable & Properties_S & Properties$;
            interface Queue_S {
            }
            interface Queue$ {
                element(): any;
                offer(arg0: any): boolean;
                peek(): any;
                poll(): any;
                remove(): any;
            }
            type Queue = Collection & Queue_S & Queue$;
            interface Random_S {
            }
            type Random_ST = java.io.Serializable_S & Random_S;
            interface Random_C extends Random_ST {
                new (): Random;
                new (arg0: long): Random;
            }
            interface Random$ {
                doubles(): java.util.stream.DoubleStream;
                doubles(arg0: long): java.util.stream.DoubleStream;
                doubles(arg0: number, arg1: number): java.util.stream.DoubleStream;
                doubles(arg0: long, arg1: number, arg2: number): java.util.stream.DoubleStream;
                ints(): java.util.stream.IntStream;
                ints(arg0: long): java.util.stream.IntStream;
                ints(arg0: number, arg1: number): java.util.stream.IntStream;
                ints(arg0: long, arg1: number, arg2: number): java.util.stream.IntStream;
                longs(): java.util.stream.LongStream;
                longs(arg0: long): java.util.stream.LongStream;
                longs(arg0: long, arg1: long): java.util.stream.LongStream;
                longs(arg0: long, arg1: long, arg2: long): java.util.stream.LongStream;
                nextBoolean(): boolean;
                nextBytes(arg0: number[]): void;
                nextDouble(): number;
                nextFloat(): number;
                nextGaussian(): number;
                nextInt(): number;
                nextInt(arg0: number): number;
                nextLong(): long;
                setSeed(arg0: long): void;
            }
            type Random = java.io.Serializable & Random_S & Random$;
            interface RandomAccess_S {
            }
            interface RandomAccess$ {
            }
            type RandomAccess = RandomAccess_S & RandomAccess$;
            interface Set_S {
            }
            interface Set$ {
            }
            type Set = Collection & Set_S & Set$;
            interface SortedMap_S {
            }
            interface SortedMap$ {
                comparator(): (e1: any, e2: any) => number;
                firstKey(): any;
                headMap(arg0: any): this;
                lastKey(): any;
                subMap(arg0: any, arg1: any): this;
                tailMap(arg0: any): this;
            }
            type SortedMap = Map & SortedMap_S & SortedMap$;
            interface SortedSet_S {
            }
            interface SortedSet$ {
                comparator(): (e1: any, e2: any) => number;
                first(): any;
                headSet(arg0: any): this;
                last(): any;
                subSet(arg0: any, arg1: any): this;
                tailSet(arg0: any): this;
            }
            type SortedSet = Set & SortedSet_S & SortedSet$;
            interface Spliterator_S {
                readonly CONCURRENT: number;
                readonly DISTINCT: number;
                readonly IMMUTABLE: number;
                readonly NONNULL: number;
                readonly ORDERED: number;
                readonly SIZED: number;
                readonly SORTED: number;
                readonly SUBSIZED: number;
            }
            interface Spliterator$ {
                characteristics(): number;
                estimateSize(): long;
                forEachRemaining(consumer: (t: any) => void): void;
                getComparator(): (e1: any, e2: any) => number;
                getExactSizeIfKnown(): long;
                hasCharacteristics(arg0: number): boolean;
                tryAdvance(consumer: (t: any) => void): boolean;
                trySplit(): this;
            }
            type Spliterator = Spliterator_S & Spliterator$;
            interface Spliterator$OfDouble_S {
            }
            interface Spliterator$OfDouble$ {
                forEachRemaining(arg0: java.util.function_.DoubleConsumer): void;
                tryAdvance(arg0: java.util.function_.DoubleConsumer): boolean;
            }
            type Spliterator$OfDouble = Spliterator$OfPrimitive & Spliterator$OfDouble_S & Spliterator$OfDouble$;
            interface Spliterator$OfInt_S {
            }
            interface Spliterator$OfInt$ {
                forEachRemaining(arg0: java.util.function_.IntConsumer): void;
                tryAdvance(arg0: java.util.function_.IntConsumer): boolean;
            }
            type Spliterator$OfInt = Spliterator$OfPrimitive & Spliterator$OfInt_S & Spliterator$OfInt$;
            interface Spliterator$OfLong_S {
            }
            interface Spliterator$OfLong$ {
                forEachRemaining(arg0: java.util.function_.LongConsumer): void;
                tryAdvance(arg0: java.util.function_.LongConsumer): boolean;
            }
            type Spliterator$OfLong = Spliterator$OfPrimitive & Spliterator$OfLong_S & Spliterator$OfLong$;
            interface Spliterator$OfPrimitive_S {
            }
            interface Spliterator$OfPrimitive$ {
                forEachRemaining(arg0: any): void;
                tryAdvance(arg0: any): boolean;
            }
            type Spliterator$OfPrimitive = Spliterator & Spliterator$OfPrimitive_S & Spliterator$OfPrimitive$;
            interface TimeZone_S {
                readonly LONG: number;
                readonly SHORT: number;
                getAvailableIDs(): string[];
                getAvailableIDs(arg0: number): string[];
                getDefault(): TimeZone;
                getTimeZone(arg0: java.time.ZoneId): TimeZone;
                getTimeZone(arg0: string): TimeZone;
                setDefault(arg0: TimeZone): void;
            }
            type TimeZone_ST = java.io.Serializable_S & java.lang.Cloneable_S & TimeZone_S;
            interface TimeZone_C extends TimeZone_ST {
                new (): TimeZone;
            }
            interface TimeZone$ {
                clone(): any;
                getDSTSavings(): number;
                getDisplayName(): string;
                getDisplayName(arg0: Locale): string;
                getDisplayName(arg0: boolean, arg1: number): string;
                getDisplayName(arg0: boolean, arg1: number, arg2: Locale): string;
                getID(): string;
                getOffset(arg0: long): number;
                getOffset(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
                getRawOffset(): number;
                hasSameRules(arg0: TimeZone): boolean;
                inDaylightTime(arg0: Date): boolean;
                observesDaylightTime(): boolean;
                setID(arg0: string): void;
                setRawOffset(arg0: number): void;
                toZoneId(): java.time.ZoneId;
                useDaylightTime(): boolean;
            }
            type TimeZone = java.io.Serializable & java.lang.Cloneable & TimeZone_S & TimeZone$;
            interface TreeMap_S {
            }
            type TreeMap_ST = NavigableMap_S & AbstractMap_S & java.io.Serializable_S & java.lang.Cloneable_S & TreeMap_S;
            interface TreeMap_C extends TreeMap_ST {
                new (): TreeMap;
                new (arg0: SortedMap): TreeMap;
                new (arg0: Map): TreeMap;
                new (comparator: (e1: any, e2: any) => number): TreeMap;
            }
            interface TreeMap$ {
                clone(): any;
            }
            type TreeMap = AbstractMap & NavigableMap & java.lang.Cloneable & java.io.Serializable & TreeMap_S & TreeMap$;
            interface TreeSet_S {
            }
            type TreeSet_ST = java.io.Serializable_S & AbstractSet_S & NavigableSet_S & java.lang.Cloneable_S & TreeSet_S;
            interface TreeSet_C extends TreeSet_ST {
                new (): TreeSet;
                new (arg0: SortedSet): TreeSet;
                new (arg0: Collection): TreeSet;
                new (comparator: (e1: any, e2: any) => number): TreeSet;
            }
            interface TreeSet$ {
                clone(): any;
            }
            type TreeSet = AbstractSet & NavigableSet & java.lang.Cloneable & java.io.Serializable & TreeSet_S & TreeSet$;
            interface UUID_S {
                fromString(arg0: string): UUID;
                nameUUIDFromBytes(arg0: number[]): UUID;
                randomUUID(): UUID;
            }
            type UUID_ST = java.lang.Comparable_S & java.io.Serializable_S & UUID_S;
            interface UUID_C extends UUID_ST {
                new (arg0: long, arg1: long): UUID;
            }
            interface UUID$ {
                clockSequence(): number;
                compareTo(arg0: UUID): number;
                getLeastSignificantBits(): long;
                getMostSignificantBits(): long;
                node(): long;
                timestamp(): long;
                variant(): number;
                version(): number;
            }
            type UUID = java.io.Serializable & java.lang.Comparable & UUID_S & UUID$;
            interface Vector_S {
            }
            type Vector_ST = AbstractList_S & RandomAccess_S & java.io.Serializable_S & List_S & java.lang.Cloneable_S & Vector_S;
            interface Vector_C extends Vector_ST {
                new (): Vector;
                new (arg0: Collection): Vector;
                new (arg0: number): Vector;
                new (arg0: number, arg1: number): Vector;
            }
            interface Vector$ {
                addElement(arg0: any): void;
                capacity(): number;
                clone(): any;
                copyInto(arg0: any[]): void;
                elementAt(arg0: number): any;
                elements(): Enumeration;
                ensureCapacity(arg0: number): void;
                firstElement(): any;
                indexOf(arg0: any, arg1: number): number;
                insertElementAt(arg0: any, arg1: number): void;
                lastElement(): any;
                lastIndexOf(arg0: any, arg1: number): number;
                removeAllElements(): void;
                removeElement(arg0: any): boolean;
                removeElementAt(arg0: number): void;
                setElementAt(arg0: any, arg1: number): void;
                setSize(arg0: number): void;
                trimToSize(): void;
            }
            type Vector = AbstractList & List & RandomAccess & java.lang.Cloneable & java.io.Serializable & Vector_S & Vector$;
        }
        namespace java.util.concurrent {
            interface Callable_S {
            }
            interface Callable$ {
                call(): any;
            }
            type Callable = Callable_S & Callable$;
            interface ConcurrentHashMap_S {
                newKeySet(): ConcurrentHashMap$KeySetView;
                newKeySet(arg0: number): ConcurrentHashMap$KeySetView;
            }
            type ConcurrentHashMap_ST = ConcurrentMap_S & AbstractMap_S & java.io.Serializable_S & ConcurrentHashMap_S;
            interface ConcurrentHashMap_C extends ConcurrentHashMap_ST {
                new (): ConcurrentHashMap;
                new (arg0: number): ConcurrentHashMap;
                new (arg0: Map): ConcurrentHashMap;
                new (arg0: number, arg1: number): ConcurrentHashMap;
                new (arg0: number, arg1: number, arg2: number): ConcurrentHashMap;
            }
            interface ConcurrentHashMap$ {
                contains(arg0: any): boolean;
                elements(): Enumeration;
                forEach(arg0: long, biConsumer1: (t: any, u: any) => void): void;
                forEach(arg0: long, biFunc1: (t: any, u: any) => any, consumer2: (t: any) => void): void;
                forEachEntry(arg0: long, consumer1: (t: any) => void): void;
                forEachEntry(arg0: long, func1: (t: any) => any, consumer2: (t: any) => void): void;
                forEachKey(arg0: long, consumer1: (t: any) => void): void;
                forEachKey(arg0: long, func1: (t: any) => any, consumer2: (t: any) => void): void;
                forEachValue(arg0: long, consumer1: (t: any) => void): void;
                forEachValue(arg0: long, func1: (t: any) => any, consumer2: (t: any) => void): void;
                keySet(arg0: any): ConcurrentHashMap$KeySetView;
                keys(): Enumeration;
                mappingCount(): long;
                reduce(arg0: long, biFunc1: (t: any, u: any) => any, biFunc2: (t: any, u: any) => any): any;
                reduceEntries(arg0: long, biFunc1: (t: any, u: any) => any): Map$Entry;
                reduceEntries(arg0: long, func1: (t: any) => any, biFunc2: (t: any, u: any) => any): any;
                reduceEntriesToDouble(arg0: long, arg1: java.util.function_.ToDoubleFunction, arg2: number, arg3: java.util.function_.DoubleBinaryOperator): number;
                reduceEntriesToInt(arg0: long, arg1: java.util.function_.ToIntFunction, arg2: number, arg3: java.util.function_.IntBinaryOperator): number;
                reduceEntriesToLong(arg0: long, arg1: java.util.function_.ToLongFunction, arg2: long, arg3: java.util.function_.LongBinaryOperator): long;
                reduceKeys(arg0: long, biFunc1: (t: any, u: any) => any): any;
                reduceKeys(arg0: long, func1: (t: any) => any, biFunc2: (t: any, u: any) => any): any;
                reduceKeysToDouble(arg0: long, arg1: java.util.function_.ToDoubleFunction, arg2: number, arg3: java.util.function_.DoubleBinaryOperator): number;
                reduceKeysToInt(arg0: long, arg1: java.util.function_.ToIntFunction, arg2: number, arg3: java.util.function_.IntBinaryOperator): number;
                reduceKeysToLong(arg0: long, arg1: java.util.function_.ToLongFunction, arg2: long, arg3: java.util.function_.LongBinaryOperator): long;
                reduceToDouble(arg0: long, arg1: java.util.function_.ToDoubleBiFunction, arg2: number, arg3: java.util.function_.DoubleBinaryOperator): number;
                reduceToInt(arg0: long, arg1: java.util.function_.ToIntBiFunction, arg2: number, arg3: java.util.function_.IntBinaryOperator): number;
                reduceToLong(arg0: long, arg1: java.util.function_.ToLongBiFunction, arg2: long, arg3: java.util.function_.LongBinaryOperator): long;
                reduceValues(arg0: long, biFunc1: (t: any, u: any) => any): any;
                reduceValues(arg0: long, func1: (t: any) => any, biFunc2: (t: any, u: any) => any): any;
                reduceValuesToDouble(arg0: long, arg1: java.util.function_.ToDoubleFunction, arg2: number, arg3: java.util.function_.DoubleBinaryOperator): number;
                reduceValuesToInt(arg0: long, arg1: java.util.function_.ToIntFunction, arg2: number, arg3: java.util.function_.IntBinaryOperator): number;
                reduceValuesToLong(arg0: long, arg1: java.util.function_.ToLongFunction, arg2: long, arg3: java.util.function_.LongBinaryOperator): long;
                search(arg0: long, biFunc1: (t: any, u: any) => any): any;
                searchEntries(arg0: long, func1: (t: any) => any): any;
                searchKeys(arg0: long, func1: (t: any) => any): any;
                searchValues(arg0: long, func1: (t: any) => any): any;
            }
            type ConcurrentHashMap = AbstractMap & ConcurrentMap & java.io.Serializable & ConcurrentHashMap_S & ConcurrentHashMap$;
            interface ConcurrentHashMap$KeySetView_S {
            }
            type ConcurrentHashMap$KeySetView_ST = java.io.Serializable_S & Set_S & __ConcurrentHashMap$CollectionView_S & ConcurrentHashMap$KeySetView_S;
            interface ConcurrentHashMap$KeySetView_C extends ConcurrentHashMap$KeySetView_ST {
                new (): ConcurrentHashMap$KeySetView;
            }
            interface ConcurrentHashMap$KeySetView$ {
                getMappedValue(): any;
            }
            type ConcurrentHashMap$KeySetView = __ConcurrentHashMap$CollectionView & Set & java.io.Serializable & ConcurrentHashMap$KeySetView_S & ConcurrentHashMap$KeySetView$;
            interface ConcurrentMap_S {
            }
            interface ConcurrentMap$ {
            }
            type ConcurrentMap = Map & ConcurrentMap_S & ConcurrentMap$;
            interface Executor_S {
            }
            interface Executor$ {
                execute(arg0: java.lang.Runnable): void;
            }
            type Executor = Executor_S & Executor$;
            interface ExecutorService_S {
            }
            interface ExecutorService$ {
                awaitTermination(arg0: long, arg1: TimeUnit): boolean;
                invokeAll(arg0: Collection): List;
                invokeAll(arg0: Collection, arg1: long, arg2: TimeUnit): List;
                invokeAny(arg0: Collection): any;
                invokeAny(arg0: Collection, arg1: long, arg2: TimeUnit): any;
                isShutdown(): boolean;
                isTerminated(): boolean;
                shutdown(): void;
                shutdownNow(): List;
                submit(arg0: Callable): Future;
                submit(arg0: java.lang.Runnable): Future;
                submit(arg0: java.lang.Runnable, arg1: any): Future;
            }
            type ExecutorService = Executor & ExecutorService_S & ExecutorService$;
            interface Future_S {
            }
            interface Future$ {
                cancel(arg0: boolean): boolean;
                get(): any;
                get(arg0: long, arg1: TimeUnit): any;
                isCancelled(): boolean;
                isDone(): boolean;
            }
            type Future = Future_S & Future$;
            enum TimeUnit {
                NANOSECONDS,
                MICROSECONDS,
                MILLISECONDS,
                SECONDS,
                MINUTES,
                HOURS,
                DAYS
            }
            interface __ConcurrentHashMap$CollectionView_S {
            }
            type __ConcurrentHashMap$CollectionView_ST = Collection_S & java.io.Serializable_S & __ConcurrentHashMap$CollectionView_S;
            interface __ConcurrentHashMap$CollectionView_C extends __ConcurrentHashMap$CollectionView_ST {
            }
            interface __ConcurrentHashMap$CollectionView$ {
                getMap(): ConcurrentHashMap;
            }
            type __ConcurrentHashMap$CollectionView = Collection & java.io.Serializable & __ConcurrentHashMap$CollectionView_S & __ConcurrentHashMap$CollectionView$;
        }
        namespace java.util.concurrent.atomic {
            interface AtomicReference_S {
            }
            type AtomicReference_ST = java.io.Serializable_S & AtomicReference_S;
            interface AtomicReference_C extends AtomicReference_ST {
                new (): AtomicReference;
                new (arg0: any): AtomicReference;
            }
            interface AtomicReference$ {
                accumulateAndGet(arg0: any, arg1: java.util.function_.BinaryOperator): any;
                compareAndSet(arg0: any, arg1: any): boolean;
                get(): any;
                getAndAccumulate(arg0: any, arg1: java.util.function_.BinaryOperator): any;
                getAndSet(arg0: any): any;
                getAndUpdate(arg0: java.util.function_.UnaryOperator): any;
                lazySet(arg0: any): void;
                set(arg0: any): void;
                updateAndGet(arg0: java.util.function_.UnaryOperator): any;
                weakCompareAndSet(arg0: any, arg1: any): boolean;
            }
            type AtomicReference = java.io.Serializable & AtomicReference_S & AtomicReference$;
        }
        namespace java.util.function_ {
            interface BiConsumer_S {
            }
            interface BiConsumer$ {
                accept(arg0: any, arg1: any): void;
                andThen(biConsumer: (t: any, u: any) => void): (t: any, u: any) => void;
            }
            type BiConsumer = BiConsumer_S & BiConsumer$;
            interface BiFunction_S {
            }
            interface BiFunction$ {
                andThen(func: (t: any) => any): (t: any, u: any) => any;
                apply(arg0: any, arg1: any): any;
            }
            type BiFunction = BiFunction_S & BiFunction$;
            interface BinaryOperator_S {
                maxBy(comparator: (e1: any, e2: any) => number): BinaryOperator;
                minBy(comparator: (e1: any, e2: any) => number): BinaryOperator;
            }
            interface BinaryOperator$ {
            }
            type BinaryOperator = BiFunction & BinaryOperator_S & BinaryOperator$;
            interface Consumer_S {
            }
            interface Consumer$ {
                accept(arg0: any): void;
                andThen(consumer: (t: any) => void): (t: any) => void;
            }
            type Consumer = Consumer_S & Consumer$;
            interface DoubleBinaryOperator_S {
            }
            interface DoubleBinaryOperator$ {
                applyAsDouble(arg0: number, arg1: number): number;
            }
            type DoubleBinaryOperator = DoubleBinaryOperator_S & DoubleBinaryOperator$;
            interface DoubleConsumer_S {
            }
            interface DoubleConsumer$ {
                accept(arg0: number): void;
                andThen(arg0: DoubleConsumer): this;
            }
            type DoubleConsumer = DoubleConsumer_S & DoubleConsumer$;
            interface DoubleFunction_S {
            }
            interface DoubleFunction$ {
                apply(arg0: number): any;
            }
            type DoubleFunction = DoubleFunction_S & DoubleFunction$;
            interface DoublePredicate_S {
            }
            interface DoublePredicate$ {
                and(arg0: DoublePredicate): this;
                negate(): this;
                or(arg0: DoublePredicate): this;
                test(arg0: number): boolean;
            }
            type DoublePredicate = DoublePredicate_S & DoublePredicate$;
            interface DoubleSupplier_S {
            }
            interface DoubleSupplier$ {
                getAsDouble(): number;
            }
            type DoubleSupplier = DoubleSupplier_S & DoubleSupplier$;
            interface DoubleToIntFunction_S {
            }
            interface DoubleToIntFunction$ {
                applyAsInt(arg0: number): number;
            }
            type DoubleToIntFunction = DoubleToIntFunction_S & DoubleToIntFunction$;
            interface DoubleToLongFunction_S {
            }
            interface DoubleToLongFunction$ {
                applyAsLong(arg0: number): long;
            }
            type DoubleToLongFunction = DoubleToLongFunction_S & DoubleToLongFunction$;
            interface DoubleUnaryOperator_S {
                identity(): DoubleUnaryOperator;
            }
            interface DoubleUnaryOperator$ {
                andThen(arg0: DoubleUnaryOperator): this;
                applyAsDouble(arg0: number): number;
                compose(arg0: DoubleUnaryOperator): this;
            }
            type DoubleUnaryOperator = DoubleUnaryOperator_S & DoubleUnaryOperator$;
            interface Function_S {
                identity(): (t: any) => any;
            }
            interface Function$ {
                andThen(func: (t: any) => any): (t: any) => any;
                apply(arg0: any): any;
                compose(func: (t: any) => any): (t: any) => any;
            }
            type Function = Function_S & Function$;
            interface IntBinaryOperator_S {
            }
            interface IntBinaryOperator$ {
                applyAsInt(arg0: number, arg1: number): number;
            }
            type IntBinaryOperator = IntBinaryOperator_S & IntBinaryOperator$;
            interface IntConsumer_S {
            }
            interface IntConsumer$ {
                accept(arg0: number): void;
                andThen(arg0: IntConsumer): this;
            }
            type IntConsumer = IntConsumer_S & IntConsumer$;
            interface IntFunction_S {
            }
            interface IntFunction$ {
                apply(arg0: number): any;
            }
            type IntFunction = IntFunction_S & IntFunction$;
            interface IntPredicate_S {
            }
            interface IntPredicate$ {
                and(arg0: IntPredicate): this;
                negate(): this;
                or(arg0: IntPredicate): this;
                test(arg0: number): boolean;
            }
            type IntPredicate = IntPredicate_S & IntPredicate$;
            interface IntSupplier_S {
            }
            interface IntSupplier$ {
                getAsInt(): number;
            }
            type IntSupplier = IntSupplier_S & IntSupplier$;
            interface IntToDoubleFunction_S {
            }
            interface IntToDoubleFunction$ {
                applyAsDouble(arg0: number): number;
            }
            type IntToDoubleFunction = IntToDoubleFunction_S & IntToDoubleFunction$;
            interface IntToLongFunction_S {
            }
            interface IntToLongFunction$ {
                applyAsLong(arg0: number): long;
            }
            type IntToLongFunction = IntToLongFunction_S & IntToLongFunction$;
            interface IntUnaryOperator_S {
                identity(): IntUnaryOperator;
            }
            interface IntUnaryOperator$ {
                andThen(arg0: IntUnaryOperator): this;
                applyAsInt(arg0: number): number;
                compose(arg0: IntUnaryOperator): this;
            }
            type IntUnaryOperator = IntUnaryOperator_S & IntUnaryOperator$;
            interface LongBinaryOperator_S {
            }
            interface LongBinaryOperator$ {
                applyAsLong(arg0: long, arg1: long): long;
            }
            type LongBinaryOperator = LongBinaryOperator_S & LongBinaryOperator$;
            interface LongConsumer_S {
            }
            interface LongConsumer$ {
                accept(arg0: long): void;
                andThen(arg0: LongConsumer): this;
            }
            type LongConsumer = LongConsumer_S & LongConsumer$;
            interface LongFunction_S {
            }
            interface LongFunction$ {
                apply(arg0: long): any;
            }
            type LongFunction = LongFunction_S & LongFunction$;
            interface LongPredicate_S {
            }
            interface LongPredicate$ {
                and(arg0: LongPredicate): this;
                negate(): this;
                or(arg0: LongPredicate): this;
                test(arg0: long): boolean;
            }
            type LongPredicate = LongPredicate_S & LongPredicate$;
            interface LongSupplier_S {
            }
            interface LongSupplier$ {
                getAsLong(): long;
            }
            type LongSupplier = LongSupplier_S & LongSupplier$;
            interface LongToDoubleFunction_S {
            }
            interface LongToDoubleFunction$ {
                applyAsDouble(arg0: long): number;
            }
            type LongToDoubleFunction = LongToDoubleFunction_S & LongToDoubleFunction$;
            interface LongToIntFunction_S {
            }
            interface LongToIntFunction$ {
                applyAsInt(arg0: long): number;
            }
            type LongToIntFunction = LongToIntFunction_S & LongToIntFunction$;
            interface LongUnaryOperator_S {
                identity(): LongUnaryOperator;
            }
            interface LongUnaryOperator$ {
                andThen(arg0: LongUnaryOperator): this;
                applyAsLong(arg0: long): long;
                compose(arg0: LongUnaryOperator): this;
            }
            type LongUnaryOperator = LongUnaryOperator_S & LongUnaryOperator$;
            interface ObjDoubleConsumer_S {
            }
            interface ObjDoubleConsumer$ {
                accept(arg0: any, arg1: number): void;
            }
            type ObjDoubleConsumer = ObjDoubleConsumer_S & ObjDoubleConsumer$;
            interface ObjIntConsumer_S {
            }
            interface ObjIntConsumer$ {
                accept(arg0: any, arg1: number): void;
            }
            type ObjIntConsumer = ObjIntConsumer_S & ObjIntConsumer$;
            interface ObjLongConsumer_S {
            }
            interface ObjLongConsumer$ {
                accept(arg0: any, arg1: long): void;
            }
            type ObjLongConsumer = ObjLongConsumer_S & ObjLongConsumer$;
            interface Predicate_S {
                isEqual(arg0: any): (t: any) => boolean;
            }
            interface Predicate$ {
                and(predicate: (t: any) => boolean): (t: any) => boolean;
                negate(): (t: any) => boolean;
                or(predicate: (t: any) => boolean): (t: any) => boolean;
                test(arg0: any): boolean;
            }
            type Predicate = Predicate_S & Predicate$;
            interface Supplier_S {
            }
            interface Supplier$ {
                get(): any;
            }
            type Supplier = Supplier_S & Supplier$;
            interface ToDoubleBiFunction_S {
            }
            interface ToDoubleBiFunction$ {
                applyAsDouble(arg0: any, arg1: any): number;
            }
            type ToDoubleBiFunction = ToDoubleBiFunction_S & ToDoubleBiFunction$;
            interface ToDoubleFunction_S {
            }
            interface ToDoubleFunction$ {
                applyAsDouble(arg0: any): number;
            }
            type ToDoubleFunction = ToDoubleFunction_S & ToDoubleFunction$;
            interface ToIntBiFunction_S {
            }
            interface ToIntBiFunction$ {
                applyAsInt(arg0: any, arg1: any): number;
            }
            type ToIntBiFunction = ToIntBiFunction_S & ToIntBiFunction$;
            interface ToIntFunction_S {
            }
            interface ToIntFunction$ {
                applyAsInt(arg0: any): number;
            }
            type ToIntFunction = ToIntFunction_S & ToIntFunction$;
            interface ToLongBiFunction_S {
            }
            interface ToLongBiFunction$ {
                applyAsLong(arg0: any, arg1: any): long;
            }
            type ToLongBiFunction = ToLongBiFunction_S & ToLongBiFunction$;
            interface ToLongFunction_S {
            }
            interface ToLongFunction$ {
                applyAsLong(arg0: any): long;
            }
            type ToLongFunction = ToLongFunction_S & ToLongFunction$;
            interface UnaryOperator_S {
            }
            interface UnaryOperator$ {
            }
            type UnaryOperator = Function & UnaryOperator_S & UnaryOperator$;
        }
        namespace java.util.regex {
            interface MatchResult_S {
            }
            interface MatchResult$ {
                end(): number;
                end(arg0: number): number;
                group(): string;
                group(arg0: number): string;
                groupCount(): number;
                start(): number;
                start(arg0: number): number;
            }
            type MatchResult = MatchResult_S & MatchResult$;
            interface Matcher_S {
                quoteReplacement(arg0: string): string;
            }
            type Matcher_ST = MatchResult_S & Matcher_S;
            interface Matcher_C extends Matcher_ST {
                new (): Matcher;
            }
            interface Matcher$ {
                appendReplacement(arg0: java.lang.StringBuffer, arg1: string): this;
                appendTail(arg0: java.lang.StringBuffer): java.lang.StringBuffer;
                end(arg0: string): number;
                find(): boolean;
                find(arg0: number): boolean;
                group(arg0: string): string;
                hasAnchoringBounds(): boolean;
                hasTransparentBounds(): boolean;
                hitEnd(): boolean;
                lookingAt(): boolean;
                matches(): boolean;
                pattern(): Pattern;
                region(arg0: number, arg1: number): this;
                regionEnd(): number;
                regionStart(): number;
                replaceAll(arg0: string): string;
                replaceFirst(arg0: string): string;
                requireEnd(): boolean;
                reset(): this;
                reset(arg0: java.lang.CharSequence): this;
                start(arg0: string): number;
                toMatchResult(): MatchResult;
                useAnchoringBounds(arg0: boolean): this;
                usePattern(arg0: Pattern): this;
                useTransparentBounds(arg0: boolean): this;
            }
            type Matcher = MatchResult & Matcher_S & Matcher$;
            interface Pattern_S {
                readonly CANON_EQ: number;
                readonly CASE_INSENSITIVE: number;
                readonly COMMENTS: number;
                readonly DOTALL: number;
                readonly LITERAL: number;
                readonly MULTILINE: number;
                readonly UNICODE_CASE: number;
                readonly UNICODE_CHARACTER_CLASS: number;
                readonly UNIX_LINES: number;
                compile(arg0: string): Pattern;
                compile(arg0: string, arg1: number): Pattern;
                matches(arg0: string, arg1: java.lang.CharSequence): boolean;
                quote(arg0: string): string;
            }
            type Pattern_ST = java.io.Serializable_S & Pattern_S;
            interface Pattern_C extends Pattern_ST {
                new (): Pattern;
            }
            interface Pattern$ {
                asPredicate(): (t: any) => boolean;
                flags(): number;
                matcher(arg0: java.lang.CharSequence): Matcher;
                pattern(): string;
                split(arg0: java.lang.CharSequence): string[];
                split(arg0: java.lang.CharSequence, arg1: number): string[];
                splitAsStream(arg0: java.lang.CharSequence): java.util.stream.Stream;
            }
            type Pattern = java.io.Serializable & Pattern_S & Pattern$;
        }
        namespace java.util.stream {
            interface BaseStream_S {
            }
            interface BaseStream$ {
                isParallel(): boolean;
                iterator(): Iterator;
                onClose(arg0: java.lang.Runnable): this;
                parallel(): this;
                sequential(): this;
                spliterator(): Spliterator;
                unordered(): this;
            }
            type BaseStream = java.lang.AutoCloseable & BaseStream_S & BaseStream$;
            interface Collector_S {
                of(supplier0: () => any, biConsumer1: (t: any, u: any) => void, arg2: java.util.function_.BinaryOperator, ...arg3: Collector$Characteristics[]): Collector;
                of(supplier0: () => any, biConsumer1: (t: any, u: any) => void, arg2: java.util.function_.BinaryOperator, func3: (t: any) => any, ...arg4: Collector$Characteristics[]): Collector;
            }
            interface Collector$ {
                accumulator(): (t: any, u: any) => void;
                characteristics(): Set;
                combiner(): java.util.function_.BinaryOperator;
                finisher(): (t: any) => any;
                supplier(): () => any;
            }
            type Collector = Collector_S & Collector$;
            enum Collector$Characteristics {
                CONCURRENT,
                UNORDERED,
                IDENTITY_FINISH
            }
            interface DoubleStream_S {
                builder(): DoubleStream$Builder;
                concat(arg0: DoubleStream, arg1: DoubleStream): DoubleStream;
                empty(): DoubleStream;
                generate(arg0: java.util.function_.DoubleSupplier): DoubleStream;
                iterate(arg0: number, arg1: java.util.function_.DoubleUnaryOperator): DoubleStream;
                of(...arg0: number[]): DoubleStream;
                of(arg0: number): DoubleStream;
            }
            interface DoubleStream$ {
                allMatch(arg0: java.util.function_.DoublePredicate): boolean;
                anyMatch(arg0: java.util.function_.DoublePredicate): boolean;
                average(): OptionalDouble;
                boxed(): Stream;
                collect(supplier0: () => any, arg1: java.util.function_.ObjDoubleConsumer, biConsumer2: (t: any, u: any) => void): any;
                count(): long;
                distinct(): this;
                filter(arg0: java.util.function_.DoublePredicate): this;
                findAny(): OptionalDouble;
                findFirst(): OptionalDouble;
                flatMap(arg0: java.util.function_.DoubleFunction): this;
                forEach(arg0: java.util.function_.DoubleConsumer): void;
                forEachOrdered(arg0: java.util.function_.DoubleConsumer): void;
                limit(arg0: long): this;
                map(arg0: java.util.function_.DoubleUnaryOperator): this;
                mapToInt(arg0: java.util.function_.DoubleToIntFunction): IntStream;
                mapToLong(arg0: java.util.function_.DoubleToLongFunction): LongStream;
                mapToObj(arg0: java.util.function_.DoubleFunction): Stream;
                max(): OptionalDouble;
                min(): OptionalDouble;
                noneMatch(arg0: java.util.function_.DoublePredicate): boolean;
                peek(arg0: java.util.function_.DoubleConsumer): this;
                reduce(arg0: java.util.function_.DoubleBinaryOperator): OptionalDouble;
                reduce(arg0: number, arg1: java.util.function_.DoubleBinaryOperator): number;
                skip(arg0: long): this;
                sorted(): this;
                sum(): number;
                summaryStatistics(): DoubleSummaryStatistics;
                toArray(): number[];
            }
            type DoubleStream = BaseStream & DoubleStream_S & DoubleStream$;
            interface DoubleStream$Builder_S {
            }
            interface DoubleStream$Builder$ {
                add(arg0: number): this;
                build(): DoubleStream;
            }
            type DoubleStream$Builder = java.util.function_.DoubleConsumer & DoubleStream$Builder_S & DoubleStream$Builder$;
            interface IntStream_S {
                builder(): IntStream$Builder;
                concat(arg0: IntStream, arg1: IntStream): IntStream;
                empty(): IntStream;
                generate(arg0: java.util.function_.IntSupplier): IntStream;
                iterate(arg0: number, arg1: java.util.function_.IntUnaryOperator): IntStream;
                of(...arg0: number[]): IntStream;
                of(arg0: number): IntStream;
                range(arg0: number, arg1: number): IntStream;
                rangeClosed(arg0: number, arg1: number): IntStream;
            }
            interface IntStream$ {
                allMatch(arg0: java.util.function_.IntPredicate): boolean;
                anyMatch(arg0: java.util.function_.IntPredicate): boolean;
                asDoubleStream(): DoubleStream;
                asLongStream(): LongStream;
                average(): OptionalDouble;
                boxed(): Stream;
                collect(supplier0: () => any, arg1: java.util.function_.ObjIntConsumer, biConsumer2: (t: any, u: any) => void): any;
                count(): long;
                distinct(): this;
                filter(arg0: java.util.function_.IntPredicate): this;
                findAny(): OptionalInt;
                findFirst(): OptionalInt;
                flatMap(arg0: java.util.function_.IntFunction): this;
                forEach(arg0: java.util.function_.IntConsumer): void;
                forEachOrdered(arg0: java.util.function_.IntConsumer): void;
                limit(arg0: long): this;
                map(arg0: java.util.function_.IntUnaryOperator): this;
                mapToDouble(arg0: java.util.function_.IntToDoubleFunction): DoubleStream;
                mapToLong(arg0: java.util.function_.IntToLongFunction): LongStream;
                mapToObj(arg0: java.util.function_.IntFunction): Stream;
                max(): OptionalInt;
                min(): OptionalInt;
                noneMatch(arg0: java.util.function_.IntPredicate): boolean;
                peek(arg0: java.util.function_.IntConsumer): this;
                reduce(arg0: java.util.function_.IntBinaryOperator): OptionalInt;
                reduce(arg0: number, arg1: java.util.function_.IntBinaryOperator): number;
                skip(arg0: long): this;
                sorted(): this;
                sum(): number;
                summaryStatistics(): IntSummaryStatistics;
                toArray(): number[];
            }
            type IntStream = BaseStream & IntStream_S & IntStream$;
            interface IntStream$Builder_S {
            }
            interface IntStream$Builder$ {
                add(arg0: number): this;
                build(): IntStream;
            }
            type IntStream$Builder = java.util.function_.IntConsumer & IntStream$Builder_S & IntStream$Builder$;
            interface LongStream_S {
                builder(): LongStream$Builder;
                concat(arg0: LongStream, arg1: LongStream): LongStream;
                empty(): LongStream;
                generate(arg0: java.util.function_.LongSupplier): LongStream;
                iterate(arg0: long, arg1: java.util.function_.LongUnaryOperator): LongStream;
                of(...arg0: long[]): LongStream;
                of(arg0: long): LongStream;
                range(arg0: long, arg1: long): LongStream;
                rangeClosed(arg0: long, arg1: long): LongStream;
            }
            interface LongStream$ {
                allMatch(arg0: java.util.function_.LongPredicate): boolean;
                anyMatch(arg0: java.util.function_.LongPredicate): boolean;
                asDoubleStream(): DoubleStream;
                average(): OptionalDouble;
                boxed(): Stream;
                collect(supplier0: () => any, arg1: java.util.function_.ObjLongConsumer, biConsumer2: (t: any, u: any) => void): any;
                count(): long;
                distinct(): this;
                filter(arg0: java.util.function_.LongPredicate): this;
                findAny(): OptionalLong;
                findFirst(): OptionalLong;
                flatMap(arg0: java.util.function_.LongFunction): this;
                forEach(arg0: java.util.function_.LongConsumer): void;
                forEachOrdered(arg0: java.util.function_.LongConsumer): void;
                limit(arg0: long): this;
                map(arg0: java.util.function_.LongUnaryOperator): this;
                mapToDouble(arg0: java.util.function_.LongToDoubleFunction): DoubleStream;
                mapToInt(arg0: java.util.function_.LongToIntFunction): IntStream;
                mapToObj(arg0: java.util.function_.LongFunction): Stream;
                max(): OptionalLong;
                min(): OptionalLong;
                noneMatch(arg0: java.util.function_.LongPredicate): boolean;
                peek(arg0: java.util.function_.LongConsumer): this;
                reduce(arg0: java.util.function_.LongBinaryOperator): OptionalLong;
                reduce(arg0: long, arg1: java.util.function_.LongBinaryOperator): long;
                skip(arg0: long): this;
                sorted(): this;
                sum(): long;
                summaryStatistics(): LongSummaryStatistics;
                toArray(): long[];
            }
            type LongStream = BaseStream & LongStream_S & LongStream$;
            interface LongStream$Builder_S {
            }
            interface LongStream$Builder$ {
                add(arg0: long): this;
                build(): LongStream;
            }
            type LongStream$Builder = java.util.function_.LongConsumer & LongStream$Builder_S & LongStream$Builder$;
            interface Stream_S {
                builder(): Stream$Builder;
                concat(arg0: Stream, arg1: Stream): Stream;
                empty(): Stream;
                generate(supplier: () => any): Stream;
                iterate(arg0: any, arg1: java.util.function_.UnaryOperator): Stream;
                of(arg0: any): Stream;
                of(...arg0: any[]): Stream;
            }
            interface Stream$ {
                allMatch(predicate: (t: any) => boolean): boolean;
                anyMatch(predicate: (t: any) => boolean): boolean;
                collect(arg0: Collector): any;
                collect(supplier0: () => any, biConsumer1: (t: any, u: any) => void, biConsumer2: (t: any, u: any) => void): any;
                count(): long;
                distinct(): this;
                filter(predicate: (t: any) => boolean): this;
                findAny(): Optional;
                findFirst(): Optional;
                flatMap(func: (t: any) => any): this;
                flatMapToDouble(func: (t: any) => any): DoubleStream;
                flatMapToInt(func: (t: any) => any): IntStream;
                flatMapToLong(func: (t: any) => any): LongStream;
                forEach(consumer: (t: any) => void): void;
                forEachOrdered(consumer: (t: any) => void): void;
                limit(arg0: long): this;
                map(func: (t: any) => any): this;
                mapToDouble(arg0: java.util.function_.ToDoubleFunction): DoubleStream;
                mapToInt(arg0: java.util.function_.ToIntFunction): IntStream;
                mapToLong(arg0: java.util.function_.ToLongFunction): LongStream;
                max(comparator: (e1: any, e2: any) => number): Optional;
                min(comparator: (e1: any, e2: any) => number): Optional;
                noneMatch(predicate: (t: any) => boolean): boolean;
                peek(consumer: (t: any) => void): this;
                reduce(arg0: java.util.function_.BinaryOperator): Optional;
                reduce(arg0: any, arg1: java.util.function_.BinaryOperator): any;
                reduce(arg0: any, biFunc1: (t: any, u: any) => any, arg2: java.util.function_.BinaryOperator): any;
                skip(arg0: long): this;
                sorted(): this;
                sorted(comparator: (e1: any, e2: any) => number): this;
                toArray(): any[];
                toArray(arg0: java.util.function_.IntFunction): any[];
            }
            type Stream = BaseStream & Stream_S & Stream$;
            interface Stream$Builder_S {
            }
            interface Stream$Builder$ {
                add(arg0: any): this;
                build(): Stream;
            }
            type Stream$Builder = java.util.function_.Consumer & Stream$Builder_S & Stream$Builder$;
        }
        namespace java.util.zip {
            interface ZipEntry_S {
                readonly DEFLATED: number;
                readonly STORED: number;
            }
            type ZipEntry_ST = __ZipConstants_S & java.lang.Cloneable_S & ZipEntry_S;
            interface ZipEntry_C extends ZipEntry_ST {
                new (arg0: ZipEntry): ZipEntry;
                new (arg0: string): ZipEntry;
            }
            interface ZipEntry$ {
                clone(): any;
                getComment(): string;
                getCompressedSize(): long;
                getCrc(): long;
                getCreationTime(): java.nio.file.attribute.FileTime;
                getExtra(): number[];
                getLastAccessTime(): java.nio.file.attribute.FileTime;
                getLastModifiedTime(): java.nio.file.attribute.FileTime;
                getMethod(): number;
                getName(): string;
                getSize(): long;
                getTime(): long;
                isDirectory(): boolean;
                setComment(arg0: string): void;
                setCompressedSize(arg0: long): void;
                setCrc(arg0: long): void;
                setCreationTime(arg0: java.nio.file.attribute.FileTime): this;
                setExtra(arg0: number[]): void;
                setLastAccessTime(arg0: java.nio.file.attribute.FileTime): this;
                setLastModifiedTime(arg0: java.nio.file.attribute.FileTime): this;
                setMethod(arg0: number): void;
                setSize(arg0: long): void;
                setTime(arg0: long): void;
            }
            type ZipEntry = __ZipConstants & java.lang.Cloneable & ZipEntry_S & ZipEntry$;
            interface __ZipConstants_S {
                readonly CENATT: number;
                readonly CENATX: number;
                readonly CENCOM: number;
                readonly CENCRC: number;
                readonly CENDSK: number;
                readonly CENEXT: number;
                readonly CENFLG: number;
                readonly CENHDR: number;
                readonly CENHOW: number;
                readonly CENLEN: number;
                readonly CENNAM: number;
                readonly CENOFF: number;
                readonly CENSIG: long;
                readonly CENSIZ: number;
                readonly CENTIM: number;
                readonly CENVEM: number;
                readonly CENVER: number;
                readonly ENDCOM: number;
                readonly ENDHDR: number;
                readonly ENDOFF: number;
                readonly ENDSIG: long;
                readonly ENDSIZ: number;
                readonly ENDSUB: number;
                readonly ENDTOT: number;
                readonly EXTCRC: number;
                readonly EXTHDR: number;
                readonly EXTLEN: number;
                readonly EXTSIG: long;
                readonly EXTSIZ: number;
                readonly LOCCRC: number;
                readonly LOCEXT: number;
                readonly LOCFLG: number;
                readonly LOCHDR: number;
                readonly LOCHOW: number;
                readonly LOCLEN: number;
                readonly LOCNAM: number;
                readonly LOCSIG: long;
                readonly LOCSIZ: number;
                readonly LOCTIM: number;
                readonly LOCVER: number;
            }
            interface __ZipConstants$ {
            }
            type __ZipConstants = __ZipConstants_S & __ZipConstants$;
        }
        namespace javax.accessibility {
            interface Accessible_S {
            }
            interface Accessible$ {
                getAccessibleContext(): AccessibleContext;
            }
            type Accessible = Accessible_S & Accessible$;
            interface AccessibleAction_S {
                readonly CLICK: string;
                readonly DECREMENT: string;
                readonly INCREMENT: string;
                readonly TOGGLE_EXPAND: string;
                readonly TOGGLE_POPUP: string;
            }
            interface AccessibleAction$ {
                doAccessibleAction(arg0: number): boolean;
                getAccessibleActionCount(): number;
                getAccessibleActionDescription(arg0: number): string;
            }
            type AccessibleAction = AccessibleAction_S & AccessibleAction$;
            interface AccessibleBundle_S {
            }
            interface AccessibleBundle_C extends AccessibleBundle_S {
                new (): AccessibleBundle;
            }
            interface AccessibleBundle$ {
                toDisplayString(): string;
                toDisplayString(arg0: java.util.Locale): string;
            }
            type AccessibleBundle = AccessibleBundle_S & AccessibleBundle$;
            interface AccessibleComponent_S {
            }
            interface AccessibleComponent$ {
                addFocusListener(arg0: java.awt.event.FocusListener): void;
                contains(arg0: java.awt.Point): boolean;
                getAccessibleAt(arg0: java.awt.Point): Accessible;
                getBackground(): java.awt.Color;
                getBounds(): java.awt.Rectangle;
                getCursor(): java.awt.Cursor;
                getFont(): java.awt.Font;
                getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics;
                getForeground(): java.awt.Color;
                getLocation(): java.awt.Point;
                getLocationOnScreen(): java.awt.Point;
                getSize(): java.awt.Dimension;
                isEnabled(): boolean;
                isFocusTraversable(): boolean;
                isShowing(): boolean;
                isVisible(): boolean;
                removeFocusListener(arg0: java.awt.event.FocusListener): void;
                requestFocus(): void;
                setBackground(arg0: java.awt.Color): void;
                setBounds(arg0: java.awt.Rectangle): void;
                setCursor(arg0: java.awt.Cursor): void;
                setEnabled(arg0: boolean): void;
                setFont(arg0: java.awt.Font): void;
                setForeground(arg0: java.awt.Color): void;
                setLocation(arg0: java.awt.Point): void;
                setSize(arg0: java.awt.Dimension): void;
                setVisible(arg0: boolean): void;
            }
            type AccessibleComponent = AccessibleComponent_S & AccessibleComponent$;
            interface AccessibleContext_S {
                readonly ACCESSIBLE_ACTION_PROPERTY: string;
                readonly ACCESSIBLE_ACTIVE_DESCENDANT_PROPERTY: string;
                readonly ACCESSIBLE_CARET_PROPERTY: string;
                readonly ACCESSIBLE_CHILD_PROPERTY: string;
                readonly ACCESSIBLE_COMPONENT_BOUNDS_CHANGED: string;
                readonly ACCESSIBLE_DESCRIPTION_PROPERTY: string;
                readonly ACCESSIBLE_HYPERTEXT_OFFSET: string;
                readonly ACCESSIBLE_INVALIDATE_CHILDREN: string;
                readonly ACCESSIBLE_NAME_PROPERTY: string;
                readonly ACCESSIBLE_SELECTION_PROPERTY: string;
                readonly ACCESSIBLE_STATE_PROPERTY: string;
                readonly ACCESSIBLE_TABLE_CAPTION_CHANGED: string;
                readonly ACCESSIBLE_TABLE_COLUMN_DESCRIPTION_CHANGED: string;
                readonly ACCESSIBLE_TABLE_COLUMN_HEADER_CHANGED: string;
                readonly ACCESSIBLE_TABLE_MODEL_CHANGED: string;
                readonly ACCESSIBLE_TABLE_ROW_DESCRIPTION_CHANGED: string;
                readonly ACCESSIBLE_TABLE_ROW_HEADER_CHANGED: string;
                readonly ACCESSIBLE_TABLE_SUMMARY_CHANGED: string;
                readonly ACCESSIBLE_TEXT_ATTRIBUTES_CHANGED: string;
                readonly ACCESSIBLE_TEXT_PROPERTY: string;
                readonly ACCESSIBLE_VALUE_PROPERTY: string;
                readonly ACCESSIBLE_VISIBLE_DATA_PROPERTY: string;
            }
            interface AccessibleContext_C extends AccessibleContext_S {
                new (): AccessibleContext;
            }
            interface AccessibleContext$ {
                addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void;
                firePropertyChange(arg0: string, arg1: any, arg2: any): void;
                getAccessibleAction(): AccessibleAction;
                getAccessibleChild(arg0: number): Accessible;
                getAccessibleChildrenCount(): number;
                getAccessibleComponent(): AccessibleComponent;
                getAccessibleDescription(): string;
                getAccessibleEditableText(): AccessibleEditableText;
                getAccessibleIcon(): AccessibleIcon[];
                getAccessibleIndexInParent(): number;
                getAccessibleName(): string;
                getAccessibleParent(): Accessible;
                getAccessibleRelationSet(): AccessibleRelationSet;
                getAccessibleRole(): AccessibleRole;
                getAccessibleSelection(): AccessibleSelection;
                getAccessibleStateSet(): AccessibleStateSet;
                getAccessibleTable(): AccessibleTable;
                getAccessibleText(): AccessibleText;
                getAccessibleValue(): AccessibleValue;
                getLocale(): java.util.Locale;
                removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void;
                setAccessibleDescription(arg0: string): void;
                setAccessibleName(arg0: string): void;
                setAccessibleParent(arg0: Accessible): void;
            }
            type AccessibleContext = AccessibleContext_S & AccessibleContext$;
            interface AccessibleEditableText_S {
            }
            interface AccessibleEditableText$ {
                cut(arg0: number, arg1: number): void;
                delete(arg0: number, arg1: number): void;
                getTextRange(arg0: number, arg1: number): string;
                insertTextAtIndex(arg0: number, arg1: string): void;
                paste(arg0: number): void;
                replaceText(arg0: number, arg1: number, arg2: string): void;
                selectText(arg0: number, arg1: number): void;
                setAttributes(arg0: number, arg1: number, arg2: javax.swing.text.AttributeSet): void;
                setTextContents(arg0: string): void;
            }
            type AccessibleEditableText = AccessibleText & AccessibleEditableText_S & AccessibleEditableText$;
            interface AccessibleIcon_S {
            }
            interface AccessibleIcon$ {
                getAccessibleIconDescription(): string;
                getAccessibleIconHeight(): number;
                getAccessibleIconWidth(): number;
                setAccessibleIconDescription(arg0: string): void;
            }
            type AccessibleIcon = AccessibleIcon_S & AccessibleIcon$;
            interface AccessibleRelation_S {
                readonly CHILD_NODE_OF: string;
                readonly CHILD_NODE_OF_PROPERTY: string;
                readonly CONTROLLED_BY: string;
                readonly CONTROLLED_BY_PROPERTY: string;
                readonly CONTROLLER_FOR: string;
                readonly CONTROLLER_FOR_PROPERTY: string;
                readonly EMBEDDED_BY: string;
                readonly EMBEDDED_BY_PROPERTY: string;
                readonly EMBEDS: string;
                readonly EMBEDS_PROPERTY: string;
                readonly FLOWS_FROM: string;
                readonly FLOWS_FROM_PROPERTY: string;
                readonly FLOWS_TO: string;
                readonly FLOWS_TO_PROPERTY: string;
                readonly LABELED_BY: string;
                readonly LABELED_BY_PROPERTY: string;
                readonly LABEL_FOR: string;
                readonly LABEL_FOR_PROPERTY: string;
                readonly MEMBER_OF: string;
                readonly MEMBER_OF_PROPERTY: string;
                readonly PARENT_WINDOW_OF: string;
                readonly PARENT_WINDOW_OF_PROPERTY: string;
                readonly SUBWINDOW_OF: string;
                readonly SUBWINDOW_OF_PROPERTY: string;
            }
            type AccessibleRelation_ST = AccessibleBundle_S & AccessibleRelation_S;
            interface AccessibleRelation_C extends AccessibleRelation_ST {
                new (arg0: string): AccessibleRelation;
                new (arg0: string, arg1: any[]): AccessibleRelation;
                new (arg0: string, arg1: any): AccessibleRelation;
            }
            interface AccessibleRelation$ {
                getKey(): string;
                getTarget(): any[];
                setTarget(arg0: any): void;
                setTarget(arg0: any[]): void;
            }
            type AccessibleRelation = AccessibleBundle & AccessibleRelation_S & AccessibleRelation$;
            interface AccessibleRelationSet_S {
            }
            interface AccessibleRelationSet_C extends AccessibleRelationSet_S {
                new (): AccessibleRelationSet;
                new (arg0: AccessibleRelation[]): AccessibleRelationSet;
            }
            interface AccessibleRelationSet$ {
                add(arg0: AccessibleRelation): boolean;
                addAll(arg0: AccessibleRelation[]): void;
                clear(): void;
                contains(arg0: string): boolean;
                get(arg0: string): AccessibleRelation;
                remove(arg0: AccessibleRelation): boolean;
                size(): number;
                toArray(): AccessibleRelation[];
            }
            type AccessibleRelationSet = AccessibleRelationSet_S & AccessibleRelationSet$;
            interface AccessibleRole_S {
                readonly ALERT: AccessibleRole;
                readonly AWT_COMPONENT: AccessibleRole;
                readonly CANVAS: AccessibleRole;
                readonly CHECK_BOX: AccessibleRole;
                readonly COLOR_CHOOSER: AccessibleRole;
                readonly COLUMN_HEADER: AccessibleRole;
                readonly COMBO_BOX: AccessibleRole;
                readonly DATE_EDITOR: AccessibleRole;
                readonly DESKTOP_ICON: AccessibleRole;
                readonly DESKTOP_PANE: AccessibleRole;
                readonly DIALOG: AccessibleRole;
                readonly DIRECTORY_PANE: AccessibleRole;
                readonly EDITBAR: AccessibleRole;
                readonly FILE_CHOOSER: AccessibleRole;
                readonly FILLER: AccessibleRole;
                readonly FONT_CHOOSER: AccessibleRole;
                readonly FOOTER: AccessibleRole;
                readonly FRAME: AccessibleRole;
                readonly GLASS_PANE: AccessibleRole;
                readonly GROUP_BOX: AccessibleRole;
                readonly HEADER: AccessibleRole;
                readonly HTML_CONTAINER: AccessibleRole;
                readonly HYPERLINK: AccessibleRole;
                readonly ICON: AccessibleRole;
                readonly INTERNAL_FRAME: AccessibleRole;
                readonly LABEL: AccessibleRole;
                readonly LAYERED_PANE: AccessibleRole;
                readonly LIST: AccessibleRole;
                readonly LIST_ITEM: AccessibleRole;
                readonly MENU: AccessibleRole;
                readonly MENU_BAR: AccessibleRole;
                readonly MENU_ITEM: AccessibleRole;
                readonly OPTION_PANE: AccessibleRole;
                readonly PAGE_TAB: AccessibleRole;
                readonly PAGE_TAB_LIST: AccessibleRole;
                readonly PANEL: AccessibleRole;
                readonly PARAGRAPH: AccessibleRole;
                readonly PASSWORD_TEXT: AccessibleRole;
                readonly POPUP_MENU: AccessibleRole;
                readonly PROGRESS_BAR: AccessibleRole;
                readonly PROGRESS_MONITOR: AccessibleRole;
                readonly PUSH_BUTTON: AccessibleRole;
                readonly RADIO_BUTTON: AccessibleRole;
                readonly ROOT_PANE: AccessibleRole;
                readonly ROW_HEADER: AccessibleRole;
                readonly RULER: AccessibleRole;
                readonly SCROLL_BAR: AccessibleRole;
                readonly SCROLL_PANE: AccessibleRole;
                readonly SEPARATOR: AccessibleRole;
                readonly SLIDER: AccessibleRole;
                readonly SPIN_BOX: AccessibleRole;
                readonly SPLIT_PANE: AccessibleRole;
                readonly STATUS_BAR: AccessibleRole;
                readonly SWING_COMPONENT: AccessibleRole;
                readonly TABLE: AccessibleRole;
                readonly TEXT: AccessibleRole;
                readonly TOGGLE_BUTTON: AccessibleRole;
                readonly TOOL_BAR: AccessibleRole;
                readonly TOOL_TIP: AccessibleRole;
                readonly TREE: AccessibleRole;
                readonly UNKNOWN: AccessibleRole;
                readonly VIEWPORT: AccessibleRole;
                readonly WINDOW: AccessibleRole;
            }
            type AccessibleRole_ST = AccessibleBundle_S & AccessibleRole_S;
            interface AccessibleRole_C extends AccessibleRole_ST {
                new (): AccessibleRole;
            }
            interface AccessibleRole$ {
            }
            type AccessibleRole = AccessibleBundle & AccessibleRole_S & AccessibleRole$;
            interface AccessibleSelection_S {
            }
            interface AccessibleSelection$ {
                addAccessibleSelection(arg0: number): void;
                clearAccessibleSelection(): void;
                getAccessibleSelection(arg0: number): Accessible;
                getAccessibleSelectionCount(): number;
                isAccessibleChildSelected(arg0: number): boolean;
                removeAccessibleSelection(arg0: number): void;
                selectAllAccessibleSelection(): void;
            }
            type AccessibleSelection = AccessibleSelection_S & AccessibleSelection$;
            interface AccessibleState_S {
                readonly ACTIVE: AccessibleState;
                readonly ARMED: AccessibleState;
                readonly BUSY: AccessibleState;
                readonly CHECKED: AccessibleState;
                readonly COLLAPSED: AccessibleState;
                readonly EDITABLE: AccessibleState;
                readonly ENABLED: AccessibleState;
                readonly EXPANDABLE: AccessibleState;
                readonly EXPANDED: AccessibleState;
                readonly FOCUSABLE: AccessibleState;
                readonly FOCUSED: AccessibleState;
                readonly HORIZONTAL: AccessibleState;
                readonly ICONIFIED: AccessibleState;
                readonly INDETERMINATE: AccessibleState;
                readonly MANAGES_DESCENDANTS: AccessibleState;
                readonly MODAL: AccessibleState;
                readonly MULTISELECTABLE: AccessibleState;
                readonly MULTI_LINE: AccessibleState;
                readonly OPAQUE: AccessibleState;
                readonly PRESSED: AccessibleState;
                readonly RESIZABLE: AccessibleState;
                readonly SELECTABLE: AccessibleState;
                readonly SELECTED: AccessibleState;
                readonly SHOWING: AccessibleState;
                readonly SINGLE_LINE: AccessibleState;
                readonly TRANSIENT: AccessibleState;
                readonly TRUNCATED: AccessibleState;
                readonly VERTICAL: AccessibleState;
                readonly VISIBLE: AccessibleState;
            }
            type AccessibleState_ST = AccessibleBundle_S & AccessibleState_S;
            interface AccessibleState_C extends AccessibleState_ST {
                new (): AccessibleState;
            }
            interface AccessibleState$ {
            }
            type AccessibleState = AccessibleBundle & AccessibleState_S & AccessibleState$;
            interface AccessibleStateSet_S {
            }
            interface AccessibleStateSet_C extends AccessibleStateSet_S {
                new (): AccessibleStateSet;
                new (arg0: AccessibleState[]): AccessibleStateSet;
            }
            interface AccessibleStateSet$ {
                add(arg0: AccessibleState): boolean;
                addAll(arg0: AccessibleState[]): void;
                clear(): void;
                contains(arg0: AccessibleState): boolean;
                remove(arg0: AccessibleState): boolean;
                toArray(): AccessibleState[];
            }
            type AccessibleStateSet = AccessibleStateSet_S & AccessibleStateSet$;
            interface AccessibleTable_S {
            }
            interface AccessibleTable$ {
                getAccessibleAt(arg0: number, arg1: number): Accessible;
                getAccessibleCaption(): Accessible;
                getAccessibleColumnCount(): number;
                getAccessibleColumnDescription(arg0: number): Accessible;
                getAccessibleColumnExtentAt(arg0: number, arg1: number): number;
                getAccessibleColumnHeader(): this;
                getAccessibleRowCount(): number;
                getAccessibleRowDescription(arg0: number): Accessible;
                getAccessibleRowExtentAt(arg0: number, arg1: number): number;
                getAccessibleRowHeader(): this;
                getAccessibleSummary(): Accessible;
                getSelectedAccessibleColumns(): number[];
                getSelectedAccessibleRows(): number[];
                isAccessibleColumnSelected(arg0: number): boolean;
                isAccessibleRowSelected(arg0: number): boolean;
                isAccessibleSelected(arg0: number, arg1: number): boolean;
                setAccessibleCaption(arg0: Accessible): void;
                setAccessibleColumnDescription(arg0: number, arg1: Accessible): void;
                setAccessibleColumnHeader(arg0: AccessibleTable): void;
                setAccessibleRowDescription(arg0: number, arg1: Accessible): void;
                setAccessibleRowHeader(arg0: AccessibleTable): void;
                setAccessibleSummary(arg0: Accessible): void;
            }
            type AccessibleTable = AccessibleTable_S & AccessibleTable$;
            interface AccessibleText_S {
                readonly CHARACTER: number;
                readonly SENTENCE: number;
                readonly WORD: number;
            }
            interface AccessibleText$ {
                getAfterIndex(arg0: number, arg1: number): string;
                getAtIndex(arg0: number, arg1: number): string;
                getBeforeIndex(arg0: number, arg1: number): string;
                getCaretPosition(): number;
                getCharCount(): number;
                getCharacterAttribute(arg0: number): javax.swing.text.AttributeSet;
                getCharacterBounds(arg0: number): java.awt.Rectangle;
                getIndexAtPoint(arg0: java.awt.Point): number;
                getSelectedText(): string;
                getSelectionEnd(): number;
                getSelectionStart(): number;
            }
            type AccessibleText = AccessibleText_S & AccessibleText$;
            interface AccessibleValue_S {
            }
            interface AccessibleValue$ {
                getCurrentAccessibleValue(): number;
                getMaximumAccessibleValue(): number;
                getMinimumAccessibleValue(): number;
                setCurrentAccessibleValue(arg0: number): boolean;
            }
            type AccessibleValue = AccessibleValue_S & AccessibleValue$;
        }
        namespace javax.crypto {
            interface Cipher_S {
                readonly DECRYPT_MODE: number;
                readonly ENCRYPT_MODE: number;
                readonly PRIVATE_KEY: number;
                readonly PUBLIC_KEY: number;
                readonly SECRET_KEY: number;
                readonly UNWRAP_MODE: number;
                readonly WRAP_MODE: number;
                getInstance(arg0: string): Cipher;
                getInstance(arg0: string, arg1: java.security.Provider): Cipher;
                getInstance(arg0: string, arg1: string): Cipher;
                getMaxAllowedKeyLength(arg0: string): number;
                getMaxAllowedParameterSpec(arg0: string): java.security.spec.AlgorithmParameterSpec;
            }
            interface Cipher_C extends Cipher_S {
                new (): Cipher;
            }
            interface Cipher$ {
                doFinal(): number[];
                doFinal(arg0: number[]): number[];
                doFinal(arg0: number[], arg1: number): number;
                doFinal(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): number;
                doFinal(arg0: number[], arg1: number, arg2: number): number[];
                doFinal(arg0: number[], arg1: number, arg2: number, arg3: number[]): number;
                doFinal(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number): number;
                getAlgorithm(): string;
                getBlockSize(): number;
                getExemptionMechanism(): ExemptionMechanism;
                getIV(): number[];
                getOutputSize(arg0: number): number;
                getParameters(): java.security.AlgorithmParameters;
                getProvider(): java.security.Provider;
                init(arg0: number, arg1: java.security.cert.Certificate): void;
                init(arg0: number, arg1: java.security.Key): void;
                init(arg0: number, arg1: java.security.cert.Certificate, arg2: java.security.SecureRandom): void;
                init(arg0: number, arg1: java.security.Key, arg2: java.security.SecureRandom): void;
                init(arg0: number, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec): void;
                init(arg0: number, arg1: java.security.Key, arg2: java.security.AlgorithmParameters): void;
                init(arg0: number, arg1: java.security.Key, arg2: java.security.AlgorithmParameters, arg3: java.security.SecureRandom): void;
                init(arg0: number, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec, arg3: java.security.SecureRandom): void;
                unwrap(arg0: number[], arg1: string, arg2: number): java.security.Key;
                update(arg0: number[]): number[];
                update(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): number;
                update(arg0: number[], arg1: number, arg2: number): number[];
                update(arg0: number[], arg1: number, arg2: number, arg3: number[]): number;
                update(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number): number;
                updateAAD(arg0: number[]): void;
                updateAAD(arg0: java.nio.ByteBuffer): void;
                updateAAD(arg0: number[], arg1: number, arg2: number): void;
                wrap(arg0: java.security.Key): number[];
            }
            type Cipher = Cipher_S & Cipher$;
            interface ExemptionMechanism_S {
                getInstance(arg0: string): ExemptionMechanism;
                getInstance(arg0: string, arg1: java.security.Provider): ExemptionMechanism;
                getInstance(arg0: string, arg1: string): ExemptionMechanism;
            }
            interface ExemptionMechanism_C extends ExemptionMechanism_S {
                new (): ExemptionMechanism;
            }
            interface ExemptionMechanism$ {
                genExemptionBlob(): number[];
                genExemptionBlob(arg0: number[]): number;
                genExemptionBlob(arg0: number[], arg1: number): number;
                getName(): string;
                getOutputSize(arg0: number): number;
                getProvider(): java.security.Provider;
                init(arg0: java.security.Key): void;
                init(arg0: java.security.Key, arg1: java.security.AlgorithmParameters): void;
                init(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void;
                isCryptoAllowed(arg0: java.security.Key): boolean;
            }
            type ExemptionMechanism = ExemptionMechanism_S & ExemptionMechanism$;
            interface SecretKey_S {
                readonly serialVersionUID: long;
            }
            interface SecretKey$ {
            }
            type SecretKey = java.security.Key & javax.security.auth.Destroyable & SecretKey_S & SecretKey$;
        }
        namespace javax.security.auth {
            interface Destroyable_S {
            }
            interface Destroyable$ {
                destroy(): void;
                isDestroyed(): boolean;
            }
            type Destroyable = Destroyable_S & Destroyable$;
            interface Subject_S {
                doAs(arg0: Subject, arg1: java.security.PrivilegedAction): any;
                doAs(arg0: Subject, arg1: java.security.PrivilegedExceptionAction): any;
                doAsPrivileged(arg0: Subject, arg1: java.security.PrivilegedAction, arg2: java.security.AccessControlContext): any;
                doAsPrivileged(arg0: Subject, arg1: java.security.PrivilegedExceptionAction, arg2: java.security.AccessControlContext): any;
                getSubject(arg0: java.security.AccessControlContext): Subject;
            }
            type Subject_ST = java.io.Serializable_S & Subject_S;
            interface Subject_C extends Subject_ST {
                new (): Subject;
                new (arg0: boolean, arg1: java.util.Set, arg2: java.util.Set, arg3: java.util.Set): Subject;
            }
            interface Subject$ {
                getPrincipals(): java.util.Set;
                getPrincipals(arg0: java.lang.Class): java.util.Set;
                getPrivateCredentials(): java.util.Set;
                getPrivateCredentials(arg0: java.lang.Class): java.util.Set;
                getPublicCredentials(): java.util.Set;
                getPublicCredentials(arg0: java.lang.Class): java.util.Set;
                isReadOnly(): boolean;
                setReadOnly(): void;
            }
            type Subject = java.io.Serializable & Subject_S & Subject$;
        }
        namespace javax.servlet {
            interface AsyncContext_S {
                readonly ASYNC_CONTEXT_PATH: string;
                readonly ASYNC_PATH_INFO: string;
                readonly ASYNC_QUERY_STRING: string;
                readonly ASYNC_REQUEST_URI: string;
                readonly ASYNC_SERVLET_PATH: string;
            }
            interface AsyncContext$ {
                addListener(arg0: AsyncListener): void;
                addListener(arg0: AsyncListener, arg1: ServletRequest, arg2: ServletResponse): void;
                complete(): void;
                createListener(arg0: java.lang.Class): AsyncListener;
                dispatch(): void;
                dispatch(arg0: string): void;
                dispatch(arg0: ServletContext, arg1: string): void;
                getRequest(): ServletRequest;
                getResponse(): ServletResponse;
                getTimeout(): long;
                hasOriginalRequestAndResponse(): boolean;
                setTimeout(arg0: long): void;
                start(arg0: java.lang.Runnable): void;
            }
            type AsyncContext = AsyncContext_S & AsyncContext$;
            interface AsyncEvent_S {
            }
            interface AsyncEvent_C extends AsyncEvent_S {
                new (arg0: AsyncContext): AsyncEvent;
                new (arg0: AsyncContext, arg1: java.lang.Throwable): AsyncEvent;
                new (arg0: AsyncContext, arg1: ServletRequest, arg2: ServletResponse): AsyncEvent;
                new (arg0: AsyncContext, arg1: ServletRequest, arg2: ServletResponse, arg3: java.lang.Throwable): AsyncEvent;
            }
            interface AsyncEvent$ {
                getAsyncContext(): AsyncContext;
                getSuppliedRequest(): ServletRequest;
                getSuppliedResponse(): ServletResponse;
                getThrowable(): java.lang.Throwable;
            }
            type AsyncEvent = AsyncEvent_S & AsyncEvent$;
            interface AsyncListener_S {
            }
            interface AsyncListener$ {
                onComplete(arg0: AsyncEvent): void;
                onError(arg0: AsyncEvent): void;
                onStartAsync(arg0: AsyncEvent): void;
                onTimeout(arg0: AsyncEvent): void;
            }
            type AsyncListener = java.util.EventListener & AsyncListener_S & AsyncListener$;
            enum DispatcherType {
                FORWARD,
                INCLUDE,
                REQUEST,
                ASYNC,
                ERROR
            }
            interface Filter_S {
            }
            interface Filter$ {
                destroy(): void;
                doFilter(arg0: ServletRequest, arg1: ServletResponse, arg2: FilterChain): void;
                init(arg0: FilterConfig): void;
            }
            type Filter = Filter_S & Filter$;
            interface FilterChain_S {
            }
            interface FilterChain$ {
                doFilter(arg0: ServletRequest, arg1: ServletResponse): void;
            }
            type FilterChain = FilterChain_S & FilterChain$;
            interface FilterConfig_S {
            }
            interface FilterConfig$ {
                getFilterName(): string;
                getInitParameter(arg0: string): string;
                getInitParameterNames(): java.util.Enumeration;
                getServletContext(): ServletContext;
            }
            type FilterConfig = FilterConfig_S & FilterConfig$;
            interface FilterRegistration_S {
            }
            interface FilterRegistration$ {
                addMappingForServletNames(arg0: java.util.EnumSet, arg1: boolean, ...arg2: string[]): void;
                addMappingForUrlPatterns(arg0: java.util.EnumSet, arg1: boolean, ...arg2: string[]): void;
                getServletNameMappings(): java.util.Collection;
                getUrlPatternMappings(): java.util.Collection;
            }
            type FilterRegistration = Registration & FilterRegistration_S & FilterRegistration$;
            interface FilterRegistration$Dynamic_S {
            }
            interface FilterRegistration$Dynamic$ {
            }
            type FilterRegistration$Dynamic = FilterRegistration & javax.servlet.Registration$Dynamic & FilterRegistration$Dynamic_S & FilterRegistration$Dynamic$;
            interface HttpConstraintElement_S {
            }
            interface HttpConstraintElement_C extends HttpConstraintElement_S {
                new (): HttpConstraintElement;
                new (arg0: javax.servlet.annotation.ServletSecurity$EmptyRoleSemantic): HttpConstraintElement;
                new (arg0: javax.servlet.annotation.ServletSecurity$TransportGuarantee, arg1: string[]): HttpConstraintElement;
                new (arg0: javax.servlet.annotation.ServletSecurity$EmptyRoleSemantic, arg1: javax.servlet.annotation.ServletSecurity$TransportGuarantee, arg2: string[]): HttpConstraintElement;
            }
            interface HttpConstraintElement$ {
                getEmptyRoleSemantic(): javax.servlet.annotation.ServletSecurity$EmptyRoleSemantic;
                getRolesAllowed(): string[];
                getTransportGuarantee(): javax.servlet.annotation.ServletSecurity$TransportGuarantee;
            }
            type HttpConstraintElement = HttpConstraintElement_S & HttpConstraintElement$;
            interface MultipartConfigElement_S {
            }
            interface MultipartConfigElement_C extends MultipartConfigElement_S {
                new (arg0: javax.servlet.annotation.MultipartConfig): MultipartConfigElement;
                new (arg0: string): MultipartConfigElement;
                new (arg0: string, arg1: long, arg2: long, arg3: number): MultipartConfigElement;
            }
            interface MultipartConfigElement$ {
                getFileSizeThreshold(): number;
                getLocation(): string;
                getMaxFileSize(): long;
                getMaxRequestSize(): long;
            }
            type MultipartConfigElement = MultipartConfigElement_S & MultipartConfigElement$;
            interface ReadListener_S {
            }
            interface ReadListener$ {
                onAllDataRead(): void;
                onDataAvailable(): void;
                onError(arg0: java.lang.Throwable): void;
            }
            type ReadListener = java.util.EventListener & ReadListener_S & ReadListener$;
            interface Registration_S {
            }
            interface Registration$ {
                getClassName(): string;
                getInitParameter(arg0: string): string;
                getInitParameters(): java.util.Map;
                getName(): string;
                setInitParameter(arg0: string, arg1: string): boolean;
                setInitParameters(arg0: java.util.Map): java.util.Set;
            }
            type Registration = Registration_S & Registration$;
            interface Registration$Dynamic_S {
            }
            interface Registration$Dynamic$ {
                setAsyncSupported(arg0: boolean): void;
            }
            type Registration$Dynamic = Registration & Registration$Dynamic_S & Registration$Dynamic$;
            interface RequestDispatcher_S {
                readonly ERROR_EXCEPTION: string;
                readonly ERROR_EXCEPTION_TYPE: string;
                readonly ERROR_MESSAGE: string;
                readonly ERROR_REQUEST_URI: string;
                readonly ERROR_SERVLET_NAME: string;
                readonly ERROR_STATUS_CODE: string;
                readonly FORWARD_CONTEXT_PATH: string;
                readonly FORWARD_PATH_INFO: string;
                readonly FORWARD_QUERY_STRING: string;
                readonly FORWARD_REQUEST_URI: string;
                readonly FORWARD_SERVLET_PATH: string;
                readonly INCLUDE_CONTEXT_PATH: string;
                readonly INCLUDE_PATH_INFO: string;
                readonly INCLUDE_QUERY_STRING: string;
                readonly INCLUDE_REQUEST_URI: string;
                readonly INCLUDE_SERVLET_PATH: string;
            }
            interface RequestDispatcher$ {
                forward(arg0: ServletRequest, arg1: ServletResponse): void;
                include(arg0: ServletRequest, arg1: ServletResponse): void;
            }
            type RequestDispatcher = RequestDispatcher_S & RequestDispatcher$;
            interface Servlet_S {
            }
            interface Servlet$ {
                destroy(): void;
                getServletConfig(): ServletConfig;
                getServletInfo(): string;
                init(arg0: ServletConfig): void;
                service(arg0: ServletRequest, arg1: ServletResponse): void;
            }
            type Servlet = Servlet_S & Servlet$;
            interface ServletConfig_S {
            }
            interface ServletConfig$ {
                getInitParameter(arg0: string): string;
                getInitParameterNames(): java.util.Enumeration;
                getServletContext(): ServletContext;
                getServletName(): string;
            }
            type ServletConfig = ServletConfig_S & ServletConfig$;
            interface ServletContext_S {
                readonly ORDERED_LIBS: string;
                readonly TEMPDIR: string;
            }
            interface ServletContext$ {
                addFilter(arg0: string, arg1: Filter): FilterRegistration$Dynamic;
                addFilter(arg0: string, arg1: java.lang.Class): FilterRegistration$Dynamic;
                addFilter(arg0: string, arg1: string): FilterRegistration$Dynamic;
                addListener(arg0: java.util.EventListener): void;
                addListener(arg0: java.lang.Class): void;
                addListener(arg0: string): void;
                addServlet(arg0: string, arg1: java.lang.Class): ServletRegistration$Dynamic;
                addServlet(arg0: string, arg1: Servlet): ServletRegistration$Dynamic;
                addServlet(arg0: string, arg1: string): ServletRegistration$Dynamic;
                createFilter(arg0: java.lang.Class): Filter;
                createListener(arg0: java.lang.Class): java.util.EventListener;
                createServlet(arg0: java.lang.Class): Servlet;
                declareRoles(...arg0: string[]): void;
                getAttribute(arg0: string): any;
                getAttributeNames(): java.util.Enumeration;
                getClassLoader(): java.lang.ClassLoader;
                getContext(arg0: string): this;
                getContextPath(): string;
                getDefaultSessionTrackingModes(): java.util.Set;
                getEffectiveMajorVersion(): number;
                getEffectiveMinorVersion(): number;
                getEffectiveSessionTrackingModes(): java.util.Set;
                getFilterRegistration(arg0: string): FilterRegistration;
                getFilterRegistrations(): java.util.Map;
                getInitParameter(arg0: string): string;
                getInitParameterNames(): java.util.Enumeration;
                getJspConfigDescriptor(): javax.servlet.descriptor.JspConfigDescriptor;
                getMajorVersion(): number;
                getMimeType(arg0: string): string;
                getMinorVersion(): number;
                getNamedDispatcher(arg0: string): RequestDispatcher;
                getRealPath(arg0: string): string;
                getRequestDispatcher(arg0: string): RequestDispatcher;
                getResource(arg0: string): java.net.URL;
                getResourceAsStream(arg0: string): java.io.InputStream;
                getResourcePaths(arg0: string): java.util.Set;
                getServerInfo(): string;
                getServlet(arg0: string): Servlet;
                getServletContextName(): string;
                getServletNames(): java.util.Enumeration;
                getServletRegistration(arg0: string): ServletRegistration;
                getServletRegistrations(): java.util.Map;
                getServlets(): java.util.Enumeration;
                getSessionCookieConfig(): SessionCookieConfig;
                getVirtualServerName(): string;
                log(arg0: string): void;
                log(arg0: java.lang.Exception, arg1: string): void;
                log(arg0: string, arg1: java.lang.Throwable): void;
                removeAttribute(arg0: string): void;
                setAttribute(arg0: string, arg1: any): void;
                setInitParameter(arg0: string, arg1: string): boolean;
                setSessionTrackingModes(arg0: java.util.Set): void;
            }
            type ServletContext = ServletContext_S & ServletContext$;
            interface ServletInputStream_S {
            }
            type ServletInputStream_ST = java.io.InputStream_S & ServletInputStream_S;
            interface ServletInputStream_C extends ServletInputStream_ST {
            }
            interface ServletInputStream$ {
                isFinished(): boolean;
                isReady(): boolean;
                readLine(arg0: number[], arg1: number, arg2: number): number;
                setReadListener(arg0: ReadListener): void;
            }
            type ServletInputStream = java.io.InputStream & ServletInputStream_S & ServletInputStream$;
            interface ServletOutputStream_S {
            }
            type ServletOutputStream_ST = java.io.OutputStream_S & ServletOutputStream_S;
            interface ServletOutputStream_C extends ServletOutputStream_ST {
            }
            interface ServletOutputStream$ {
                isReady(): boolean;
                print(arg0: long): void;
                print(arg0: boolean): void;
                print(arg0: number): void;
                print(arg0: string): void;
                println(): void;
                println(arg0: long): void;
                println(arg0: boolean): void;
                println(arg0: number): void;
                println(arg0: string): void;
                setWriteListener(arg0: WriteListener): void;
            }
            type ServletOutputStream = java.io.OutputStream & ServletOutputStream_S & ServletOutputStream$;
            interface ServletRegistration_S {
            }
            interface ServletRegistration$ {
                addMapping(...arg0: string[]): java.util.Set;
                getMappings(): java.util.Collection;
                getRunAsRole(): string;
            }
            type ServletRegistration = Registration & ServletRegistration_S & ServletRegistration$;
            interface ServletRegistration$Dynamic_S {
            }
            interface ServletRegistration$Dynamic$ {
                setLoadOnStartup(arg0: number): void;
                setMultipartConfig(arg0: MultipartConfigElement): void;
                setRunAsRole(arg0: string): void;
                setServletSecurity(arg0: ServletSecurityElement): java.util.Set;
            }
            type ServletRegistration$Dynamic = ServletRegistration & javax.servlet.Registration$Dynamic & ServletRegistration$Dynamic_S & ServletRegistration$Dynamic$;
            interface ServletRequest_S {
            }
            interface ServletRequest$ {
                getAsyncContext(): AsyncContext;
                getAttribute(arg0: string): any;
                getAttributeNames(): java.util.Enumeration;
                getCharacterEncoding(): string;
                getContentLength(): number;
                getContentLengthLong(): long;
                getContentType(): string;
                getDispatcherType(): DispatcherType;
                getInputStream(): ServletInputStream;
                getLocalAddr(): string;
                getLocalName(): string;
                getLocalPort(): number;
                getLocale(): java.util.Locale;
                getLocales(): java.util.Enumeration;
                getParameter(arg0: string): string;
                getParameterMap(): java.util.Map;
                getParameterNames(): java.util.Enumeration;
                getParameterValues(arg0: string): string[];
                getProtocol(): string;
                getReader(): java.io.BufferedReader;
                getRealPath(arg0: string): string;
                getRemoteAddr(): string;
                getRemoteHost(): string;
                getRemotePort(): number;
                getRequestDispatcher(arg0: string): RequestDispatcher;
                getScheme(): string;
                getServerName(): string;
                getServerPort(): number;
                getServletContext(): ServletContext;
                isAsyncStarted(): boolean;
                isAsyncSupported(): boolean;
                isSecure(): boolean;
                removeAttribute(arg0: string): void;
                setAttribute(arg0: string, arg1: any): void;
                setCharacterEncoding(arg0: string): void;
                startAsync(): AsyncContext;
                startAsync(arg0: ServletRequest, arg1: ServletResponse): AsyncContext;
            }
            type ServletRequest = ServletRequest_S & ServletRequest$;
            interface ServletResponse_S {
            }
            interface ServletResponse$ {
                flushBuffer(): void;
                getBufferSize(): number;
                getCharacterEncoding(): string;
                getContentType(): string;
                getLocale(): java.util.Locale;
                getOutputStream(): ServletOutputStream;
                getWriter(): java.io.PrintWriter;
                isCommitted(): boolean;
                reset(): void;
                resetBuffer(): void;
                setBufferSize(arg0: number): void;
                setCharacterEncoding(arg0: string): void;
                setContentLength(arg0: number): void;
                setContentLengthLong(arg0: long): void;
                setContentType(arg0: string): void;
                setLocale(arg0: java.util.Locale): void;
            }
            type ServletResponse = ServletResponse_S & ServletResponse$;
            interface ServletSecurityElement_S {
            }
            type ServletSecurityElement_ST = HttpConstraintElement_S & ServletSecurityElement_S;
            interface ServletSecurityElement_C extends ServletSecurityElement_ST {
                new (): ServletSecurityElement;
                new (arg0: javax.servlet.annotation.ServletSecurity): ServletSecurityElement;
                new (arg0: java.util.Collection): ServletSecurityElement;
                new (arg0: HttpConstraintElement): ServletSecurityElement;
                new (arg0: HttpConstraintElement, arg1: java.util.Collection): ServletSecurityElement;
            }
            interface ServletSecurityElement$ {
                getHttpMethodConstraints(): java.util.Collection;
                getMethodNames(): java.util.Collection;
            }
            type ServletSecurityElement = HttpConstraintElement & ServletSecurityElement_S & ServletSecurityElement$;
            interface SessionCookieConfig_S {
            }
            interface SessionCookieConfig$ {
                getComment(): string;
                getDomain(): string;
                getMaxAge(): number;
                getName(): string;
                getPath(): string;
                isHttpOnly(): boolean;
                isSecure(): boolean;
                setComment(arg0: string): void;
                setDomain(arg0: string): void;
                setHttpOnly(arg0: boolean): void;
                setMaxAge(arg0: number): void;
                setName(arg0: string): void;
                setPath(arg0: string): void;
                setSecure(arg0: boolean): void;
            }
            type SessionCookieConfig = SessionCookieConfig_S & SessionCookieConfig$;
            interface WriteListener_S {
            }
            interface WriteListener$ {
                onError(arg0: java.lang.Throwable): void;
                onWritePossible(): void;
            }
            type WriteListener = java.util.EventListener & WriteListener_S & WriteListener$;
        }
        namespace javax.servlet.annotation {
            interface HttpConstraint_S {
            }
            interface HttpConstraint$ {
                rolesAllowed(): string[];
                transportGuarantee(): ServletSecurity$TransportGuarantee;
                value(): ServletSecurity$EmptyRoleSemantic;
            }
            type HttpConstraint = java.lang.annotation.Annotation & HttpConstraint_S & HttpConstraint$;
            interface HttpMethodConstraint_S {
            }
            interface HttpMethodConstraint$ {
                emptyRoleSemantic(): ServletSecurity$EmptyRoleSemantic;
                rolesAllowed(): string[];
                transportGuarantee(): ServletSecurity$TransportGuarantee;
                value(): string;
            }
            type HttpMethodConstraint = java.lang.annotation.Annotation & HttpMethodConstraint_S & HttpMethodConstraint$;
            interface MultipartConfig_S {
            }
            interface MultipartConfig$ {
                fileSizeThreshold(): number;
                location(): string;
                maxFileSize(): long;
                maxRequestSize(): long;
            }
            type MultipartConfig = java.lang.annotation.Annotation & MultipartConfig_S & MultipartConfig$;
            interface ServletSecurity_S {
            }
            interface ServletSecurity$ {
                httpMethodConstraints(): HttpMethodConstraint[];
                value(): HttpConstraint;
            }
            type ServletSecurity = java.lang.annotation.Annotation & ServletSecurity_S & ServletSecurity$;
            enum ServletSecurity$EmptyRoleSemantic {
                PERMIT,
                DENY
            }
            enum ServletSecurity$TransportGuarantee {
                NONE,
                CONFIDENTIAL
            }
        }
        namespace javax.servlet.descriptor {
            interface JspConfigDescriptor_S {
            }
            interface JspConfigDescriptor$ {
                getJspPropertyGroups(): java.util.Collection;
                getTaglibs(): java.util.Collection;
            }
            type JspConfigDescriptor = JspConfigDescriptor_S & JspConfigDescriptor$;
        }
        namespace javax.servlet.http {
            interface Cookie_S {
            }
            type Cookie_ST = java.io.Serializable_S & java.lang.Cloneable_S & Cookie_S;
            interface Cookie_C extends Cookie_ST {
                new (arg0: string, arg1: string): Cookie;
            }
            interface Cookie$ {
                clone(): any;
                getComment(): string;
                getDomain(): string;
                getMaxAge(): number;
                getName(): string;
                getPath(): string;
                getSecure(): boolean;
                getValue(): string;
                getVersion(): number;
                isHttpOnly(): boolean;
                setComment(arg0: string): void;
                setDomain(arg0: string): void;
                setHttpOnly(arg0: boolean): void;
                setMaxAge(arg0: number): void;
                setPath(arg0: string): void;
                setSecure(arg0: boolean): void;
                setValue(arg0: string): void;
                setVersion(arg0: number): void;
            }
            type Cookie = java.lang.Cloneable & java.io.Serializable & Cookie_S & Cookie$;
            interface HttpServletRequest_S {
                readonly BASIC_AUTH: string;
                readonly CLIENT_CERT_AUTH: string;
                readonly DIGEST_AUTH: string;
                readonly FORM_AUTH: string;
            }
            interface HttpServletRequest$ {
                authenticate(arg0: HttpServletResponse): boolean;
                changeSessionId(): string;
                getAuthType(): string;
                getContextPath(): string;
                getCookies(): Cookie[];
                getDateHeader(arg0: string): long;
                getHeader(arg0: string): string;
                getHeaderNames(): java.util.Enumeration;
                getHeaders(arg0: string): java.util.Enumeration;
                getIntHeader(arg0: string): number;
                getMethod(): string;
                getPart(arg0: string): Part;
                getParts(): java.util.Collection;
                getPathInfo(): string;
                getPathTranslated(): string;
                getQueryString(): string;
                getRemoteUser(): string;
                getRequestURI(): string;
                getRequestURL(): java.lang.StringBuffer;
                getRequestedSessionId(): string;
                getServletPath(): string;
                getSession(): HttpSession;
                getSession(arg0: boolean): HttpSession;
                getUserPrincipal(): java.security.Principal;
                isRequestedSessionIdFromCookie(): boolean;
                isRequestedSessionIdFromURL(): boolean;
                isRequestedSessionIdFromUrl(): boolean;
                isRequestedSessionIdValid(): boolean;
                isUserInRole(arg0: string): boolean;
                login(arg0: string, arg1: string): void;
                logout(): void;
                upgrade(arg0: java.lang.Class): HttpUpgradeHandler;
            }
            type HttpServletRequest = ServletRequest & HttpServletRequest_S & HttpServletRequest$;
            interface HttpServletResponse_S {
                readonly SC_ACCEPTED: number;
                readonly SC_BAD_GATEWAY: number;
                readonly SC_BAD_REQUEST: number;
                readonly SC_CONFLICT: number;
                readonly SC_CONTINUE: number;
                readonly SC_CREATED: number;
                readonly SC_EXPECTATION_FAILED: number;
                readonly SC_FORBIDDEN: number;
                readonly SC_FOUND: number;
                readonly SC_GATEWAY_TIMEOUT: number;
                readonly SC_GONE: number;
                readonly SC_HTTP_VERSION_NOT_SUPPORTED: number;
                readonly SC_INTERNAL_SERVER_ERROR: number;
                readonly SC_LENGTH_REQUIRED: number;
                readonly SC_METHOD_NOT_ALLOWED: number;
                readonly SC_MOVED_PERMANENTLY: number;
                readonly SC_MOVED_TEMPORARILY: number;
                readonly SC_MULTIPLE_CHOICES: number;
                readonly SC_NON_AUTHORITATIVE_INFORMATION: number;
                readonly SC_NOT_ACCEPTABLE: number;
                readonly SC_NOT_FOUND: number;
                readonly SC_NOT_IMPLEMENTED: number;
                readonly SC_NOT_MODIFIED: number;
                readonly SC_NO_CONTENT: number;
                readonly SC_OK: number;
                readonly SC_PARTIAL_CONTENT: number;
                readonly SC_PAYMENT_REQUIRED: number;
                readonly SC_PRECONDITION_FAILED: number;
                readonly SC_PROXY_AUTHENTICATION_REQUIRED: number;
                readonly SC_REQUESTED_RANGE_NOT_SATISFIABLE: number;
                readonly SC_REQUEST_ENTITY_TOO_LARGE: number;
                readonly SC_REQUEST_TIMEOUT: number;
                readonly SC_REQUEST_URI_TOO_LONG: number;
                readonly SC_RESET_CONTENT: number;
                readonly SC_SEE_OTHER: number;
                readonly SC_SERVICE_UNAVAILABLE: number;
                readonly SC_SWITCHING_PROTOCOLS: number;
                readonly SC_TEMPORARY_REDIRECT: number;
                readonly SC_UNAUTHORIZED: number;
                readonly SC_UNSUPPORTED_MEDIA_TYPE: number;
                readonly SC_USE_PROXY: number;
            }
            interface HttpServletResponse$ {
                addCookie(arg0: Cookie): void;
                addDateHeader(arg0: string, arg1: long): void;
                addHeader(arg0: string, arg1: string): void;
                addIntHeader(arg0: string, arg1: number): void;
                containsHeader(arg0: string): boolean;
                encodeRedirectURL(arg0: string): string;
                encodeRedirectUrl(arg0: string): string;
                encodeURL(arg0: string): string;
                encodeUrl(arg0: string): string;
                getHeader(arg0: string): string;
                getHeaderNames(): java.util.Collection;
                getHeaders(arg0: string): java.util.Collection;
                getStatus(): number;
                sendError(arg0: number): void;
                sendError(arg0: number, arg1: string): void;
                sendRedirect(arg0: string): void;
                setDateHeader(arg0: string, arg1: long): void;
                setHeader(arg0: string, arg1: string): void;
                setIntHeader(arg0: string, arg1: number): void;
                setStatus(arg0: number): void;
                setStatus(arg0: number, arg1: string): void;
            }
            type HttpServletResponse = ServletResponse & HttpServletResponse_S & HttpServletResponse$;
            interface HttpSession_S {
            }
            interface HttpSession$ {
                getAttribute(arg0: string): any;
                getAttributeNames(): java.util.Enumeration;
                getCreationTime(): long;
                getId(): string;
                getLastAccessedTime(): long;
                getMaxInactiveInterval(): number;
                getServletContext(): ServletContext;
                getSessionContext(): HttpSessionContext;
                getValue(arg0: string): any;
                getValueNames(): string[];
                invalidate(): void;
                isNew(): boolean;
                putValue(arg0: string, arg1: any): void;
                removeAttribute(arg0: string): void;
                removeValue(arg0: string): void;
                setAttribute(arg0: string, arg1: any): void;
                setMaxInactiveInterval(arg0: number): void;
            }
            type HttpSession = HttpSession_S & HttpSession$;
            interface HttpSessionContext_S {
            }
            interface HttpSessionContext$ {
                getIds(): java.util.Enumeration;
                getSession(arg0: string): HttpSession;
            }
            type HttpSessionContext = HttpSessionContext_S & HttpSessionContext$;
            interface HttpUpgradeHandler_S {
            }
            interface HttpUpgradeHandler$ {
                destroy(): void;
                init(arg0: WebConnection): void;
            }
            type HttpUpgradeHandler = HttpUpgradeHandler_S & HttpUpgradeHandler$;
            interface Part_S {
            }
            interface Part$ {
                delete(): void;
                getContentType(): string;
                getHeader(arg0: string): string;
                getHeaderNames(): java.util.Collection;
                getHeaders(arg0: string): java.util.Collection;
                getInputStream(): java.io.InputStream;
                getName(): string;
                getSize(): long;
                getSubmittedFileName(): string;
                write(arg0: string): void;
            }
            type Part = Part_S & Part$;
            interface WebConnection_S {
            }
            interface WebConnection$ {
                getInputStream(): ServletInputStream;
                getOutputStream(): ServletOutputStream;
            }
            type WebConnection = java.lang.AutoCloseable & WebConnection_S & WebConnection$;
        }
        namespace javax.swing.text {
            interface AttributeSet_S {
                readonly NameAttribute: any;
                readonly ResolveAttribute: any;
            }
            interface AttributeSet$ {
                containsAttribute(arg0: any, arg1: any): boolean;
                containsAttributes(arg0: AttributeSet): boolean;
                copyAttributes(): this;
                getAttribute(arg0: any): any;
                getAttributeCount(): number;
                getAttributeNames(): java.util.Enumeration;
                getResolveParent(): this;
                isDefined(arg0: any): boolean;
                isEqual(arg0: AttributeSet): boolean;
            }
            type AttributeSet = AttributeSet_S & AttributeSet$;
        }
        namespace javax.swing.tree {
            interface TreePath_S {
            }
            type TreePath_ST = java.io.Serializable_S & TreePath_S;
            interface TreePath_C extends TreePath_ST {
                new (arg0: any): TreePath;
                new (arg0: any[]): TreePath;
            }
            interface TreePath$ {
                getLastPathComponent(): any;
                getParentPath(): this;
                getPath(): any[];
                getPathComponent(arg0: number): any;
                getPathCount(): number;
                isDescendant(arg0: TreePath): boolean;
                pathByAddingChild(arg0: any): this;
            }
            type TreePath = java.io.Serializable & TreePath_S & TreePath$;
        }
        namespace javax.xml.namespace {
            interface NamespaceContext_S {
            }
            interface NamespaceContext$ {
                getNamespaceURI(arg0: string): string;
                getPrefix(arg0: string): string;
                getPrefixes(arg0: string): java.util.Iterator;
            }
            type NamespaceContext = NamespaceContext_S & NamespaceContext$;
            interface QName_S {
                valueOf(arg0: string): QName;
            }
            type QName_ST = java.io.Serializable_S & QName_S;
            interface QName_C extends QName_ST {
                new (arg0: string): QName;
                new (arg0: string, arg1: string): QName;
                new (arg0: string, arg1: string, arg2: string): QName;
            }
            interface QName$ {
                getLocalPart(): string;
                getNamespaceURI(): string;
                getPrefix(): string;
            }
            type QName = java.io.Serializable & QName_S & QName$;
        }
        namespace javax.xml.stream {
            interface Location_S {
            }
            interface Location$ {
                getCharacterOffset(): number;
                getColumnNumber(): number;
                getLineNumber(): number;
                getPublicId(): string;
                getSystemId(): string;
            }
            type Location = Location_S & Location$;
            interface XMLStreamConstants_S {
                readonly ATTRIBUTE: number;
                readonly CDATA: number;
                readonly CHARACTERS: number;
                readonly COMMENT: number;
                readonly DTD: number;
                readonly END_DOCUMENT: number;
                readonly END_ELEMENT: number;
                readonly ENTITY_DECLARATION: number;
                readonly ENTITY_REFERENCE: number;
                readonly NAMESPACE: number;
                readonly NOTATION_DECLARATION: number;
                readonly PROCESSING_INSTRUCTION: number;
                readonly SPACE: number;
                readonly START_DOCUMENT: number;
                readonly START_ELEMENT: number;
            }
            interface XMLStreamConstants$ {
            }
            type XMLStreamConstants = XMLStreamConstants_S & XMLStreamConstants$;
            interface XMLStreamReader_S {
            }
            interface XMLStreamReader$ {
                close(): void;
                getAttributeCount(): number;
                getAttributeLocalName(arg0: number): string;
                getAttributeName(arg0: number): javax.xml.namespace.QName;
                getAttributeNamespace(arg0: number): string;
                getAttributePrefix(arg0: number): string;
                getAttributeType(arg0: number): string;
                getAttributeValue(arg0: number): string;
                getAttributeValue(arg0: string, arg1: string): string;
                getCharacterEncodingScheme(): string;
                getElementText(): string;
                getEncoding(): string;
                getEventType(): number;
                getLocalName(): string;
                getLocation(): Location;
                getName(): javax.xml.namespace.QName;
                getNamespaceContext(): javax.xml.namespace.NamespaceContext;
                getNamespaceCount(): number;
                getNamespacePrefix(arg0: number): string;
                getNamespaceURI(): string;
                getNamespaceURI(arg0: number): string;
                getNamespaceURI(arg0: string): string;
                getPIData(): string;
                getPITarget(): string;
                getPrefix(): string;
                getProperty(arg0: string): any;
                getText(): string;
                getTextCharacters(): string[];
                getTextCharacters(arg0: number, arg1: string[], arg2: number, arg3: number): number;
                getTextLength(): number;
                getTextStart(): number;
                getVersion(): string;
                hasName(): boolean;
                hasNext(): boolean;
                hasText(): boolean;
                isAttributeSpecified(arg0: number): boolean;
                isCharacters(): boolean;
                isEndElement(): boolean;
                isStandalone(): boolean;
                isStartElement(): boolean;
                isWhiteSpace(): boolean;
                next(): number;
                nextTag(): number;
                require(arg0: number, arg1: string, arg2: string): void;
                standaloneSet(): boolean;
            }
            type XMLStreamReader = XMLStreamConstants & XMLStreamReader_S & XMLStreamReader$;
        }
        namespace javax.xml.transform {
            interface Result_S {
                readonly PI_DISABLE_OUTPUT_ESCAPING: string;
                readonly PI_ENABLE_OUTPUT_ESCAPING: string;
            }
            interface Result$ {
                getSystemId(): string;
                setSystemId(arg0: string): void;
            }
            type Result = Result_S & Result$;
            interface Source_S {
            }
            interface Source$ {
                getSystemId(): string;
                setSystemId(arg0: string): void;
            }
            type Source = Source_S & Source$;
        }
        namespace org.w3c.dom {
            interface Attr_S {
            }
            interface Attr$ {
                getName(): string;
                getOwnerElement(): Element;
                getSchemaTypeInfo(): TypeInfo;
                getSpecified(): boolean;
                getValue(): string;
                isId(): boolean;
                setValue(arg0: string): void;
            }
            type Attr = Node & Attr_S & Attr$;
            interface CDATASection_S {
            }
            interface CDATASection$ {
            }
            type CDATASection = Text & CDATASection_S & CDATASection$;
            interface CharacterData_S {
            }
            interface CharacterData$ {
                appendData(arg0: string): void;
                deleteData(arg0: number, arg1: number): void;
                getData(): string;
                getLength(): number;
                insertData(arg0: number, arg1: string): void;
                replaceData(arg0: number, arg1: number, arg2: string): void;
                setData(arg0: string): void;
                substringData(arg0: number, arg1: number): string;
            }
            type CharacterData = Node & CharacterData_S & CharacterData$;
            interface Comment_S {
            }
            interface Comment$ {
            }
            type Comment = CharacterData & Comment_S & Comment$;
            interface DOMConfiguration_S {
            }
            interface DOMConfiguration$ {
                canSetParameter(arg0: string, arg1: any): boolean;
                getParameter(arg0: string): any;
                getParameterNames(): DOMStringList;
                setParameter(arg0: string, arg1: any): void;
            }
            type DOMConfiguration = DOMConfiguration_S & DOMConfiguration$;
            interface DOMImplementation_S {
            }
            interface DOMImplementation$ {
                createDocument(arg0: string, arg1: string, arg2: DocumentType): Document;
                createDocumentType(arg0: string, arg1: string, arg2: string): DocumentType;
                getFeature(arg0: string, arg1: string): any;
                hasFeature(arg0: string, arg1: string): boolean;
            }
            type DOMImplementation = DOMImplementation_S & DOMImplementation$;
            interface DOMStringList_S {
            }
            interface DOMStringList$ {
                contains(arg0: string): boolean;
                getLength(): number;
                item(arg0: number): string;
            }
            type DOMStringList = DOMStringList_S & DOMStringList$;
            interface Document_S {
            }
            interface Document$ {
                adoptNode(arg0: Node): Node;
                createAttribute(arg0: string): Attr;
                createAttributeNS(arg0: string, arg1: string): Attr;
                createCDATASection(arg0: string): CDATASection;
                createComment(arg0: string): Comment;
                createDocumentFragment(): DocumentFragment;
                createElement(arg0: string): Element;
                createElementNS(arg0: string, arg1: string): Element;
                createEntityReference(arg0: string): EntityReference;
                createProcessingInstruction(arg0: string, arg1: string): ProcessingInstruction;
                createTextNode(arg0: string): Text;
                getDoctype(): DocumentType;
                getDocumentElement(): Element;
                getDocumentURI(): string;
                getDomConfig(): DOMConfiguration;
                getElementById(arg0: string): Element;
                getElementsByTagName(arg0: string): NodeList;
                getElementsByTagNameNS(arg0: string, arg1: string): NodeList;
                getImplementation(): DOMImplementation;
                getInputEncoding(): string;
                getStrictErrorChecking(): boolean;
                getXmlEncoding(): string;
                getXmlStandalone(): boolean;
                getXmlVersion(): string;
                importNode(arg0: Node, arg1: boolean): Node;
                normalizeDocument(): void;
                renameNode(arg0: Node, arg1: string, arg2: string): Node;
                setDocumentURI(arg0: string): void;
                setStrictErrorChecking(arg0: boolean): void;
                setXmlStandalone(arg0: boolean): void;
                setXmlVersion(arg0: string): void;
            }
            type Document = Node & Document_S & Document$;
            interface DocumentFragment_S {
            }
            interface DocumentFragment$ {
            }
            type DocumentFragment = Node & DocumentFragment_S & DocumentFragment$;
            interface DocumentType_S {
            }
            interface DocumentType$ {
                getEntities(): NamedNodeMap;
                getInternalSubset(): string;
                getName(): string;
                getNotations(): NamedNodeMap;
                getPublicId(): string;
                getSystemId(): string;
            }
            type DocumentType = Node & DocumentType_S & DocumentType$;
            interface Element_S {
            }
            interface Element$ {
                getAttribute(arg0: string): string;
                getAttributeNS(arg0: string, arg1: string): string;
                getAttributeNode(arg0: string): Attr;
                getAttributeNodeNS(arg0: string, arg1: string): Attr;
                getElementsByTagName(arg0: string): NodeList;
                getElementsByTagNameNS(arg0: string, arg1: string): NodeList;
                getSchemaTypeInfo(): TypeInfo;
                getTagName(): string;
                hasAttribute(arg0: string): boolean;
                hasAttributeNS(arg0: string, arg1: string): boolean;
                removeAttribute(arg0: string): void;
                removeAttributeNS(arg0: string, arg1: string): void;
                removeAttributeNode(arg0: Attr): Attr;
                setAttribute(arg0: string, arg1: string): void;
                setAttributeNS(arg0: string, arg1: string, arg2: string): void;
                setAttributeNode(arg0: Attr): Attr;
                setAttributeNodeNS(arg0: Attr): Attr;
                setIdAttribute(arg0: string, arg1: boolean): void;
                setIdAttributeNS(arg0: string, arg1: string, arg2: boolean): void;
                setIdAttributeNode(arg0: Attr, arg1: boolean): void;
            }
            type Element = Node & Element_S & Element$;
            interface EntityReference_S {
            }
            interface EntityReference$ {
            }
            type EntityReference = Node & EntityReference_S & EntityReference$;
            interface NamedNodeMap_S {
            }
            interface NamedNodeMap$ {
                getLength(): number;
                getNamedItem(arg0: string): Node;
                getNamedItemNS(arg0: string, arg1: string): Node;
                item(arg0: number): Node;
                removeNamedItem(arg0: string): Node;
                removeNamedItemNS(arg0: string, arg1: string): Node;
                setNamedItem(arg0: Node): Node;
                setNamedItemNS(arg0: Node): Node;
            }
            type NamedNodeMap = NamedNodeMap_S & NamedNodeMap$;
            interface Node_S {
                readonly ATTRIBUTE_NODE: number;
                readonly CDATA_SECTION_NODE: number;
                readonly COMMENT_NODE: number;
                readonly DOCUMENT_FRAGMENT_NODE: number;
                readonly DOCUMENT_NODE: number;
                readonly DOCUMENT_POSITION_CONTAINED_BY: number;
                readonly DOCUMENT_POSITION_CONTAINS: number;
                readonly DOCUMENT_POSITION_DISCONNECTED: number;
                readonly DOCUMENT_POSITION_FOLLOWING: number;
                readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
                readonly DOCUMENT_POSITION_PRECEDING: number;
                readonly DOCUMENT_TYPE_NODE: number;
                readonly ELEMENT_NODE: number;
                readonly ENTITY_NODE: number;
                readonly ENTITY_REFERENCE_NODE: number;
                readonly NOTATION_NODE: number;
                readonly PROCESSING_INSTRUCTION_NODE: number;
                readonly TEXT_NODE: number;
            }
            interface Node$ {
                appendChild(arg0: Node): this;
                cloneNode(arg0: boolean): this;
                compareDocumentPosition(arg0: Node): number;
                getAttributes(): NamedNodeMap;
                getBaseURI(): string;
                getChildNodes(): NodeList;
                getFeature(arg0: string, arg1: string): any;
                getFirstChild(): this;
                getLastChild(): this;
                getLocalName(): string;
                getNamespaceURI(): string;
                getNextSibling(): this;
                getNodeName(): string;
                getNodeType(): number;
                getNodeValue(): string;
                getOwnerDocument(): Document;
                getParentNode(): this;
                getPrefix(): string;
                getPreviousSibling(): this;
                getTextContent(): string;
                getUserData(arg0: string): any;
                hasAttributes(): boolean;
                hasChildNodes(): boolean;
                insertBefore(arg0: Node, arg1: Node): this;
                isDefaultNamespace(arg0: string): boolean;
                isEqualNode(arg0: Node): boolean;
                isSameNode(arg0: Node): boolean;
                isSupported(arg0: string, arg1: string): boolean;
                lookupNamespaceURI(arg0: string): string;
                lookupPrefix(arg0: string): string;
                normalize(): void;
                removeChild(arg0: Node): this;
                replaceChild(arg0: Node, arg1: Node): this;
                setNodeValue(arg0: string): void;
                setPrefix(arg0: string): void;
                setTextContent(arg0: string): void;
                setUserData(arg0: string, arg1: any, arg2: UserDataHandler): any;
            }
            type Node = Node_S & Node$;
            interface NodeList_S {
            }
            interface NodeList$ {
                getLength(): number;
                item(arg0: number): Node;
            }
            type NodeList = NodeList_S & NodeList$;
            interface ProcessingInstruction_S {
            }
            interface ProcessingInstruction$ {
                getData(): string;
                getTarget(): string;
                setData(arg0: string): void;
            }
            type ProcessingInstruction = Node & ProcessingInstruction_S & ProcessingInstruction$;
            interface Text_S {
            }
            interface Text$ {
                getWholeText(): string;
                isElementContentWhitespace(): boolean;
                replaceWholeText(arg0: string): this;
                splitText(arg0: number): this;
            }
            type Text = CharacterData & Text_S & Text$;
            interface TypeInfo_S {
                readonly DERIVATION_EXTENSION: number;
                readonly DERIVATION_LIST: number;
                readonly DERIVATION_RESTRICTION: number;
                readonly DERIVATION_UNION: number;
            }
            interface TypeInfo$ {
                getTypeName(): string;
                getTypeNamespace(): string;
                isDerivedFrom(arg0: string, arg1: string, arg2: number): boolean;
            }
            type TypeInfo = TypeInfo_S & TypeInfo$;
            interface UserDataHandler_S {
                readonly NODE_ADOPTED: number;
                readonly NODE_CLONED: number;
                readonly NODE_DELETED: number;
                readonly NODE_IMPORTED: number;
                readonly NODE_RENAMED: number;
            }
            interface UserDataHandler$ {
                handle(arg0: number, arg1: string, arg2: any, arg3: Node, arg4: Node): void;
            }
            type UserDataHandler = UserDataHandler_S & UserDataHandler$;
        }
        namespace org.xml.sax {
            interface Attributes_S {
            }
            interface Attributes$ {
                getIndex(arg0: string): number;
                getIndex(arg0: string, arg1: string): number;
                getLength(): number;
                getLocalName(arg0: number): string;
                getQName(arg0: number): string;
                getType(arg0: number): string;
                getType(arg0: string): string;
                getType(arg0: string, arg1: string): string;
                getURI(arg0: number): string;
                getValue(arg0: number): string;
                getValue(arg0: string): string;
                getValue(arg0: string, arg1: string): string;
            }
            type Attributes = Attributes_S & Attributes$;
            interface ContentHandler_S {
            }
            interface ContentHandler$ {
                characters(arg0: string[], arg1: number, arg2: number): void;
                endDocument(): void;
                endElement(arg0: string, arg1: string, arg2: string): void;
                endPrefixMapping(arg0: string): void;
                ignorableWhitespace(arg0: string[], arg1: number, arg2: number): void;
                processingInstruction(arg0: string, arg1: string): void;
                setDocumentLocator(arg0: Locator): void;
                skippedEntity(arg0: string): void;
                startDocument(): void;
                startElement(arg0: string, arg1: string, arg2: string, arg3: Attributes): void;
                startPrefixMapping(arg0: string, arg1: string): void;
            }
            type ContentHandler = ContentHandler_S & ContentHandler$;
            interface DTDHandler_S {
            }
            interface DTDHandler$ {
                notationDecl(arg0: string, arg1: string, arg2: string): void;
                unparsedEntityDecl(arg0: string, arg1: string, arg2: string, arg3: string): void;
            }
            type DTDHandler = DTDHandler_S & DTDHandler$;
            interface EntityResolver_S {
            }
            interface EntityResolver$ {
                resolveEntity(arg0: string, arg1: string): InputSource;
            }
            type EntityResolver = EntityResolver_S & EntityResolver$;
            interface ErrorHandler_S {
            }
            interface ErrorHandler$ {
                error(arg0: SAXParseException): void;
                fatalError(arg0: SAXParseException): void;
                warning(arg0: SAXParseException): void;
            }
            type ErrorHandler = ErrorHandler_S & ErrorHandler$;
            interface InputSource_S {
            }
            interface InputSource_C extends InputSource_S {
                new (): InputSource;
                new (arg0: java.io.Reader): InputSource;
                new (arg0: java.io.InputStream): InputSource;
                new (arg0: string): InputSource;
            }
            interface InputSource$ {
                getByteStream(): java.io.InputStream;
                getCharacterStream(): java.io.Reader;
                getEncoding(): string;
                getPublicId(): string;
                getSystemId(): string;
                setByteStream(arg0: java.io.InputStream): void;
                setCharacterStream(arg0: java.io.Reader): void;
                setEncoding(arg0: string): void;
                setPublicId(arg0: string): void;
                setSystemId(arg0: string): void;
            }
            type InputSource = InputSource_S & InputSource$;
            interface Locator_S {
            }
            interface Locator$ {
                getColumnNumber(): number;
                getLineNumber(): number;
                getPublicId(): string;
                getSystemId(): string;
            }
            type Locator = Locator_S & Locator$;
            interface SAXException_S {
            }
            type SAXException_ST = java.lang.Exception_S & SAXException_S;
            interface SAXException_C extends SAXException_ST {
                new (): SAXException;
                new (arg0: java.lang.Exception): SAXException;
                new (arg0: string): SAXException;
                new (arg0: string, arg1: java.lang.Exception): SAXException;
            }
            interface SAXException$ {
                getException(): java.lang.Exception;
            }
            type SAXException = java.lang.Exception & SAXException_S & SAXException$;
            interface SAXParseException_S {
            }
            type SAXParseException_ST = SAXException_S & SAXParseException_S;
            interface SAXParseException_C extends SAXParseException_ST {
                new (arg0: string, arg1: Locator): SAXParseException;
                new (arg0: string, arg1: Locator, arg2: java.lang.Exception): SAXParseException;
                new (arg0: string, arg1: string, arg2: string, arg3: number, arg4: number): SAXParseException;
                new (arg0: string, arg1: string, arg2: string, arg3: number, arg4: number, arg5: java.lang.Exception): SAXParseException;
            }
            interface SAXParseException$ {
                getColumnNumber(): number;
                getLineNumber(): number;
                getPublicId(): string;
                getSystemId(): string;
            }
            type SAXParseException = SAXException & SAXParseException_S & SAXParseException$;
            interface XMLReader_S {
            }
            interface XMLReader$ {
                getContentHandler(): ContentHandler;
                getDTDHandler(): DTDHandler;
                getEntityResolver(): EntityResolver;
                getErrorHandler(): ErrorHandler;
                getFeature(arg0: string): boolean;
                getProperty(arg0: string): any;
                parse(arg0: InputSource): void;
                parse(arg0: string): void;
                setContentHandler(arg0: ContentHandler): void;
                setDTDHandler(arg0: DTDHandler): void;
                setEntityResolver(arg0: EntityResolver): void;
                setErrorHandler(arg0: ErrorHandler): void;
                setFeature(arg0: string, arg1: boolean): void;
                setProperty(arg0: string, arg1: any): void;
            }
            type XMLReader = XMLReader_S & XMLReader$;
        }
        namespace org.xml.sax.ext {
            interface LexicalHandler_S {
            }
            interface LexicalHandler$ {
                comment(arg0: string[], arg1: number, arg2: number): void;
                endCDATA(): void;
                endDTD(): void;
                endEntity(arg0: string): void;
                startCDATA(): void;
                startDTD(arg0: string, arg1: string, arg2: string): void;
                startEntity(arg0: string): void;
            }
            type LexicalHandler = LexicalHandler_S & LexicalHandler$;
        }
        namespace org.xml.sax.helpers {
            interface DefaultHandler_S {
            }
            type DefaultHandler_ST = ErrorHandler_S & ContentHandler_S & DTDHandler_S & EntityResolver_S & DefaultHandler_S;
            interface DefaultHandler_C extends DefaultHandler_ST {
                new (): DefaultHandler;
            }
            interface DefaultHandler$ {
            }
            type DefaultHandler = EntityResolver & DTDHandler & ContentHandler & ErrorHandler & DefaultHandler_S & DefaultHandler$;
        }
        namespace sun.awt {
            enum CausedFocusEvent$Cause {
                UNKNOWN,
                MOUSE_EVENT,
                TRAVERSAL,
                TRAVERSAL_UP,
                TRAVERSAL_DOWN,
                TRAVERSAL_FORWARD,
                TRAVERSAL_BACKWARD,
                MANUAL_REQUEST,
                AUTOMATIC_TRAVERSE,
                ROLLBACK,
                NATIVE_SYSTEM,
                ACTIVATION,
                CLEAR_GLOBAL_FOCUS_OWNER,
                RETARGETED
            }
        }
        namespace sun.java2d.pipe {
            interface Region_S {
                readonly EMPTY_REGION: Region;
                readonly WHOLE_REGION: Region;
                clipAdd(arg0: number, arg1: number): number;
                clipScale(arg0: number, arg1: number): number;
                dimAdd(arg0: number, arg1: number): number;
                getInstance(arg0: number[]): Region;
                getInstance(arg0: java.awt.Rectangle): Region;
                getInstance(arg0: java.awt.Shape, arg1: java.awt.geom.AffineTransform): Region;
                getInstance(arg0: Region, arg1: java.awt.Shape, arg2: java.awt.geom.AffineTransform): Region;
                getInstance(arg0: Region, arg1: boolean, arg2: java.awt.Shape, arg3: java.awt.geom.AffineTransform): Region;
                getInstanceXYWH(arg0: number, arg1: number, arg2: number, arg3: number): Region;
                getInstanceXYXY(arg0: number, arg1: number, arg2: number, arg3: number): Region;
            }
            interface Region_C extends Region_S {
                new (): Region;
            }
            interface Region$ {
                appendSpans(arg0: SpanIterator): void;
                clipBoxToBounds(arg0: number[]): void;
                contains(arg0: number, arg1: number): boolean;
                encompasses(arg0: Region): boolean;
                encompassesXYWH(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
                encompassesXYXY(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
                filter(arg0: SpanIterator): SpanIterator;
                getBounds(arg0: number[]): void;
                getBoundsIntersection(arg0: java.awt.Rectangle): this;
                getBoundsIntersection(arg0: Region): this;
                getBoundsIntersectionXYWH(arg0: number, arg1: number, arg2: number, arg3: number): this;
                getBoundsIntersectionXYXY(arg0: number, arg1: number, arg2: number, arg3: number): this;
                getDifference(arg0: Region): this;
                getExclusiveOr(arg0: Region): this;
                getHeight(): number;
                getHiX(): number;
                getHiY(): number;
                getIntersection(arg0: Region): this;
                getIntersection(arg0: java.awt.Rectangle): this;
                getIntersectionXYWH(arg0: number, arg1: number, arg2: number, arg3: number): this;
                getIntersectionXYXY(arg0: number, arg1: number, arg2: number, arg3: number): this;
                getIterator(): RegionIterator;
                getLoX(): number;
                getLoY(): number;
                getScaledRegion(arg0: number, arg1: number): this;
                getSpanIterator(): SpanIterator;
                getSpanIterator(arg0: number[]): SpanIterator;
                getTranslatedRegion(arg0: number, arg1: number): this;
                getUnion(arg0: Region): this;
                getWidth(): number;
                intersectsQuickCheck(arg0: Region): boolean;
                intersectsQuickCheckXYXY(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
                isEmpty(): boolean;
                isInsideQuickCheck(arg0: Region): boolean;
                isInsideXYWH(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
                isInsideXYXY(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
                isRectangular(): boolean;
                setOutputArea(arg0: number[]): void;
                setOutputArea(arg0: java.awt.Rectangle): void;
                setOutputAreaXYWH(arg0: number, arg1: number, arg2: number, arg3: number): void;
                setOutputAreaXYXY(arg0: number, arg1: number, arg2: number, arg3: number): void;
            }
            type Region = Region_S & Region$;
            interface RegionIterator_S {
            }
            interface RegionIterator_C extends RegionIterator_S {
                new (): RegionIterator;
            }
            interface RegionIterator$ {
                copyStateFrom(arg0: RegionIterator): void;
                createCopy(): this;
                nextXBand(arg0: number[]): boolean;
                nextYRange(arg0: number[]): boolean;
            }
            type RegionIterator = RegionIterator_S & RegionIterator$;
            interface SpanIterator_S {
            }
            interface SpanIterator$ {
                getNativeIterator(): long;
                getPathBox(arg0: number[]): void;
                intersectClipBox(arg0: number, arg1: number, arg2: number, arg3: number): void;
                nextSpan(arg0: number[]): boolean;
                skipDownTo(arg0: number): void;
            }
            type SpanIterator = SpanIterator_S & SpanIterator$;
        }
    }
}
