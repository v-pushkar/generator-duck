import { makeStyles, Theme } from '@material-ui/core'

export const useSharedStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100%'
    },
    header: {
        display: 'flex',
        flex: 1,
        padding: '0 1rem',
        justifyContent: 'space-between',
        height: '3rem',
        textAlign: 'center',
        alignItems: 'baseline',
        '& > div': {
            margin: '0.5rem 0 0 20px',
            fontSize: '1.333rem',
            cursor: 'pointer',
            outline: 'none'
        },
        '& > span': {
            alignSelf: 'flex-end',
            fontSize: '1.416rem',
            fontWeight: 'bold',
            color: theme.brandColor?.blackThird,
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            minWidth: 0
        }
    },
    contentWrapper: {
        height: 'calc(100% - 7rem)',
        overflowY: 'auto',
        padding: '1rem 0',
        '&::-webkit-scrollbar': {
            width: '0.25rem'
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 0.25rem rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 0.25rem rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)'
        }
    },
    ellipsisText: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        display: 'block',
        overflow: 'hidden'
    },
    closeIcon: {
        cursor: 'pointer',
        color: theme.brandColor?.greyDarkSecondary
    },
    bottomPanel: {
        position: 'absolute',
        bottom: '0',
        background: theme.brandColor?.whiteThird,
        zIndex: 2,
        height: '4rem',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 1.25rem',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: '32px'
    },
    progress: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    shadedWrapper: {
        background: theme.brandColor?.whiteThird,
        margin: '0 16px',
        padding: '8px',
        borderRadius: '9px',
        width: 'auto'
    },
    marginedWrapper: {
        marginBottom: '1rem'
    },
    informationsWrapper: {
        margin: '0px 24px 1rem'
    }
}))
